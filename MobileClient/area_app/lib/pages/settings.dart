import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:area_app/globals.dart' as globals;
import 'package:sign_button/sign_button.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'dart:convert';
import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';
import 'package:area_app/pages/webview.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:http/http.dart' as http;
import 'dart:math';
import 'package:github_auth/github_auth.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import 'package:web_socket_channel/status.dart' as statusCodes;
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:notification_banner/notification_banner.dart';

const URL = 'ws://' + globals.local_url;

final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
    FlutterLocalNotificationsPlugin();

GoogleSignIn _googleSignIn = GoogleSignIn(
  scopes: <String>[
    'email',
    'https://www.googleapis.com/auth/contacts.readonly',
  ],
);

class Setting extends StatefulWidget {
  @override
  _SettingState createState() => _SettingState();
}

class _SettingState extends State<Setting> {
  final flutterWebviewPlugin = new FlutterWebviewPlugin();
  TextEditingController action_param1;
  TextEditingController action_param2;
  TextEditingController action_param3;
  TextEditingController action_param4;
  TextEditingController action_param5;
  TextEditingController reaction_param1;
  TextEditingController reaction_param2;
  TextEditingController reaction_param3;
  TextEditingController reaction_param4;
  TextEditingController reaction_param5;
  GoogleSignInAccount _currentUser;
  WebSocketChannel channel = WebSocketChannel.connect(Uri.parse(URL));
  var sub;
  String text;
  var rng = new Random();

  bool isSwitched = globals.currentTheme.getDarkMode();

  String userId;
  String token_a;
  String token_r;
  String _contactText;

  Future<void> _handleSignIn() async {
    print("click");
    try {
      var result = await _googleSignIn.signIn();
      print("log");
      result.authentication.then((value) => {
            print(value.accessToken),
            globals.action.param1 == "token"
                ? action_param1.text = value.accessToken
                : print(""),
            globals.reaction.param1 == "token"
                ? reaction_param1.text = value.accessToken
                : print(""),
          });
    } catch (error) {
      print("error append");
      print(error);
    }
  }

  @override
  void initState() {
    super.initState();
    _googleSignIn.disconnect();
    action_param1 = TextEditingController();
    action_param2 = TextEditingController();
    action_param3 = TextEditingController();
    action_param4 = TextEditingController();
    action_param5 = TextEditingController();
    reaction_param1 = TextEditingController();
    reaction_param2 = TextEditingController();
    reaction_param3 = TextEditingController();
    reaction_param4 = TextEditingController();
    reaction_param5 = TextEditingController();
    _googleSignIn.onCurrentUserChanged.listen((GoogleSignInAccount account) {
      setState(() {
        _currentUser = account;
      });
      if (_currentUser != null) {
        _handleGetContact();
      }
    });
    _googleSignIn.signInSilently();
    FlutterLocalNotificationsPlugin notifications =
        FlutterLocalNotificationsPlugin();
    final androidInit = AndroidInitializationSettings('app_icon');
    final InitializationSettings init = InitializationSettings(
      android: androidInit,
    );
    notifications.initialize(init).then((done) {
      sub = channel.stream.listen((newData) {
        setState(() {
          text = newData;
        });

        notifications.show(
            0,
            "New announcement",
            newData,
            NotificationDetails(
              android: AndroidNotificationDetails(
                  "announcement_app_0", "Announcement App", ""),
            ));
      });
    });
  }

