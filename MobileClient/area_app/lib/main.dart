import 'package:flutter/material.dart';
import 'package:area_app/login/login.dart';
import 'package:area_app/login/register.dart';
import 'package:area_app/pages/dashboard.dart';
import 'package:area_app/pages/settings.dart';
import 'package:area_app/globals.dart' as globals;

void main() {
  runApp(App());
}

class App extends StatefulWidget {
  @override
  _AppState createState() => _AppState();
}

class _AppState extends State<App> {
  @override
  void initState() {
    super.initState();
    globals.currentTheme.addListener(() {
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Area',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          brightness: Brightness.light,
          primarySwatch: Colors.blue,
        ),
        initialRoute: '/',
        darkTheme: ThemeData(
          brightness: Brightness.dark,
          accentColor: Color(0xFF432C85),
        ),
        themeMode: globals.currentTheme.currentTheme(),
        routes: {
          '/': (context) => LoginWidget(),
          '/login': (context) => LoginWidget(),
          '/signup': (context) => RegisterWidget(),
          '/home': (context) => Dashboard(),
          '/setting': (context) => Setting(),
        });
  }
}
