import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:area_app/globals.dart' as globals;
import 'package:area_app/action_reaction_list.dart' as act;
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:notification_banner/notification_banner.dart';

List<ServiceName> serviceList = [
  ServiceName('asset/discorde.png', "Discord", "/discord_service"),
  ServiceName('asset/github.png', "GitHub", "/github_service"),
  ServiceName('asset/gmail.png', "Gmail", "/gmail_service"),
  ServiceName('asset/moviedb.png', "MovieDB", "/moviedb_service"),
  ServiceName('asset/reddit.png', "Reddit", "/reddit_service"),
  ServiceName('asset/weather.png', "Weather", "/weather_service"),
  ServiceName('asset/youtube.png', "Youtube", "/youtube_service"),
];

class Area {
  final String service_act;
  final String service_react;
  final String action;
  final String reaction;
  final String run;
  final String icon_act;
  final String icon_react;
  final String name;

  Area({
    this.service_act,
    this.service_react,
    this.action,
    this.reaction,
    this.run,
    this.icon_act,
    this.icon_react,
    this.name,
  });

  factory Area.fromJson(Map<String, dynamic> json) {
    var list = json['param'] as List;

    return Area(
      service_act: json['service_act'],
      service_react: json['service_react'],
      action: json['action'],
      reaction: json['reaction'],
      run: json['run'],
      icon_act: json['icon_act'],
      icon_react: json['icon_react'],
      name: json['name'],
    );
  }
}

class Service extends StatefulWidget {
  @override
  _ServiceState createState() => _ServiceState();
}

class _ServiceState extends State<Service> {
  List<Area> area = [];

  @override
  void initState() {
    super.initState();
    area;
    //Timer.periodic(new Duration(seconds: 1), (timer) {
    _LoadArea();
    //});
  }

  _LoadArea() async {
    final list_area = await http.post(
      globals.local_url + "/dashboard/list",
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode({
        "username": globals.username,
      }),
    );
    final tmp = jsonDecode(list_area.body);
    print(tmp);
    List<Area> area_tmp = [];
    for (var i = 0; i != tmp.length; i++) {
      String icon_act = icon_add(tmp[i]['serviceAction']);
      String icon_react = icon_add(tmp[i]['serviceReaction']);

      area_tmp.add(Area(
          service_act: tmp[i]['serviceAction'],
          service_react: tmp[i]['serviceReaction'],
          icon_act: icon_act,
          icon_react: icon_react,
          run: tmp[i]['running'],
          action: tmp[i]['action'],
          reaction: tmp[i]['reaction'],
          name: tmp[i]['placeholder']));
    }
    setState(() {
      area = area_tmp;
    });
    print(area);
  }

