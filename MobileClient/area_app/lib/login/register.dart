import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:area_app/globals.dart' as globals;
import 'package:sign_button/sign_button.dart';
import 'package:area_app/login/Background.dart';
import 'dart:convert';
import 'package:flutter_facebook_login/flutter_facebook_login.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:http/http.dart' as http;

GoogleSignIn _googleSignIn = GoogleSignIn(
  scopes: <String>[
    'email',
    'https://www.googleapis.com/auth/contacts.readonly',
  ],
);

class RegisterWidget extends StatefulWidget {
  @override
  _RegisterWidgetState createState() => _RegisterWidgetState();
}

class _RegisterWidgetState extends State<RegisterWidget> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        resizeToAvoidBottomInset: false,
        backgroundColor: Colors.white,
        body: Stack(
          children: <Widget>[
            Background(),
            Register(),
          ],
        ));
  }
}

class Register extends StatefulWidget {
  @override
  _RegisterState createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  final double topRight = 30;
  final double bottomRight = 0;
  TextEditingController _emailController;
  TextEditingController _passwordController;
  TextEditingController _nameController;
  GoogleSignInAccount _currentUser;
  String _contactText;

  void _showcontent() {
    showDialog(
      context: context, barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return new AlertDialog(
          title: new Text('Register fail'),
          content: new SingleChildScrollView(
            child: new ListBody(
              children: [
                new Text('Email or password already exist.'),
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

  @override
  void initState() {
    super.initState();
    _emailController = TextEditingController();
    _passwordController = TextEditingController();
    _nameController = TextEditingController();
    _googleSignIn.onCurrentUserChanged.listen((GoogleSignInAccount account) {
      setState(() {
        _currentUser = account;
      });
      if (_currentUser != null) {
        _handleGetContact();
      }
    });
    _googleSignIn.signInSilently();
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

  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    _nameController.dispose();
    super.dispose();
  }

  void initiateFacebookLogin() async {
    final FacebookLogin facebookSignIn = new FacebookLogin();
    var facebookLogin = FacebookLogin();
    facebookLogin.loginBehavior = FacebookLoginBehavior.webViewOnly;
    var facebookLoginResult = await facebookSignIn.logIn(['email']);
    switch (facebookLoginResult.status) {
      case FacebookLoginStatus.error:
        print("Error");
        break;
      case FacebookLoginStatus.cancelledByUser:
        print("CancelledByUser");
        break;
      case FacebookLoginStatus.loggedIn:
        final graphResponse = await http.get(
            'https://graph.facebook.com/v2.12/me?fields=name,first_name,last_name,email&access_token=${facebookLoginResult.accessToken.token}');
        print(graphResponse);
        final profile = json.decode(graphResponse.body);
        print(profile);
        LogToBackFb(profile);
        break;
    }
  }

  void LogToBackFb(final body) async {
    print(body['name']);
    final response = await http.post(
      globals.local_url + "/auth",
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode({
        "action": "register",
        "connectionMethod": "facebook",
        "username": body['name'],
        "facebookId": body['id'],
      }),
    );
    print(response.body);
    if (response.statusCode == 200) {
      globals.username = body['name'];
      Navigator.pushNamed(context, '/home');
    } else
      _showcontent();
  }

  void LogToBackGoogle() async {
    final response = await http.post(
      globals.local_url + "/auth",
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode({
        "action": "register",
        "connectionMethod": "google",
        "username": _currentUser.displayName,
        "googleId": _currentUser.id,
      }),
    );
    print(response.statusCode);
    if (response.statusCode == 200) {
      globals.username = _currentUser.displayName;
      Navigator.pushNamed(context, '/home');
    } else
      _showcontent();
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

  Future<void> _handleSignIn() async {
    print("click");
    try {
      await _googleSignIn.signIn();
      print("log");
      print(_currentUser);
      LogToBackGoogle();
    } catch (error) {
      print("error append");
      print(error);
      _handleSignOut();
    }
  }

  Future<void> _handleSignOut() => _googleSignIn.disconnect();

  @override
  Widget build(BuildContext context) {
    return new WillPopScope(
        onWillPop: () async => false,
        child: Column(
          children: <Widget>[
            Padding(
              padding: EdgeInsets.only(
                  top: MediaQuery.of(context).size.height / 2.7),
            ),
            Column(
              children: <Widget>[
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Padding(
                      padding: EdgeInsets.only(left: 40, bottom: 5),
                      child: Text(
                        "Email",
                        style:
                            TextStyle(fontSize: 16, color: Color(0xFF999A9A)),
                      ),
                    ),
                    Stack(
                      alignment: Alignment.bottomRight,
                      children: <Widget>[
                        Padding(
                          padding:
                              EdgeInsets.only(right: 40, left: 20, bottom: 30),
                          child: Container(
                            width: MediaQuery.of(context).size.width - 40,
                            height: MediaQuery.of(context).size.height / 15,
                            child: Material(
                              elevation: 8,
                              color: Colors.white,
                              shape: RoundedRectangleBorder(
                                  borderRadius:
                                      BorderRadius.all(Radius.circular(30))),
                              child: Padding(
                                padding: EdgeInsets.only(
                                    left: 40, right: 20, top: 10, bottom: 10),
                                child: TextField(
                                  controller: _emailController,
                                  decoration: InputDecoration(
                                      border: InputBorder.none,
                                      hintText: "Adrianne@example.com",
                                      hintStyle: TextStyle(
                                          color: Color(0xFFE1E1E1),
                                          fontSize: 14)),
                                ),
                              ),
                            ),
                          ),
                        ),
                        Padding(
                            padding: EdgeInsets.only(right: 50),
                            child: Row(
                              children: <Widget>[
                                Expanded(
                                    child: Padding(
                                  padding: EdgeInsets.only(top: 40),
                                )),
                              ],
                            ))
                      ],
                    ),
                    Padding(
                      padding: EdgeInsets.only(left: 40, bottom: 5),
                      child: Text(
                        "Name",
                        style:
                            TextStyle(fontSize: 16, color: Color(0xFF999A9A)),
                      ),
                    ),
                    Stack(
                      alignment: Alignment.bottomRight,
                      children: <Widget>[
                        Padding(
                          padding:
                              EdgeInsets.only(right: 40, left: 20, bottom: 30),
                          child: Container(
                            width: MediaQuery.of(context).size.width - 40,
                            height: MediaQuery.of(context).size.height / 15,
                            child: Material(
                              elevation: 8,
                              color: Colors.white,
                              shape: RoundedRectangleBorder(
                                  borderRadius:
                                      BorderRadius.all(Radius.circular(30))),
                              child: Padding(
                                padding: EdgeInsets.only(
                                    left: 40, right: 20, top: 10, bottom: 10),
                                child: TextField(
                                  controller: _nameController,
                                  decoration: InputDecoration(
                                      border: InputBorder.none,
                                      hintText: "Adrianne",
                                      hintStyle: TextStyle(
                                          color: Color(0xFFE1E1E1),
                                          fontSize: 14)),
                                ),
                              ),
                            ),
                          ),
                        ),
                        Padding(
                            padding: EdgeInsets.only(right: 50),
                            child: Row(
                              children: <Widget>[
                                Expanded(
                                    child: Padding(
                                  padding: EdgeInsets.only(top: 40),
                                )),
                              ],
                            ))
                      ],
                    ),
                    Padding(
                      padding: EdgeInsets.only(left: 40, bottom: 5),
                      child: Text(
                        "Password",
                        style:
                            TextStyle(fontSize: 16, color: Color(0xFF999A9A)),
                      ),
                    ),
                    Stack(
                      alignment: Alignment.bottomRight,
                      children: <Widget>[
                        Padding(
                          padding:
                              EdgeInsets.only(right: 20, left: 20, bottom: 30),
                          child: Container(
                            width: MediaQuery.of(context).size.width - 40,
                            height: MediaQuery.of(context).size.height / 15,
                            child: Material(
                              elevation: 8,
                              color: Colors.white,
                              shape: RoundedRectangleBorder(
                                  borderRadius:
                                      BorderRadius.all(Radius.circular(30))),
                              child: Padding(
                                padding: EdgeInsets.only(
                                    left: 40, right: 20, top: 10, bottom: 10),
                                child: TextField(
                                  controller: _passwordController,
                                  decoration: InputDecoration(
                                      border: InputBorder.none,
                                      hintText: "Enter password",
                                      hintStyle: TextStyle(
                                          color: Color(0xFFE1E1E1),
                                          fontSize: 14)),
                                  obscureText: true,
                                ),
                              ),
                            ),
                          ),
                        ),
                        Padding(
                            padding: EdgeInsets.only(right: 50),
                            child: Row(
                              children: <Widget>[
                                Expanded(
                                    child: Padding(
                                  padding: EdgeInsets.only(top: 40, left: 20),
                                  child: GestureDetector(
                                    onTap: () {
                                      Navigator.pushNamed(context, '/login');
                                    },
                                    child: Text.rich(TextSpan(
                                        text: 'Have an account : ',
                                        style:
                                            TextStyle(color: Color(0xFF999A9A)),
                                        children: [
                                          TextSpan(
                                            text: 'Signin',
                                            style: TextStyle(
                                              color: Color(0xFF00AFFB),
                                              decoration:
                                                  TextDecoration.underline,
                                            ),
                                          ),
                                        ])),
                                  ),
                                )),
                              ],
                            ))
                      ],
                    ),
                  ],
                ),
                Padding(
                  padding: EdgeInsets.only(bottom: 30),
                ),
                RaisedButton(
                  onPressed: () async {
                    final response = await http.post(
                      globals.local_url + "/auth",
                      headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                      },
                      body: jsonEncode({
                        "action": "register",
                        "connectionMethod": "email",
                        "username": _nameController.text,
                        "email": _emailController.text,
                        "password": _passwordController.text,
                      }),
                    );
                    print(response.statusCode);
                    if (response.statusCode == 200) {
                      globals.username = _nameController.text;
                      Navigator.pushNamed(context, '/home');
                    } else
                      _showcontent();
                  },
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(80.0)),
                  padding: const EdgeInsets.all(0.0),
                  child: Ink(
                    decoration: const BoxDecoration(
                      gradient: LinearGradient(
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                          colors: signUpGradients),
                      borderRadius: BorderRadius.all(Radius.circular(80.0)),
                    ),
                    child: Container(
                      width: MediaQuery.of(context).size.width * 0.6,
                      constraints: BoxConstraints(
                          minWidth: MediaQuery.of(context).size.width * 0.6,
                          minHeight: 36.0),
                      alignment: Alignment.center,
                      child: const Text(
                        'Sign Up',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: EdgeInsets.only(bottom: 10),
                ),
                Row(children: [
                  Padding(
                    padding: EdgeInsets.only(right: 30),
                  ),
                  SignInButton(
                    buttonType: ButtonType.facebook,
                    width: MediaQuery.of(context).size.width / 3.5,
                    btnText: 'Sign up',
                    onPressed: () => initiateFacebookLogin(),
                  ),
                  Padding(
                    padding: EdgeInsets.only(right: 30),
                  ),
                  SignInButton(
                    buttonType: ButtonType.google,
                    width: MediaQuery.of(context).size.width / 3.5,
                    btnText: 'Sign up',
                    onPressed: _handleSignIn,
                  ),
                ]),
              ],
            )
          ],
        ));
  }
}

Widget roundedRectButton(
    String title, List<Color> gradient, bool isEndIconVisible) {
  return Builder(builder: (BuildContext mContext) {
    return Padding(
      padding: EdgeInsets.only(bottom: 10),
      child: Stack(
        alignment: Alignment(1.0, 0.0),
        children: <Widget>[
          Container(
            alignment: Alignment.center,
            width: MediaQuery.of(mContext).size.width / 1.7,
            decoration: ShapeDecoration(
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(30.0)),
              gradient: LinearGradient(
                  colors: gradient,
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight),
            ),
            child: Text(title,
                style: TextStyle(
                    color: Colors.white,
                    fontSize: 18,
                    fontWeight: FontWeight.w500)),
            padding: EdgeInsets.only(top: 16, bottom: 16),
          ),
          Visibility(
            visible: isEndIconVisible,
            child: Padding(
                padding: EdgeInsets.only(right: 10),
                child: Icon(
                  Icons.forward_outlined,
                  size: 30,
                  color: Colors.white,
                )),
          ),
        ],
      ),
    );
  });
}

class InputWidget extends StatelessWidget {
  final double topRight;
  final double bottomRight;

  InputWidget(this.topRight, this.bottomRight);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(right: 40, bottom: 30),
      child: Container(
        width: MediaQuery.of(context).size.width - 40,
        height: 50,
        child: Material(
          elevation: 10,
          color: Colors.white,
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.only(
                  bottomRight: Radius.circular(bottomRight),
                  topRight: Radius.circular(topRight))),
          child: Padding(
            padding: EdgeInsets.only(left: 40, right: 20, top: 10, bottom: 10),
            child: TextField(
              decoration: InputDecoration(
                  border: InputBorder.none,
                  hintText: "JohnDoe@example.com",
                  hintStyle: TextStyle(color: Color(0xFFE1E1E1), fontSize: 14)),
            ),
          ),
        ),
      ),
    );
  }
}

class InputPassWidget extends StatelessWidget {
  final double topRight;
  final double bottomRight;

  InputPassWidget(this.topRight, this.bottomRight);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(right: 40, bottom: 30),
      child: Container(
        width: MediaQuery.of(context).size.width - 40,
        height: 50,
        child: Material(
          elevation: 10,
          color: Colors.white,
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.only(
                  bottomRight: Radius.circular(bottomRight),
                  topRight: Radius.circular(topRight))),
          child: Padding(
            padding: EdgeInsets.only(left: 40, right: 20, top: 10, bottom: 10),
            child: TextField(
              decoration: InputDecoration(
                  border: InputBorder.none,
                  hintText: "Some password",
                  hintStyle: TextStyle(color: Color(0xFFE1E1E1), fontSize: 14)),
              obscureText: true,
            ),
          ),
        ),
      ),
    );
  }
}

const List<Color> signUpGradients = [
  Color(0xFF003EFF),
  Color(0xFF05ebdd),
];

const List<Color> signUpGradientsDark = [
  Color(0xFF431c9e),
  Color(0xFF62a7fd),
];
