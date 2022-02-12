import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:area_app/globals.dart' as globals;
import 'package:area_app/pages/home.dart';
import 'package:area_app/pages/service.dart';
import 'package:area_app/pages/settings.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:notification_banner/notification_banner.dart';

class Dashboard extends StatefulWidget {
  @override
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  bool isSwitched = globals.currentTheme.getDarkMode();
  onGoBack(dynamic value) {
    if (globals.area_maked == true) {
      globals.area_maked = false;
    }
  }

  @override
  void initState() {}

  void logout() async {
    Navigator.pushReplacementNamed(context, '/login');
  }

  PageController _pageController = PageController(
    initialPage: 0,
    keepPage: true,
  );

  void pageChanged(int index) {
    setState(() {
      globals.selectedIndex = index;
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
              child: new Text(
                'Yes',
                style: TextStyle(color: Colors.red),
              ),
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

  Widget _createBottomNavigationBar() {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: globals.currentTheme.getDarkMode()
              ? tabGradientsDark
              : tabGradients,
          end: Alignment.topCenter,
          begin: Alignment.bottomCenter,
          stops: [0.0, 0.9],
          tileMode: TileMode.clamp,
        ),
      ),
      child: BottomNavigationBar(
        currentIndex: globals.selectedIndex,
        onTap: (index) {
          setState(() {
            globals.selectedIndex = index;
            _pageController.animateToPage(index,
                duration: Duration(milliseconds: 500), curve: Curves.ease);
          });
        },
        showUnselectedLabels: false,
        backgroundColor: Colors.transparent,
        type: BottomNavigationBarType.fixed,
        elevation: 0,
        unselectedItemColor: Colors.white,
        selectedIconTheme: IconThemeData(color: Colors.white),
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.desktop_mac),
            title: Text(
              "Dashboard",
              style: TextStyle(color: Colors.white),
            ),
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.notifications),
            title: Text(
              "Services",
              style: TextStyle(color: Colors.white),
            ),
          ),
          /*BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            title: Text(
              "Settings",
              style: TextStyle(color: Colors.white),
            ),
          ),*/
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return new WillPopScope(
      onWillPop: () async => false,
      child: DefaultTabController(
        length: 2,
        child: Scaffold(
          resizeToAvoidBottomInset: true,
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
                        icon: const Icon(Icons.account_circle),
                        tooltip: 'Next page',
                        onPressed: () async {}),
                    title: Text('Delete account',
                        style: TextStyle(color: Colors.red[900])),
                    onTap: _showcontent,
                  ),
                  ListTile(
                    leading: IconButton(
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
                          Icon(Icons.wb_sunny_outlined),
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
                          Icon(Icons.nights_stay_outlined),
                        ],
                      )),
                ],
              ),
            ),
          ),
          bottomNavigationBar: _createBottomNavigationBar(),
          body: PageView(
            physics: ClampingScrollPhysics(),
            onPageChanged: (index) {
              pageChanged(index);
            },
            controller: _pageController,
            children: [
              Home(),
              Service(),
              //Setting(),
            ],
          ),
        ),
      ),
    );
  }
}

const List<Color> tabGradientsDark = [
  Color(0xFF432c85),
  Color(0xFF64b7fd),
];

const List<Color> tabGradients = [
  Color(0xFF64a7fd),
  Color(0xFF5ee3df),
];
