import 'package:flutter/material.dart';

extension ColorExtension on String {
  toColor() {
    var hexColor = this.replaceAll("#", "");
    if (hexColor.length == 6) {
      hexColor = "FF" + hexColor;
    }
    if (hexColor.length == 8) {
      return Color(int.parse("0x$hexColor"));
    }
  }
}

class MyTheme with ChangeNotifier {
  Color accent = darkMode ? "432c85".toColor() : "05dcdd".toColor();
  Color background = darkMode ? "432c85".toColor() : "003eff".toColor();
  Color darktext = darkMode ? Colors.grey : Colors.black;
  Color maincolor = "003eff".toColor();
  Color secondaryColorLight = "05dcdd".toColor();
  Color secondaryColorDark = "432c85".toColor();
  static bool darkMode = false;

  ThemeMode currentTheme() {
    return darkMode ? ThemeMode.dark : ThemeMode.light;
  }

  void switchTheme() {
    darkMode = !darkMode;
    updateTheme();
  }

  void updateTheme() {
    accent = darkMode ? "432c85".toColor() : "05dcdd".toColor();
    background = darkMode ? "432c85".toColor() : "003eff".toColor();
    darktext = darkMode ? Colors.white : "432c85".toColor();
    notifyListeners();
  }

  void setDarkMode(bool state) {
    darkMode = state;
    updateTheme();
  }

  bool getDarkMode() {
    return darkMode;
  }
}
