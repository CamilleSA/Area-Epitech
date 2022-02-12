library area.globals;

import 'package:area_app/main.dart';
import 'package:flutter/material.dart';
import 'package:area_app/Param.dart';

import 'Theme.dart';

var selectedIndex = 0;
Param action;
Param reaction;
const local_url = "http://10.0.2.2:8080";
var username = "";
var area_modify = false;
var placeholder = "";
var area_maked = false;

MyTheme currentTheme = MyTheme();
