import 'dart:async';
import 'package:flutter/material.dart';

import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';
import 'package:webview_flutter/webview_flutter.dart';

class MyWebView extends StatelessWidget {
  final String title;
  final String selectedUrl;
  final flutterWebviewPlugin = new FlutterWebviewPlugin();

  final Completer<WebViewController> _controller =
      Completer<WebViewController>();

  MyWebView({
    @required this.title,
    @required this.selectedUrl,
  });

  @override
  Widget build(BuildContext context) {
    return WebviewScaffold(
      url: selectedUrl,
      appCacheEnabled: true,
      clearCache: false,
      clearCookies: false,
      appBar: new AppBar(
        title: Image.asset('asset/LogoAreaWhite.png',
            fit: BoxFit.contain, height: 50),
        centerTitle: true,
        flexibleSpace: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: tabGradients),
          ),
        ),
      ),
    );
  }
}

const List<Color> tabGradients = [
  Color(0xFF64a7fd),
  Color(0xFF5ee3df),
];