  void _showcontent() {
    showDialog(
      context: context, barrierDismissible: false, // user must tap button!

      builder: (BuildContext context) {
        return new AlertDialog(
          title: new Text('Delete Account'),
          content: new SingleChildScrollView(
            child: new ListBody(
              children: [
                new Text('Are you sure you want to delete your Account?'),
              ],
            ),
          ),
          actions: [
            new FlatButton(
              child: new Text('No'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
            new FlatButton(
              child: new Text('Yes'),
              onPressed: () async {
                final url = Uri.parse(globals.local_url + "/auth");
                final request = await http.Request("DELETE", url);
                request.headers.addAll(<String, String>{
                  'Content-Type': 'application/json; charset=UTF-8',
                });
                request.body = jsonEncode({"username": globals.username});
                final response = await request.send();
                print(response.statusCode);
                if (response.statusCode == 200)
                  Navigator.of(context).pushNamed('/login');
              },
            ),
          ],
        );
      },
    );
  }

  void _showerror() {
    showDialog(
      context: context, barrierDismissible: false, // user must tap button!

      builder: (BuildContext context) {
        return new AlertDialog(
          title: new Text('You clicked on'),
          content: new SingleChildScrollView(
            child: new ListBody(
              children: [
                new Text('You already made this Area.'),
              ],
            ),
          ),
          actions: [
            new FlatButton(
              child: new Text('Ok'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  Future<void> _handleGetContact() async {
    setState(() {
      _contactText = "Loading contact info...";
    });
    final http.Response response = await http.get(
      'https://people.googleapis.com/v1/people/me/connections'
      '?requestMask.includeField=person.names',
      headers: await _currentUser.authHeaders,
    );
    if (response.statusCode != 200) {
      setState(() {
        _contactText = "People API gave a ${response.statusCode} "
            "response. Check logs for details.";
      });
      print('People API ${response.statusCode} response: ${response.body}');
      return;
    }
    final Map<String, dynamic> data = json.decode(response.body);
    final String namedContact = _pickFirstNamedContact(data);
    setState(() {
      if (namedContact != null) {
        _contactText = "I see you know $namedContact!";
      } else {
        _contactText = "No contacts to display.";
      }
    });
  }

  String _pickFirstNamedContact(Map<String, dynamic> data) {
    final List<dynamic> connections = data['connections'];
    final Map<String, dynamic> contact = connections?.firstWhere(
      (dynamic contact) => contact['names'] != null,
      orElse: () => null,
    );
    if (contact != null) {
      final Map<String, dynamic> name = contact['names'].firstWhere(
        (dynamic name) => name['displayName'] != null,
        orElse: () => null,
      );
      if (name != null) {
        return name['displayName'];
      }
    }
    return null;
  }

  Future<void> githubSignIn(BuildContext context) async {
    final auth = GithubAuth(
      clientId: '91cbcd8ac34386989479',
      clientSecret: '4edcffb4207ad060cb0f0ef699535be7e0dfeb8f',
      callbackUrl: 'https://area-305822.firebaseapp.com/__/auth/handler',
      clearCache: false,
    );
    try {
      FlutterAuthResult resp = await auth.login(context);
      print('Successfully retrieved result ${resp.toString()}');
      print(resp);
      globals.action.param1 == "token"
          ? action_param1.text = "f45564ee326713db9ced7c452f3afb3c7c2320e8"
          : print("");
      globals.reaction.param1 == "token"
          ? reaction_param1.text = "f45564ee326713db9ced7c452f3afb3c7c2320e8"
          : print("");
    } on FlutterAuthException catch (e) {
      switch (e.code) {
        case FlutterAuthExceptionCode.login:
          print('A exception occurred during a login attempt: ${e.toString()}');
          if (e.details != null && e.details is GithubAPIError) {
            print('A GithubAPIError ${e.details.code} ${e.details.uri}');
          }
          break;
        case FlutterAuthExceptionCode.cancelled:
          print('Login process was cancelled by user: ${e.toString()}');
          break;
        case FlutterAuthExceptionCode.network:
          print('A network exception was thrown: ${e.toString()}');
          break;
      }
    } catch (e) {
      print('Exception $e');
    }
  }

  @override
  void dispose() {
    action_param1.dispose();
    action_param2.dispose();
    action_param3.dispose();
    action_param4.dispose();
    action_param5.dispose();
    reaction_param1.dispose();
    reaction_param2.dispose();
    reaction_param3.dispose();
    reaction_param4.dispose();
    reaction_param5.dispose();
    super.dispose();
    channel.sink.close(statusCodes.goingAway);
    sub.cancel();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Container(
        decoration: BoxDecoration(
            image: DecorationImage(
                image: AssetImage("asset/shadow.png"),
                fit: BoxFit.cover,
                colorFilter: globals.currentTheme.getDarkMode()
                    ? ColorFilter.mode(Colors.black, BlendMode.color)
                    : ColorFilter.mode(Colors.grey[100], BlendMode.darken))),
        child: Scaffold(
            backgroundColor: Colors.transparent,
            appBar: AppBar(
              title: Image.asset('asset/LogoAreaWhite.png',
                  fit: BoxFit.contain, height: 50),
              centerTitle: true,
              flexibleSpace: Container(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                      colors: globals.currentTheme.getDarkMode()
                          ? tabGradientsDark
                          : tabGradients),
                ),
              ),
            ),
            drawer: Container(
              width: MediaQuery.of(context).size.width * 0.6,
              child: Drawer(
                  child: Container(
                color: globals.currentTheme.getDarkMode()
                    ? Colors.grey[900]
                    : Colors.white,
                child: ListView(
                  padding: EdgeInsets.zero,
                  children: <Widget>[
                    DrawerHeader(
                      child: Column(children: [
                        Text(globals.username,
                            style: TextStyle(color: Colors.white)),
                        Padding(
                          padding: EdgeInsets.only(bottom: 30),
                        ),
                        Image.asset('asset/user.png'),
                      ]),
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                            begin: Alignment.topCenter,
                            end: Alignment.bottomCenter,
                            colors: globals.currentTheme.getDarkMode()
                                ? tabGradientsDark
                                : tabGradients),
                      ),
                    ),
                    ListTile(
                      leading: IconButton(
                          color: globals.currentTheme.getDarkMode()
                              ? Colors.white
                              : Colors.grey,
                          icon: const Icon(Icons.account_circle),
                          tooltip: 'Next page',
                          onPressed: () async {}),
                      title: Text('Delete account',
                          style: TextStyle(color: Colors.red[900])),
                      onTap: _showcontent,
                    ),
                    ListTile(
                      leading: IconButton(
                          color: globals.currentTheme.getDarkMode()
                              ? Colors.white
                              : Colors.grey,
                          icon: const Icon(Icons.logout),
                          tooltip: 'Next page',
                          onPressed: () async {}),
                      title: Text('Logout',
                          style: TextStyle(
                              color: globals.currentTheme.getDarkMode()
                                  ? Color(0xFF64a7fd)
                                  : Color(0xFF432c85))),
                      onTap: () {
                        Navigator.of(context).pushNamed('/login');
                      },
                    ),
                    Container(
                        padding: EdgeInsets.only(left: 25),
                        child: Row(
                          children: [
                            Icon(
                              Icons.wb_sunny_outlined,
                              color: globals.currentTheme.getDarkMode()
                                  ? Colors.white
                                  : Colors.grey,
                            ),
                            Switch(
                              value: isSwitched,
                              onChanged: (value) {
                                setState(() {
                                  isSwitched = value;
                                  globals.currentTheme.setDarkMode(value);
                                  print(isSwitched);
                                });
                              },
                              activeTrackColor: Colors.lightBlueAccent,
                              activeColor: Colors.blueAccent,
                            ),
                            Icon(
                              Icons.nights_stay_outlined,
                              color: globals.currentTheme.getDarkMode()
                                  ? Colors.white
                                  : Colors.grey,
                            ),
                          ],
                        )),
                  ],
                ),
              )),
            ),
            body: SingleChildScrollView(
                child: Stack(children: <Widget>[
              Column(
                children: [
                  Center(
                    child: Card(
                      child: Container(
                        width: MediaQuery.of(context).size.width - 40,
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                              begin: Alignment.topCenter,
                              end: Alignment.bottomCenter,
                              colors: globals.currentTheme.getDarkMode()
                                  ? tabGradientsDark
                                  : tabGradients),
                        ),
                        child: Column(
                          children: [
                            Padding(
                              padding: EdgeInsets.only(bottom: 10),
                            ),
                            Center(
                              child: Text(globals.action.service,
                                  style: TextStyle(
                                      fontSize: 20, color: Colors.white)),
                            ),
                            Center(
                              child: Text(globals.action.area,
                                  style: TextStyle(
                                      fontSize: 15, color: Colors.white)),
                            ),
                            Padding(
                              padding: EdgeInsets.only(bottom: 15),
                            ),
                            globals.action.button != null
                                ? Center(
                                    child: SignInButton(
                                        buttonType: globals.action.button,
                                        btnText: "Connect to " +
                                            globals.action.service,
                                        onPressed: () {
                                          print(globals.action.service);
                                          if (globals.action.service == "Gmail")
                                            _handleSignIn();
                                          if (globals.action.service ==
                                              "Reddit")
                                            Navigator.of(context).push(
                                                MaterialPageRoute(
                                                    builder: (BuildContext
                                                            context) =>
                                                        MyWebView(
                                                          title:
                                                              "Coonect to reddit",
                                                          selectedUrl:
                                                              'https://www.reddit.com/api/v1/authorize?state=1614703336.78640482970&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fabout.json&response_type=code&client_id=DO9UDSH0obTiLw&duration=permanent&scope=history%2Cidentity%2Cread%2Csubmit',
                                                        )));
                                          if (globals.action.service ==
                                              "Github") githubSignIn(context);
                                        }),
                                  )
                                : globals.action.service == "Discord"
                                    ? Center(
                                        child: RaisedButton(
                                        elevation: 10,
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(80.0)),
                                        onPressed: () {
                                          Navigator.of(context).push(
                                              MaterialPageRoute(
                                                  builder:
                                                      (BuildContext context) =>
                                                          MyWebView(
                                                            title:
                                                                "Add Discord bot",
                                                            selectedUrl:
                                                                ' https://discord.com/oauth2/authorize?client_id=810518352523034654&permissions=2147483647&scope=bot',
                                                          )));
                                        },
                                        color: Color(0xFF7289da),
                                        textColor: Colors.white,
                                        child: Row(
                                            mainAxisSize: MainAxisSize.min,
                                            children: [
                                              Image(
                                                image: AssetImage(
                                                  "asset/discorde.png",
                                                ),
                                                height: 40,
                                                width: 40,
                                              ),
                                              Text(
                                                  "Add AreaTest to your guild"),
                                            ]),
                                      ))
                                    : Text(""),
                            Padding(
                              padding: EdgeInsets.only(bottom: 10),
                            ),
                            globals.action.param1 != null &&
                                    globals.action.param1 != "token"
                                ? Center(
                                    child: TextField(
                                        controller: action_param1,
                                        style: TextStyle(
                                            color: Colors.white, fontSize: 20),
                                        decoration: InputDecoration(
                                            filled: true,
                                            focusColor: Colors.white,
                                            hoverColor: Colors.white,
                                            border: new OutlineInputBorder(
                                                borderSide: BorderSide(
                                              color: Colors.white,
                                            )),
                                            hintText: globals.action.param1,
                                            hintStyle: TextStyle(
                                                color: Colors.white,
                                                fontSize: 20))))
                                : Text(""),
                            Padding(
                              padding: EdgeInsets.only(bottom: 4),
                            ),
                            globals.action.param2 != null
                                ? Center(
                                    child: TextField(
                                        controller: action_param2,
                                        style: TextStyle(
                                            color: Colors.white, fontSize: 20),
                                        decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                                borderSide: BorderSide(
                                              color: Colors.white,
                                            )),
                                            hintText: globals.action.param2,
                                            hintStyle: TextStyle(
                                                color: Colors.white,
                                                fontSize: 20))))
                                : Text(""),
                            Padding(
                              padding: EdgeInsets.only(bottom: 4),
                            ),
                            globals.action.param3 != null
                                ? Center(
                                    child: TextField(
                                        controller: action_param3,
                                        style: TextStyle(
                                            color: Colors.white, fontSize: 20),
                                        decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                                borderSide: BorderSide(
                                              color: Colors.white,
                                            )),
                                            hintText: globals.action.param3,
                                            hintStyle: TextStyle(
                                                color: Colors.white,
                                                fontSize: 20))))
                                : Text(""),
                            Padding(
                              padding: EdgeInsets.only(bottom: 4),
                            ),
                            globals.action.param4 != null
                                ? Center(
                                    child: TextField(
                                        controller: action_param4,
                                        style: TextStyle(
                                            color: Colors.white, fontSize: 20),
                                        decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                                borderSide: BorderSide(
                                              color: Colors.white,
                                            )),
                                            hintText: globals.action.param4,
                                            hintStyle: TextStyle(
                                                color: Colors.white,
                                                fontSize: 20))))
                                : Text(""),
                            Padding(
                              padding: EdgeInsets.only(bottom: 4),
                            ),
                            globals.action.param5 != null
                                ? Center(
                                    child: TextField(
                                        controller: action_param5,
                                        style: TextStyle(
                                            color: Colors.white, fontSize: 20),
                                        decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                                borderSide: BorderSide(
                                              color: Colors.white,
                                            )),
                                            hintText: globals.action.param5,
                                            hintStyle: TextStyle(
                                                color: Colors.white,
                                                fontSize: 20))))
                                : Text(""),
                            Padding(
                              padding: EdgeInsets.only(bottom: 4),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 10),
                  ),
                  Center(
                    child: Icon(
                      Icons.add,
                      color: globals.currentTheme.getDarkMode()
                          ? Color(0xFF64a7fd)
                          : Color(0xFF432c85),
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 10),
                  ),
                  Center(
                    child: Card(
                      child: Container(
                        width: MediaQuery.of(context).size.width - 40,
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                              begin: Alignment.topCenter,
                              end: Alignment.bottomCenter,
                              colors: globals.currentTheme.getDarkMode()
                                  ? tabGradientsDark
                                  : tabGradients),
                        ),
                        child: Column(
                          children: [
                            Padding(
                              padding: EdgeInsets.only(bottom: 10),
                            ),
                            Center(
                              child: Text(globals.reaction.service,
                                  style: TextStyle(
                                      fontSize: 20, color: Colors.white)),
                            ),
                            Center(
                              child: Text(globals.reaction.area,
                                  style: TextStyle(
                                      fontSize: 15, color: Colors.white)),
                            ),
                            Padding(
                              padding: EdgeInsets.only(bottom: 15),
                            ),
                            globals.reaction.button != null
                                ? Center(
                                    child: SignInButton(
                                      buttonType: globals.reaction.button,
                                      btnText: "Connect to " +
                                          globals.reaction.service,
                                      onPressed: () {
                                        if (globals.reaction.service == "Gmail")
                                          _handleSignIn();
                                        if (globals.reaction.service ==
                                            "Reddit")
                                          Navigator.of(context).push(
                                              MaterialPageRoute(
                                                  builder:
                                                      (BuildContext context) =>
                                                          MyWebView(
                                                            title:
                                                                "Coonect to reddit",
                                                            selectedUrl:
                                                                'https://www.reddit.com/api/v1/authorize?state=1614703336.78640482970&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fabout.json&response_type=code&client_id=DO9UDSH0obTiLw&duration=permanent&scope=history%2Cidentity%2Cread%2Csubmit',
                                                          )));
                                        if (globals.reaction.service ==
                                            "Github") githubSignIn(context);
                                      },
                                    ),
                                  )
                                : globals.reaction.service == "Discord"
                                    ? Center(
                                        child: RaisedButton(
                                        elevation: 10,
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(80.0)),
                                        onPressed: () {
                                          Navigator.of(context).push(
                                              MaterialPageRoute(
                                                  builder:
                                                      (BuildContext context) =>
                                                          MyWebView(
                                                            title:
                                                                "Add Discord bot",
                                                            selectedUrl:
                                                                ' https://discord.com/oauth2/authorize?client_id=810518352523034654&permissions=2147483647&scope=bot',
                                                          )));
                                        },
                                        color: Color(0xFF7289da),
                                        textColor: Colors.white,
                                        child: Row(
                                            mainAxisSize: MainAxisSize.min,
                                            children: [
                                              Image(
                                                image: AssetImage(
                                                  "asset/discorde.png",
                                                ),
                                                height: 40,
                                                width: 40,
                                              ),
                                              Text(
                                                  "Add AreaTest to your guild"),
                                            ]),
                                      ))
                                    : Text(""),
                            Padding(
                              padding: EdgeInsets.only(bottom: 10),
                            ),
                            globals.reaction.param1 != null &&
                                    globals.reaction.param1 != "token"
                                ? Center(
                                    child: TextField(
                                        controller: reaction_param1,
                                        style: TextStyle(
                                            color: Colors.white, fontSize: 20),
                                        decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                                borderSide: BorderSide(
                                              color: Colors.white,
                                            )),
                                            hintText: globals.reaction.param1,
                                            hintStyle: TextStyle(
                                                color: Colors.white,
                                                fontSize: 20))))
                                : Text(""),
                            Padding(
                              padding: EdgeInsets.only(bottom: 4),
                            ),
                            globals.reaction.param2 != null
                                ? Center(
                                    child: TextField(
                                        controller: reaction_param2,
                                        obscureText:
                                            globals.reaction.service == "Reddit"
                                                ? true
                                                : false,
                                        style: TextStyle(
                                            color: Colors.white, fontSize: 20),
                                        decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                                borderSide: BorderSide(
                                              color: Colors.white,
                                            )),
                                            hintText: globals.reaction.param2,
                                            hintStyle: TextStyle(
                                                color: Colors.white,
                                                fontSize: 20))))
                                : Text(""),
                            Padding(
                              padding: EdgeInsets.only(bottom: 4),
                            ),
                            globals.reaction.param3 != null
                                ? Center(
                                    child: TextField(
                                        controller: reaction_param3,
                                        style: TextStyle(
                                            color: Colors.white, fontSize: 20),
                                        decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                                borderSide: BorderSide(
                                              color: Colors.white,
                                            )),
                                            hintText: globals.reaction.param3,
                                            hintStyle: TextStyle(
                                                color: Colors.white,
                                                fontSize: 20))))
                                : Text(""),
                            Padding(
                              padding: EdgeInsets.only(bottom: 4),
                            ),
                            globals.reaction.param4 != null
                                ? Center(
                                    child: TextField(
                                        controller: reaction_param4,
                                        style: TextStyle(
                                            color: Colors.white, fontSize: 20),
                                        decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                                borderSide: BorderSide(
                                              color: Colors.white,
                                            )),
                                            hintText: globals.reaction.param4,
                                            hintStyle: TextStyle(
                                                color: Colors.white,
                                                fontSize: 20))))
                                : Text(""),
                            Padding(
                              padding: EdgeInsets.only(bottom: 4),
                            ),
                            globals.reaction.param5 != null
                                ? Center(
                                    child: TextField(
                                        controller: reaction_param5,
                                        style: TextStyle(
                                            color: Colors.white, fontSize: 20),
                                        decoration: InputDecoration(
                                            border: OutlineInputBorder(
                                                borderSide: BorderSide(
                                              color: Colors.white,
                                            )),
                                            hintText: globals.reaction.param5,
                                            hintStyle: TextStyle(
                                                color: Colors.white,
                                                fontSize: 20))))
                                : Text(""),
                            Padding(
                              padding: EdgeInsets.only(bottom: 4),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 20),
                  ),
                  Center(
                      child: RaisedButton(
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(80.0)),
                    onPressed: () async {
                      if (globals.area_modify == false) {
                        final response = await http.post(
                          globals.local_url + "/dashboard",
                          headers: {
                            'Content-Type': 'application/json; charset=UTF-8',
                          },
                          body: jsonEncode({
                            "username": globals.username,
                            "placeholder": globals.username +
                                rng.nextInt(10000).toString(),
                            "serviceAction":
                                globals.action.service.toLowerCase(),
                            "action": globals.action.name,
                            "serviceActionConfig": {
                              if (globals.action.param1 != null)
                                globals.action.param1: action_param1.text,
                              if (globals.action.param2 != null)
                                globals.action.param2: action_param2.text,
                              if (globals.action.param3 != null)
                                globals.action.param3: action_param3.text,
                              if (globals.action.param4 != null)
                                globals.action.param4: action_param4.text,
                              if (globals.action.param5 != null)
                                globals.action.param5: action_param5.text,
                              "value": "value",
                            },
                            "serviceReaction":
                                globals.reaction.service.toLowerCase(),
                            "reaction": globals.reaction.name,
                            "serviceReactionConfig": {
                              if (globals.reaction.param1 != null)
                                globals.reaction.param1: reaction_param1.text,
                              if (globals.reaction.param2 != null)
                                globals.reaction.param2: reaction_param2.text,
                              if (globals.reaction.param3 != null)
                                globals.reaction.param3: reaction_param3.text,
                              if (globals.reaction.param4 != null)
                                globals.reaction.param4: reaction_param4.text,
                              if (globals.reaction.param5 != null)
                                globals.reaction.param5: reaction_param5.text,
                              "value": "value",
                            },
                          }),
                        );
                        print(jsonEncode({
                          "username": globals.username,
                          "placeholder":
                              globals.username + rng.nextInt(10000).toString(),
                          "serviceAction": globals.action.service.toLowerCase(),
                          "action": globals.action.name,
                          "serviceActionConfig": {
                            if (globals.action.param1 != null)
                              globals.action.param1: action_param1.text,
                            if (globals.action.param2 != null)
                              globals.action.param2: action_param2.text,
                            if (globals.action.param3 != null)
                              globals.action.param3: action_param3.text,
                            if (globals.action.param4 != null)
                              globals.action.param4: action_param4.text,
                            if (globals.action.param5 != null)
                              globals.action.param5: action_param5.text,
                          },
                          "serviceReaction":
                              globals.reaction.service.toLowerCase(),
                          "reaction": globals.reaction.name,
                          "serviceReactionConfig": {
                            if (globals.reaction.param1 != null)
                              globals.reaction.param1: reaction_param1.text,
                            if (globals.reaction.param2 != null)
                              globals.reaction.param2: reaction_param2.text,
                            if (globals.reaction.param3 != null)
                              globals.reaction.param3: reaction_param3.text,
                            if (globals.reaction.param4 != null)
                              globals.reaction.param4: reaction_param4.text,
                            if (globals.reaction.param5 != null)
                              globals.reaction.param5: reaction_param5.text,
                          },
                        }));
                        print(response.statusCode);
                        if (response.statusCode == 200) {
                          Navigator.pop(context);
                        } else
                          _showerror();
                      } else {
                        final response = await http.patch(
                          globals.local_url + "/dashboard",
                          headers: {
                            'Content-Type': 'application/json; charset=UTF-8',
                          },
                          body: jsonEncode({
                            "username": globals.username,
                            "placeholder": globals.placeholder,
                            "serviceActionConfig": {
                              if (globals.action.param1 != null)
                                globals.action.param1: action_param1.text,
                              if (globals.action.param2 != null)
                                globals.action.param2: action_param2.text,
                              if (globals.action.param3 != null)
                                globals.action.param3: action_param3.text,
                              if (globals.action.param4 != null)
                                globals.action.param4: action_param4.text,
                              if (globals.action.param5 != null)
                                globals.action.param5: action_param5.text,
                            },
                            "serviceReactionConfig": {
                              if (globals.reaction.param1 != null)
                                globals.reaction.param1: reaction_param1.text,
                              if (globals.reaction.param2 != null)
                                globals.reaction.param2: reaction_param2.text,
                              if (globals.reaction.param3 != null)
                                globals.reaction.param3: reaction_param3.text,
                              if (globals.reaction.param4 != null)
                                globals.reaction.param4: reaction_param4.text,
                              if (globals.reaction.param5 != null)
                                globals.reaction.param5: reaction_param5.text,
                            },
                          }),
                        );
                        print(response.statusCode);
                        if (response.statusCode == 200) {
                          Navigator.pop(context);
                        } else
                          _showerror();
                      }
                      //_showNotification();
                    },
                    color: globals.currentTheme.getDarkMode()
                        ? Color(0xFF64a7fd)
                        : Color(0xFF432c85),
                    textColor: Colors.white,
                    child: Text(globals.area_modify == false
                        ? "Make your area!"
                        : "Change your Area"),
                  ))
                ],
              )
            ]))),
      ),
    );
  }
}

const List<Color> tabGradients = [
  Color(0xFF64a7fd),
  Color(0xFF5ee3df),
];
const List<Color> tabGradientsDark = [
  Color(0xFF432c85),
  Color(0xFF64b7fd),
];

Future<void> _showNotification() async {
  const AndroidNotificationDetails androidPlatformChannelSpecifics =
      AndroidNotificationDetails(
          'your channel id', 'your channel name', 'your channel description',
          importance: Importance.max,
          priority: Priority.high,
          ticker: 'ticker');
  const NotificationDetails platformChannelSpecifics =
      NotificationDetails(android: androidPlatformChannelSpecifics);
  await flutterLocalNotificationsPlugin.show(
      0, 'plain title', 'plain body', platformChannelSpecifics,
      payload: 'item x');
}
