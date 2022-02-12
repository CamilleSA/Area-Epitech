import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:expansion_card/expansion_card.dart';
import 'package:area_app/globals.dart' as globals;
import 'package:smart_select/smart_select.dart';
import 'package:area_app/action_reaction_list.dart' as act;

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String dropdownValue = 'One';
  int value;
  int secvalue;
  int action;
  int reaction;

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
                  : ColorFilter.mode(Colors.grey[100], BlendMode.darken)),
        ),
        child: Scaffold(
            backgroundColor: Colors.transparent,
            body: SingleChildScrollView(
                child: Stack(children: <Widget>[
              Column(
                children: [
                  Container(
                    padding:
                        EdgeInsets.only(bottom: 4, top: 4, left: 2, right: 2),
                    width: MediaQuery.of(context).size.width * 0.50,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.all(Radius.circular(30)),
                      gradient: LinearGradient(
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                          colors: globals.currentTheme.getDarkMode()
                              ? tabGradientsDark
                              : tabGradients),
                    ),
                    child: Center(
                      child: Text("Make your Area",
                          style: TextStyle(fontSize: 20, color: Colors.white)),
                    ),
                  ),
                  SmartSelect<int>.single(
                    title: 'Action service',
                    tileBuilder: (context, state) {
                      return S2Tile(
                        title: Text(
                          "Action service",
                          style: TextStyle(
                              color: globals.currentTheme.getDarkMode()
                                  ? Colors.white
                                  : Colors.black),
                        ),
                        value: state.valueDisplay,
                        onTap: state.showModal,
                      );
                    },
                    value: value,
                    choiceItems: S2Choice.listFrom<int, Map<String, dynamic>>(
                      source: act.service,
                      value: (index, item) => index,
                      title: (index, item) => item['title'],
                      subtitle: (index, item) => item['subtitle'],
                      meta: (index, item) => item,
                    ),
                    onChange: (state) => setState(() => value = state.value),
                    choiceLayout: S2ChoiceLayout.grid,
                    modalConfig: S2ModalConfig(
                      type: S2ModalType.bottomSheet,
                      style: S2ModalStyle(
                        backgroundColor: globals.currentTheme.getDarkMode()
                            ? Colors.grey[900]
                            : Colors.white,
                      ),
                      headerStyle: S2ModalHeaderStyle(
                          textStyle: TextStyle(
                              fontSize: 20,
                              color: globals.currentTheme.getDarkMode()
                                  ? Colors.white
                                  : Colors.grey[900]),
                          backgroundColor: globals.currentTheme.getDarkMode()
                              ? Colors.grey[900]
                              : Colors.white),
                    ),
                    choiceConfig: S2ChoiceConfig(
                      layout: S2ChoiceLayout.wrap,
                      headerStyle: S2ChoiceHeaderStyle(
                        backgroundColor: globals.currentTheme.getDarkMode()
                            ? Color(0xFF432c85)
                            : Color(0xFF5ee3df),
                      ),
                      style: S2ChoiceStyle(
                          color: globals.currentTheme.getDarkMode()
                              ? Color(0xFF432c85)
                              : Color(0xFF5ee3df),
                          borderOpacity: 1),
                    ),
                    choiceBuilder: (context, state, choice) {
                      return Card(
                        margin: const EdgeInsets.fromLTRB(5, 5, 5, 5),
                        color: state.selected
                            ? Color(0xFF64a7fd)
                            : globals.currentTheme.getDarkMode()
                                ? Color(0xFF432c85)
                                : Color(0xFF5ee3df),
                        child: InkWell(
                          onTap: () => state.select(true),
                          child: SizedBox(
                            width: 70,
                            height: 70,
                            child: Center(
                              child: Column(
                                mainAxisSize: MainAxisSize.min,
                                children: <Widget>[
                                  CircleAvatar(
                                    radius: 40,
                                    backgroundImage:
                                        NetworkImage(state.meta['image']),
                                    child: state.selected
                                        ? Icon(
                                            Icons.check,
                                            color: Colors.white,
                                          )
                                        : null,
                                  ),
                                  const SizedBox(height: 10),
                                  Text(
                                    state.title,
                                    style: TextStyle(
                                      color: state.selected
                                          ? Colors.white
                                          : globals.currentTheme.getDarkMode()
                                              ? Colors.white
                                              : Colors.black,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                  SmartSelect<int>.single(
                    title: 'Reaction service',
                    value: secvalue,
                    tileBuilder: (context, state) {
                      return S2Tile(
                        title: Text(
                          "Reaction service",
                          style: TextStyle(
                              color: globals.currentTheme.getDarkMode()
                                  ? Colors.white
                                  : Colors.black),
                        ),
                        value: state.valueDisplay,
                        onTap: state.showModal,
                      );
                    },
                    choiceItems: S2Choice.listFrom<int, Map<String, dynamic>>(
                      source: act.service2,
                      value: (index, item) => index,
                      title: (index, item) => item['title'],
                      subtitle: (index, item) => item['subtitle'],
                      meta: (index, item) => item,
                    ),
                    onChange: (state) => setState(() => secvalue = state.value),
                    choiceLayout: S2ChoiceLayout.grid,
                    modalConfig: S2ModalConfig(
                      type: S2ModalType.bottomSheet,
                      style: S2ModalStyle(
                        backgroundColor: globals.currentTheme.getDarkMode()
                            ? Colors.grey[900]
                            : Colors.white,
                      ),
                      headerStyle: S2ModalHeaderStyle(
                          textStyle: TextStyle(
                              fontSize: 20,
                              color: globals.currentTheme.getDarkMode()
                                  ? Colors.white
                                  : Colors.grey[900]),
                          backgroundColor: globals.currentTheme.getDarkMode()
                              ? Colors.grey[900]
                              : Colors.white),
                    ),
                    choiceConfig: S2ChoiceConfig(
                      layout: S2ChoiceLayout.wrap,
                      headerStyle: S2ChoiceHeaderStyle(
                        backgroundColor: globals.currentTheme.getDarkMode()
                            ? Color(0xFF432c85)
                            : Color(0xFF5ee3df),
                      ),
                      style: S2ChoiceStyle(
                          color: globals.currentTheme.getDarkMode()
                              ? Color(0xFF432c85)
                              : Color(0xFF5ee3df),
                          borderOpacity: 1),
                    ),
                    choiceBuilder: (context, state, choice) {
                      return Card(
                        margin: const EdgeInsets.fromLTRB(5, 5, 5, 5),
                        color: state.selected
                            ? Color(0xFF64a7fd)
                            : globals.currentTheme.getDarkMode()
                                ? Color(0xFF432c85)
                                : Color(0xFF5ee3df),
                        child: InkWell(
                          onTap: () => state.select(true),
                          child: SizedBox(
                            width: 70,
                            height: 70,
                            child: Center(
                              child: Column(
                                mainAxisSize: MainAxisSize.min,
                                children: <Widget>[
                                  CircleAvatar(
                                    radius: 40,
                                    backgroundImage:
                                        NetworkImage(state.meta['image']),
                                    child: state.selected
                                        ? Icon(
                                            Icons.check,
                                            color: Colors.white,
                                          )
                                        : null,
                                  ),
                                  const SizedBox(height: 10),
                                  Text(
                                    state.title,
                                    style: TextStyle(
                                      color: state.selected
                                          ? Colors.white
                                          : globals.currentTheme.getDarkMode()
                                              ? Colors.white
                                              : Colors.black,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                  value != null && secvalue != null
                      ? SmartSelect<int>.single(
                          title: act.service[value]['title'] +
                              ' | When you do this...',
                          value: action,
                          tileBuilder: (context, state) {
                            return S2Tile(
                              title: Text(
                                act.service[value]['title'] +
                                    ' | When you do this...',
                                style: TextStyle(
                                    color: globals.currentTheme.getDarkMode()
                                        ? Colors.white
                                        : Colors.black),
                              ),
                              value: state.valueDisplay,
                              onTap: state.showModal,
                            );
                          },
                          choiceItems:
                              S2Choice.listFrom<int, Map<String, dynamic>>(
                            source: act.action[value],
                            value: (index, item) => index,
                            title: (index, item) => item['action'],
                            subtitle: (index, item) => item['subtitle'],
                            meta: (index, item) => item,
                          ),
                          onChange: (state) =>
                              setState(() => action = state.value),
                          choiceLayout: S2ChoiceLayout.list,
                          modalConfig: S2ModalConfig(
                            type: S2ModalType.bottomSheet,
                            style: S2ModalStyle(
                              backgroundColor:
                                  globals.currentTheme.getDarkMode()
                                      ? Colors.grey[900]
                                      : Colors.white,
                            ),
                            headerStyle: S2ModalHeaderStyle(
                                textStyle: TextStyle(
                                    fontSize: 20,
                                    color: globals.currentTheme.getDarkMode()
                                        ? Colors.white
                                        : Colors.grey[900]),
                                backgroundColor:
                                    globals.currentTheme.getDarkMode()
                                        ? Colors.grey[900]
                                        : Colors.white),
                          ),
                          choiceConfig: S2ChoiceConfig(
                            layout: S2ChoiceLayout.wrap,
                            headerStyle: S2ChoiceHeaderStyle(
                              textStyle: TextStyle(
                                  color: globals.currentTheme.getDarkMode()
                                      ? Colors.white
                                      : Colors.black),
                              backgroundColor:
                                  globals.currentTheme.getDarkMode()
                                      ? Color(0xFF432c85)
                                      : Color(0xFF5ee3df),
                            ),
                            style: S2ChoiceStyle(
                                titleStyle: TextStyle(
                                    color: globals.currentTheme.getDarkMode()
                                        ? Colors.white
                                        : Colors.black),
                                color: globals.currentTheme.getDarkMode()
                                    ? Color(0xFF432c85)
                                    : Color(0xFF5ee3df),
                                borderOpacity: 1),
                          ),
                        )
                      : Text(""),
                  value != null && secvalue != null
                      ? SmartSelect<int>.single(
                          title: act.service2[secvalue]['title'] +
                              ' | Then do this...',
                          value: reaction,
                          tileBuilder: (context, state) {
                            return S2Tile(
                              title: Text(
                                act.service2[secvalue]['title'] +
                                    ' | Then do this...',
                                style: TextStyle(
                                    color: globals.currentTheme.getDarkMode()
                                        ? Colors.white
                                        : Colors.black),
                              ),
                              value: state.valueDisplay,
                              onTap: state.showModal,
                            );
                          },
                          choiceItems:
                              S2Choice.listFrom<int, Map<String, dynamic>>(
                            source: act.reaction[secvalue],
                            value: (index, item) => index,
                            title: (index, item) => item['reaction'],
                            subtitle: (index, item) => item['subtitle'],
                            meta: (index, item) => item,
                          ),
                          onChange: (state) =>
                              setState(() => reaction = state.value),
                          choiceLayout: S2ChoiceLayout.list,
                          modalConfig: S2ModalConfig(
                            type: S2ModalType.bottomSheet,
                            style: S2ModalStyle(
                              backgroundColor:
                                  globals.currentTheme.getDarkMode()
                                      ? Colors.grey[900]
                                      : Colors.white,
                            ),
                            headerStyle: S2ModalHeaderStyle(
                                textStyle: TextStyle(
                                    fontSize: 20,
                                    color: globals.currentTheme.getDarkMode()
                                        ? Colors.white
                                        : Colors.grey[900]),
                                backgroundColor:
                                    globals.currentTheme.getDarkMode()
                                        ? Colors.grey[900]
                                        : Colors.white),
                          ),
                          choiceConfig: S2ChoiceConfig(
                            layout: S2ChoiceLayout.wrap,
                            headerStyle: S2ChoiceHeaderStyle(
                              textStyle: TextStyle(
                                  color: globals.currentTheme.getDarkMode()
                                      ? Colors.white
                                      : Colors.black),
                              backgroundColor:
                                  globals.currentTheme.getDarkMode()
                                      ? Color(0xFF432c85)
                                      : Color(0xFF5ee3df),
                            ),
                            style: S2ChoiceStyle(
                                titleStyle: TextStyle(
                                    color: globals.currentTheme.getDarkMode()
                                        ? Colors.white
                                        : Colors.black),
                                color: globals.currentTheme.getDarkMode()
                                    ? Color(0xFF432c85)
                                    : Color(0xFF5ee3df),
                                borderOpacity: 1),
                          ),
                        )
                      : Text(""),
                  action != null && reaction != null
                      ? RaisedButton(
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(80.0)),
                          onPressed: () {
                            print(value);
                            print(secvalue);
                            print(act.service[value]['title']);
                            print(action);
                            if (act.service[value]['title'] == "Discord")
                              globals.action =
                                  act.action_params_discord[action].first;
                            if (act.service[value]['title'] == "Gmail")
                              globals.action =
                                  act.action_params_gmail[action].first;
                            if (act.service[value]['title'] == "Youtube")
                              globals.action =
                                  act.action_params_youtube[action].first;
                            if (act.service[value]['title'] == "GitHub")
                              globals.action =
                                  act.action_params_github[action].first;
                            if (act.service[value]['title'] == "Reddit")
                              globals.action =
                                  act.action_params_reddit[action].first;
                            if (act.service[value]['title'] == "Weather")
                              globals.action =
                                  act.action_params_weather[action].first;
                            if (act.service[value]['title'] == "PornHub")
                              globals.action =
                                  act.action_params_pornhub[action].first;
                            if (act.service[value]['title'] == "Spotify")
                              globals.action =
                                  act.action_params_spotify[action].first;

                            if (act.service2[secvalue]['title'] == "Discord")
                              globals.reaction =
                                  act.reaction_params_discord[reaction].first;
                            if (act.service2[secvalue]['title'] == "Gmail")
                              globals.reaction =
                                  act.reaction_params_gmail[reaction].first;
                            if (act.service2[secvalue]['title'] == "Reddit")
                              globals.reaction =
                                  act.reaction_params_reddit[reaction].first;
                            if (act.service2[secvalue]['title'] == "GitHub")
                              globals.reaction =
                                  act.reaction_params_github[reaction].first;
                            globals.area_modify = false;
                            Navigator.pushNamed(context, '/setting');
                          },
                          color: globals.currentTheme.getDarkMode()
                              ? Color(0xFF64a7fd)
                              : Color(0xFF432c85),
                          textColor: Colors.white,
                          child: Text("Make it"),
                        )
                      : Text(""),
                  Container(
                    padding:
                        EdgeInsets.only(bottom: 4, top: 4, left: 2, right: 2),
                    width: MediaQuery.of(context).size.width * 0.70,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.all(Radius.circular(30)),
                      gradient: LinearGradient(
                          begin: Alignment.topCenter,
                          end: Alignment.bottomCenter,
                          colors: globals.currentTheme.getDarkMode()
                              ? tabGradientsDark
                              : tabGradients),
                    ),
                    child: Center(
                      child: Text("Recommanded for you",
                          style: TextStyle(fontSize: 20, color: Colors.white)),
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 15),
                  ),
                  Container(
                    width: MediaQuery.of(context).size.width * 0.95,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.all(Radius.circular(30)),
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
                        padding: EdgeInsets.only(left: 20),
                        child: Column(children: [
                          Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Container(
                                child: Image(
                                  image: AssetImage(
                                    "asset/gmail.png",
                                  ),
                                ),
                              ),
                              Container(
                                child: Image(
                                  image: AssetImage(
                                    "asset/discorde.png",
                                  ),
                                ),
                              ),
                              Padding(
                                padding: EdgeInsets.only(left: 5),
                              ),
                              Text(
                                "New email -> Send message to channel",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 11),
                                maxLines: 2,
                              ),
                            ],
                          ),
                          Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Text(
                                "Gmail + Discord",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 12),
                              ),
                              Padding(
                                padding: EdgeInsets.only(
                                    left: MediaQuery.of(context).size.width *
                                        0.3),
                              ),
                              RaisedButton(
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(80.0)),
                                onPressed: () {
                                  globals.action =
                                      act.action_params_gmail[0].first;
                                  globals.reaction =
                                      act.reaction_params_discord[2].first;

                                  globals.area_modify = false;
                                  Navigator.pushNamed(context, '/setting');
                                },
                                color: Color(0xFF432c85),
                                textColor: Colors.white,
                                child: Text("Try it"),
                              ),
                            ],
                          ),
                        ]),
                      ),
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 15),
                  ),
                  Container(
                    width: MediaQuery.of(context).size.width * 0.95,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.all(Radius.circular(30)),
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
                        padding: EdgeInsets.only(left: 20),
                        child: Column(children: [
                          Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Container(
                                child: Image(
                                  image: AssetImage(
                                    "asset/weather.png",
                                  ),
                                ),
                              ),
                              Container(
                                child: Image(
                                  image: AssetImage(
                                    "asset/gmail.png",
                                  ),
                                ),
                              ),
                              Padding(
                                padding: EdgeInsets.only(
                                    left: MediaQuery.of(context).size.width *
                                        0.15),
                              ),
                              Text(
                                "It\'s raining -> Send email",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 13),
                                maxLines: 2,
                              ),
                            ],
                          ),
                          Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Text(
                                "Weather + Gmail",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 12),
                              ),
                              Padding(
                                padding: EdgeInsets.only(
                                    left: MediaQuery.of(context).size.width *
                                        0.3),
                              ),
                              RaisedButton(
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(80.0)),
                                onPressed: () {
                                  globals.action =
                                      act.action_params_weather[1].first;
                                  globals.reaction =
                                      act.reaction_params_gmail[0].first;

                                  globals.area_modify = false;
                                  Navigator.pushNamed(context, '/setting');
                                },
                                color: Color(0xFF432c85),
                                textColor: Colors.white,
                                child: Text("Try it"),
                              ),
                            ],
                          ),
                        ]),
                      ),
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 15),
                  ),
                  Container(
                    width: MediaQuery.of(context).size.width * 0.95,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.all(Radius.circular(30)),
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
                        padding: EdgeInsets.only(left: 20),
                        child: Column(children: [
                          Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Container(
                                child: Image(
                                  image: AssetImage(
                                    "asset/youtube.png",
                                  ),
                                ),
                              ),
                              Container(
                                child: Image(
                                  image: AssetImage(
                                    "asset/reddit.png",
                                  ),
                                ),
                              ),
                              Padding(
                                padding: EdgeInsets.only(
                                    left: MediaQuery.of(context).size.width *
                                        0.15),
                              ),
                              Text(
                                "New video on channel -> \nPost link in Subreddit",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 11),
                                maxLines: 2,
                              ),
                            ],
                          ),
                          Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Text(
                                "Youtube + Reddit",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                    fontSize: 10),
                              ),
                              Padding(
                                padding: EdgeInsets.only(
                                    left: MediaQuery.of(context).size.width *
                                        0.3),
                              ),
                              RaisedButton(
                                shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(80.0)),
                                onPressed: () {
                                  globals.action =
                                      act.action_params_youtube[1].first;
                                  globals.reaction =
                                      act.reaction_params_reddit[0].first;

                                  globals.area_modify = false;
                                  Navigator.pushNamed(context, '/setting');
                                },
                                color: Color(0xFF432c85),
                                textColor: Colors.white,
                                child: Text("Try it"),
                              ),
                            ],
                          ),
                        ]),
                      ),
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.only(bottom: 15),
                  ),
                ],
              ),
            ]))),
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
