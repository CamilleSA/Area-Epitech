import 'package:flutter/material.dart';
import 'package:smart_select/smart_select.dart' show S2Choice;
import 'package:area_app/Param.dart';
import 'package:sign_button/sign_button.dart';

List<Map<String, dynamic>> service = [
  /*{
    'title': 'Discord',
    'image':
        'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png',
  },*/
  {
    'title': 'Gmail',
    'image':
        'https://e7.pngegg.com/pngimages/292/387/png-clipart-gmail-computer-icons-email-graphics-gmail-angle-rectangle.png',
  },
  {
    'title': 'GitHub',
    'image':
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  /*{
    'title': 'Reddit',
    'image':
        'https://img.favpng.com/4/2/8/computer-icons-reddit-logo-website-png-favpng-hMmUQ5KAUjd27EWLvNwpuvW5Q.jpg',
  },*/
  {
    'title': 'Youtube',
    'image':
        'https://i.pinimg.com/originals/6a/42/04/6a4204f04496559aa27101d25983d0f0.png',
  },
  {
    'title': 'Weather',
    'image':
        'https://banner2.cleanpng.com/20180520/tg/kisspng-weather-forecasting-logo-5b01bab1b84f10.0513596515268399857549.jpg',
  },
  {
    'title': 'PornHub',
    'image':
        'https://homyshirt.com/26570-home_default/shirt-porn-hub-logo-sublimation.jpg',
  },
  {
    'title': 'Spotify',
    'image':
        'https://developer.spotify.com/assets/branding-guidelines/icon4@2x.png',
  }
];

List<Map<String, dynamic>> service2 = [
  {
    'title': 'Discord',
    'image':
        'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png',
  },
  {
    'title': 'Gmail',
    'image':
        'https://e7.pngegg.com/pngimages/292/387/png-clipart-gmail-computer-icons-email-graphics-gmail-angle-rectangle.png',
  },
  {
    'title': 'GitHub',
    'image':
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  {
    'title': 'Reddit',
    'image':
        'https://img.favpng.com/4/2/8/computer-icons-reddit-logo-website-png-favpng-hMmUQ5KAUjd27EWLvNwpuvW5Q.jpg',
  },
];

List<List<Map<String, dynamic>>> action = [
  /*[
    {'action': 'Message post on channel'},
  ],*/
  [
    {'action': 'New email'},
    //{'action': 'New labels'},
  ],
  [
    {'action': 'Repository creaction'},
    {'action': 'Branch creaction'},
    {'action': 'New Commit'},
    {'action': 'New Organization'},
  ],
  /*[
    {'action': 'New comment by user'},
    {'action': 'New hot post in subreddit'},
    {'action': 'New post or comment matching search'},
  ],*/
  [
    {'action': 'New Hot video'},
    {'action': 'New video in channel'},
    {'action': 'New video in playlist'},
  ],
  [
    {'action': 'Detect if weather change'},
    {'action': 'It\'s raining'},
  ],
  [
    {'action': 'Search video by title'},
    {'action': 'Search gif by title'},
    {'action': 'Search video by author'},
    {'action': 'Search git by author'},
    {'action': 'Search video by category'},
    {'action': 'Search gif by category'},
  ],
  [
    {'action': 'Search Tracks'},
    {'action': 'Search Artist'},
    {'action': 'Search Playlists'},
  ],
];

List<List<Map<String, dynamic>>> reaction = [
  [
    {'reaction': 'Add role'},
    {'reaction': 'remove role of a user'},
    {'reaction': 'Send message to channel'},
    {'reaction': 'Rename channel'},
  ],
  [
    {'reaction': 'Send email'},
    {'reaction': 'Respond to email'},
    /*{'reaction': 'Create label'},
    {'reaction': 'Delete label of email'},*/
  ],
  [
    {'reaction': 'Delete repository'},
    {'reaction': 'Create issue'},
    {'reaction': 'Create comment'},
    {'reaction': 'Create Repository'},
    {'reaction': 'Accept Repo Invitation'}
  ],
  [
    {'reaction': 'Post Message in Subreddit'},
  ],
];

/////////////DISCORD/////////////

List<List<Param>> action_params_discord = [
  [
    Param(
      service: "Discord",
      area: "Message post on channel",
      name: "getNewMessage",
      param1: "idServer",
      param2: "idChannel",
    ),
  ],
];

List<List<Param>> reaction_params_discord = [
  [
    Param(
      service: "Discord",
      area: "Add role",
      name: "addRole",
      param1: "idServer",
      param2: "idUser",
      param3: "idRole",
    ),
  ],
  [
    Param(
      service: "Discord",
      area: "remove role of a user",
      name: "removeRole",
      param1: "idServer",
      param2: "idUser",
      param3: "idRole",
    ),
  ],
  [
    Param(
      service: "Discord",
      area: "Send message to channel",
      name: "sendMessage",
      param1: "idServer",
      param2: "idChannel",
    ),
  ],
  [
    Param(
      service: "Discord",
      area: "Rename channel",
      name: "renameChannel",
      param1: "idServer",
      param2: "idChannel",
    ),
  ],
];

///////////GMAIL///////////

List<List<Param>> reaction_params_gmail = [
  [
    Param(
      service: "Gmail",
      area: "Send email",
      name: "sendMail",
      param1: "mail",
    ),
  ],
  [
    Param(
      service: "Gmail",
      area: "Respond to email",
      name: "respondMail",
    ),
  ],
  /*[
    Param(
      service: "Gmail",
      area: "Create label",
      name: "createLabel",
      param1: "name",
    ),
  ],
  [
    Param(
      service: "Gmail",
      area: "Delete label of email",
      name: "delLabel",
      param1: "idLabel",
    ),
  ],*/
];

List<List<Param>> action_params_gmail = [
  [
    Param(
      service: "Gmail",
      area: "New email",
      name: "getMail",
      param1: "mail",
    ),
  ],
  /*[
    Param(
      service: "Gmail",
      area: "New labels",
      name: "getLabel",
      param1: "token",
      button: ButtonType.google,
    ),
  ],*/
];

////////////////YOUTUBE/////////////

List<List<Param>> action_params_youtube = [
  [
    Param(
      service: "Youtube",
      area: "New popular video",
      name: "newVideoInPopular",
    ),
  ],
  [
    Param(
      service: "Youtube",
      area: "New video in channel",
      name: "newVideoInChannel",
      param1: "channelName",
    ),
  ],
  [
    Param(
      service: "Youtube",
      area: "New video in playlist",
      name: "newVideoInPlaylist",
      param1: "id",
    ),
  ],
  /*[
    Param(
      service: "Youtube",
      area: "New video by search",
      name: "delLabel",
    ),
  ],*/
];

////////////////Weather/////////////

List<List<Param>> action_params_weather = [
  [
    Param(
      service: "Weather",
      area: "Detect if weather change",
      name: "getWeather",
      param1: "name",
    ),
  ],
  [
    Param(
      service: "Weather",
      area: "It's raining",
      name: "getBadWeather",
      param1: "name",
    ),
  ],
];

//////////////Reddit///////////////

List<List<Param>> action_params_reddit = [
  [
    Param(
      service: "Reddit",
      area: "New comment by user",
      param1: "username",
    ),
  ],
  [
    Param(
      service: "Reddit",
      area: "New hot post in subreddit",
      param1: "subname",
    ),
  ],
  [
    Param(
      service: "Reddit",
      area: "New post or comment matching search",
      param1: "subname",
    ),
  ],
];

List<List<Param>> reaction_params_reddit = [
  [
    Param(
      service: "Reddit",
      area: "Post Message in subreddit",
      name: "postMessage",
      param1: "username",
      param2: "password",
      param3: "subreddit",
    ),
  ],
];

/*List<List<Param>> action_params_reddit = [
  [
    Param(
      service: "Reddit",
      area: "Detect a new Comment",
      name: "detectLastComment",
      param1: "idComment",
      button: ButtonType.reddit,
    ),
  ],
];*/

//////////GITHUB/////////////

List<List<Param>> reaction_params_github = [
  [
    Param(
      service: "Github",
      area: "Delete repo",
      name: "deleteRepo",
      param1: "token",
      param2: "owner",
      param3: "repo",
      button: ButtonType.github,
    ),
  ],
  [
    Param(
      service: "Github",
      area: "Create issue",
      name: "createIssue",
      param1: "token",
      param2: "owner",
      param3: "repo",
      button: ButtonType.github,
    ),
  ],
  [
    Param(
      service: "Github",
      area: "Create comment",
      name: "createComment",
      param1: "token",
      param2: "owner",
      param3: "repo",
      param4: "issue",
      button: ButtonType.github,
    ),
  ],
  [
    Param(
      service: "Github",
      area: "Create Repository",
      name: "createRepo",
      param1: "token",
      param2: "name",
      button: ButtonType.github,
    ),
  ],
  [
    Param(
      service: "Github",
      area: "Accept Repo Invitation",
      name: "acceptRepoInvit",
      param1: "token",
      button: ButtonType.github,
    ),
  ],
];

List<List<Param>> action_params_github = [
  [
    Param(
      service: "Github",
      area: "Detect a new repo",
      name: "getNewRepo",
      param1: "token",
      param2: "owner",
      button: ButtonType.github,
    ),
  ],
  [
    Param(
      service: "Github",
      area: "New Branch Creation",
      name: "getNewBranch",
      param1: "token",
      param2: "owner",
      param3: "repo",
      button: ButtonType.github,
    ),
  ],
  [
    Param(
      service: "Github",
      area: "Detect a new Organization",
      name: "getOrganization",
      param1: "token",
      button: ButtonType.github,
    ),
  ],
  [
    Param(
      service: "Github",
      area: "Detect a new Commit",
      name: "getCommit",
      param1: "token",
      param2: "owner",
      param3: "repo",
      button: ButtonType.github,
    ),
  ],
];

List<List<Param>> action_params_pornhub = [
  [
    Param(
      service: "Pornhub",
      area: "Search video by title",
      name: "searchVideoByTitle",
      param1: "title",
    ),
  ],
  [
    Param(
      service: "Pornhub",
      area: "Search gif by title",
      name: "searchGifByTitle",
      param1: "title",
    ),
  ],
  [
    Param(
      service: "Pornhub",
      area: "Search video by author",
      name: "searchVideoByAuthor",
      param1: "name",
    ),
  ],
  [
    Param(
      service: "Pornhub",
      area: "Search git by author",
      name: "searchGifByAuthor",
      param1: "name",
    ),
  ],
  [
    Param(
      service: "Pornhub",
      area: "Search video by category",
      name: "searchVideoByCategory",
      param1: "category",
    ),
  ],
  [
    Param(
      service: "Pornhub",
      area: "Search gif by category",
      name: "searchGifByCategory",
      param1: "category",
    ),
  ],
];

List<List<Param>> action_params_spotify = [
  [
    Param(
      service: "Spotify",
      area: "Search Track",
      name: "searchTracks",
      param1: "name",
    ),
  ],
  [
    Param(
      service: "Spotify",
      area: "Search Artist",
      name: "searchArtists",
      param1: "name",
    ),
  ],
  [
    Param(
      service: "Spotify",
      area: "Search Playlist",
      name: "searchPlaylists",
      param1: "name",
    ),
  ],
];