  void _showedelete(String name) {
    showDialog(
      context: context, barrierDismissible: false, // user must tap button!

      builder: (BuildContext context) {
        return new AlertDialog(
          title: new Text('Delete Area'),
          content: new SingleChildScrollView(
            child: new ListBody(
              children: [
                new Text('Are you sure you want to delete this Area?'),
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
              child: new Text('Yes', style: TextStyle(color: Colors.red)),
              onPressed: () async {
                final url = Uri.parse(globals.local_url + "/dashboard");
                final request = await http.Request("DELETE", url);
                request.headers.addAll(<String, String>{
                  'Content-Type': 'application/json; charset=UTF-8',
                });
                request.body = jsonEncode(
                    {"username": globals.username, "placeholder": name});
                final response = await request.send();
                print(response.statusCode);
                if (response.statusCode == 200) {
                  _LoadArea();
                  Navigator.of(context).pop();
                }
              },
            ),
          ],
        );
      },
    );
  }

  void get_discord(String str) {
    if (str == "addRole")
      globals.reaction = act.reaction_params_discord[0].first;
    if (str == "removeRole")
      globals.reaction = act.reaction_params_discord[1].first;
    if (str == "sendMessage")
      globals.reaction = act.reaction_params_discord[2].first;
    if (str == "renameChannel")
      globals.reaction = act.reaction_params_discord[3].first;
  }

  void get_gmail(String str) {
    if (str == "sendMail")
      globals.reaction = act.reaction_params_gmail[0].first;
    if (str == "respondMail")
      globals.reaction = act.reaction_params_gmail[1].first;
    if (str == "getMail") globals.action = act.action_params_gmail[0].first;
  }

  void get_youtube(String str) {
    if (str == "newVideoInPopular")
      globals.action = act.action_params_youtube[0].first;
    if (str == "newVideoInChannel")
      globals.action = act.action_params_youtube[1].first;
    if (str == "newVideoInPlaylist")
      globals.action = act.action_params_youtube[2].first;
  }

  void get_weather(String str) {
    if (str == "getWeather")
      globals.action = act.action_params_weather[0].first;
    if (str == "getBadWeather")
      globals.action = act.action_params_weather[0].first;
  }

  void get_github(String str) {
    if (str == "getNewRepo") globals.action = act.action_params_github[0].first;
    if (str == "getNewBranch")
      globals.action = act.action_params_github[1].first;
    if (str == "getOrganization")
      globals.action = act.action_params_github[2].first;
    if (str == "getCommit") globals.action = act.action_params_github[3].first;
    if (str == "deleteRepo")
      globals.reaction = act.reaction_params_github[0].first;
    if (str == "createIssue")
      globals.reaction = act.reaction_params_github[1].first;
    if (str == "createComment")
      globals.reaction = act.reaction_params_github[2].first;
    if (str == "createRepo")
      globals.reaction = act.reaction_params_github[3].first;
    if (str == "acceptRepoInvit")
      globals.reaction = act.reaction_params_github[4].first;
  }

  void get_pornhub(String str) {
    if (str == "searchVideoByTitle")
      globals.action = act.action_params_pornhub[0].first;
    if (str == "searchGifByTitle")
      globals.action = act.action_params_pornhub[1].first;
    if (str == "searchVideoByAuthor")
      globals.action = act.action_params_pornhub[2].first;
    if (str == "searchGifByAuthor")
      globals.action = act.action_params_pornhub[3].first;
    if (str == "searchVideoByCategory")
      globals.action = act.action_params_pornhub[4].first;
    if (str == "searchGifByCategory")
      globals.action = act.action_params_pornhub[5].first;
  }

  void get_spotify(String str) {
    if (str == "searchTracks")
      globals.action = act.action_params_spotify[0].first;
    if (str == "searchArtists")
      globals.action = act.action_params_spotify[1].first;
    if (str == "searchPlaylists")
      globals.action = act.action_params_spotify[2].first;
  }

  String icon_add(String service) {
    if (service == "discord") return "asset/discorde.png";
    if (service == "weather") return "asset/weather.png";
    if (service == "gmail") return "asset/gmail.png";
    if (service == "youtube") return "asset/youtube.png";
    if (service == "github") return "asset/github.png";
    if (service == "reddit") return "asset/reddit.png";
    if (service == "pornhub") return "asset/pornhub.png";
    if (service == "spotify") return "asset/spotify.png";
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
          body: area.length != 0
              ? ListView(
                  children: List.generate(area.length, (index) {
                    return GestureDetector(
                      child: Padding(
                        padding: EdgeInsets.only(bottom: 20),
                        child: Center(
                          child: Container(
                            width: MediaQuery.of(context).size.width * 0.95,
                            decoration: BoxDecoration(
                              shape: BoxShape.rectangle,
                              borderRadius:
                                  BorderRadius.all(Radius.circular(30)),
                              gradient: LinearGradient(
                                  begin: Alignment.topCenter,
                                  end: Alignment.bottomCenter,
                                  colors: globals.currentTheme.getDarkMode()
                                      ? tabGradientsDark
                                      : tabGradients),
                            ),
                            child: Card(
                              elevation: 0,
                              color: Colors.transparent,
                              child: Padding(
                                padding: EdgeInsets.only(left: 0),
                                child: Column(children: [
                                  Row(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      IconButton(
                                        icon: Icon(Icons.delete),
                                        iconSize: 25,
                                        color: Colors.white,
                                        onPressed: () {
                                          _showedelete(area[index].name);
                                        },
                                      ),
                                      Container(
                                        child: Image(
                                          image: AssetImage(
                                            area[index].icon_act,
                                          ),
                                          fit: BoxFit.cover,
                                          height: 50,
                                          width: 50,
                                        ),
                                      ),
                                      Container(
                                        child: Image(
                                          image: AssetImage(
                                            area[index].icon_react,
                                          ),
                                        ),
                                      ),
                                      Padding(
                                        padding: EdgeInsets.only(
                                            left: MediaQuery.of(context)
                                                    .size
                                                    .width *
                                                0.14),
                                      ),
                                      Text(
                                        area[index].action +
                                            " ->\n" +
                                            area[index].reaction,
                                        style: TextStyle(
                                            color: Colors.white,
                                            fontWeight: FontWeight.bold,
                                            fontSize: 11),
                                        maxLines: 2,
                                      ),
                                    ],
                                  ),
                                  Center(
                                    child: Text(
                                      area[index].service_act +
                                          " + " +
                                          area[index].service_react,
                                      style: TextStyle(
                                          color: Colors.white,
                                          fontWeight: FontWeight.bold,
                                          fontSize: 12),
                                    ),
                                  ),
                                  Row(
                                    mainAxisSize: MainAxisSize.min,
                                    children: [
                                      RaisedButton(
                                        shape: RoundedRectangleBorder(
                                            borderRadius:
                                                BorderRadius.circular(80.0)),
                                        onPressed: () async {
                                          globals.placeholder =
                                              area[index].name;
                                          if (area[index].service_react ==
                                              "discord")
                                            get_discord(area[index].reaction);
                                          if (area[index].service_react ==
                                              "gmail")
                                            get_gmail(area[index].reaction);
                                          if (area[index].service_react ==
                                              "reddit")
                                            globals.reaction = act
                                                .reaction_params_reddit[0]
                                                .first;
                                          if (area[index].service_react ==
                                              "github")
                                            get_github(area[index].reaction);
                                          if (area[index].service_act ==
                                              "gmail")
                                            get_gmail(area[index].action);
                                          if (area[index].service_act ==
                                              "youtube")
                                            get_youtube(area[index].action);
                                          if (area[index].service_act ==
                                              "weather")
                                            get_weather(area[index].action);
                                          if (area[index].service_act ==
                                              "github")
                                            get_github(area[index].action);
                                          if (area[index].service_act ==
                                              "pornhub")
                                            get_pornhub(area[index].action);
                                          if (area[index].service_act ==
                                              "spotify")
                                            get_spotify(area[index].action);
                                          globals.area_modify = true;
                                          Navigator.pushNamed(
                                              context, '/setting');
                                        },
                                        color: Color(0xFF64a7fd),
                                        textColor: Colors.white,
                                        child: Text("Modify Area"),
                                      ),
                                      Padding(
                                        padding: EdgeInsets.only(
                                            left: MediaQuery.of(context)
                                                    .size
                                                    .width *
                                                0.1),
                                      ),
                                      area[index].run == 'false'
                                          ? RaisedButton(
                                              shape: RoundedRectangleBorder(
                                                  borderRadius:
                                                      BorderRadius.circular(
                                                          80.0)),
                                              onPressed: () async {
                                                final res = await http.post(
                                                  globals.local_url +
                                                      "/dashboard/execute",
                                                  headers: {
                                                    'Content-Type':
                                                        'application/json; charset=UTF-8',
                                                  },
                                                  body: jsonEncode({
                                                    "username":
                                                        globals.username,
                                                    "placeholder":
                                                        area[index].name,
                                                  }),
                                                );
                                                print(res.statusCode);
                                                if (res.statusCode == 200) {
                                                  _LoadArea();
                                                  NotificationBanner(context)
                                                    ..setMessage(
                                                        'This Area is now activated')
                                                    ..setTextStyle(TextStyle(
                                                        color: Colors.white,
                                                        fontSize: 20.0,
                                                        fontStyle:
                                                            FontStyle.italic))
                                                    ..setBgColor(
                                                      Color(0xFF64a7fd),
                                                    )
                                                    ..show(Appearance.top);
                                                }
                                              },
                                              color: Color(0xFF64a7fd),
                                              textColor: Colors.white,
                                              child: Text("Activate"),
                                            )
                                          : RaisedButton(
                                              shape: RoundedRectangleBorder(
                                                  borderRadius:
                                                      BorderRadius.circular(
                                                          80.0)),
                                              onPressed: () async {
                                                final res = await http.post(
                                                  globals.local_url +
                                                      "/dashboard/stop",
                                                  headers: {
                                                    'Content-Type':
                                                        'application/json; charset=UTF-8',
                                                  },
                                                  body: jsonEncode({
                                                    "username":
                                                        globals.username,
                                                    "placeholder":
                                                        area[index].name
                                                  }),
                                                );
                                                print(res.statusCode);
                                                if (res.statusCode == 200) {
                                                  _LoadArea();
                                                  NotificationBanner(context)
                                                    ..setMessage(
                                                        'You stop this Area')
                                                    ..setTextStyle(TextStyle(
                                                      color: Colors.white,
                                                      fontSize: 20.0,
                                                    ))
                                                    ..setBgColor(
                                                      Color(0xFF64a7fd),
                                                    )
                                                    ..show(Appearance.top);
                                                }
                                              },
                                              color: Color(0xFF64a7fd),
                                              textColor: Colors.white,
                                              child: Text("Desactivate"),
                                            ),
                                    ],
                                  ),
                                ]),
                              ),
                            ),
                          ),
                        ),
                      ),
                    );
                  }),
                )
              : Center(
                  child: Text("You don't have area.",
                      style: TextStyle(
                          fontSize: 20,
                          color: globals.currentTheme.getDarkMode()
                              ? Color(0xFF64a7fd)
                              : Color(0xFF432c85))),
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

const List<Color> tabGradientsDark = [
  Color(0xFF432c85),
  Color(0xFF64b7fd),
];

class ServiceName {
  String icon;
  String name;
  String path;

  ServiceName(this.icon, this.name, this.path);
}
