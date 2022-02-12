# AREA MOBILE [EPITECH PROJECT] [DOCUMENTATION]

<a href="https://img.shields.io/badge/MADE%20WITH-ANDROID-green" alt="ANDROID">
        <img src="https://img.shields.io/badge/MADE%20WITH-ANDROID-green" /></a>
<a href="https://img.shields.io/badge/MADE%20WITH-FLUTTER-blue" alt="FLUTTER">
        <img src="https://img.shields.io/badge/MADE%20WITH-FLUTTER-blue" /></a>
<a href="https://img.shields.io/badge/MADE%20WITH-DART-lightblue" alt="DART">
        <img src="https://img.shields.io/badge/MADE%20WITH-DART-lightblue" /></a>

# Tutorial

## 0- Register
![SignUp](https://github.com/EpitechIT2020/B-YEP-500-PAR-5-1-area-angelina.colas/blob/dev/MobileClient/area_app/asset/register-screen.png)

## 1- Login

![SignIn](https://github.com/EpitechIT2020/B-YEP-500-PAR-5-1-area-angelina.colas/blob/dev/MobileClient/area_app/asset/login-screen.png)

## 2- Welcome to Area

![Dashboard](https://github.com/EpitechIT2020/B-YEP-500-PAR-5-1-area-angelina.colas/blob/dev/MobileClient/area_app/asset/dashboard-screen.png)

## 3- Choose Action service

![Application](https://github.com/EpitechIT2020/B-YEP-500-PAR-5-1-area-angelina.colas/blob/dev/MobileClient/area_app/asset/first_service-screen.png)

## 4- Choose Reaction service

![Application](https://github.com/EpitechIT2020/B-YEP-500-PAR-5-1-area-angelina.colas/blob/dev/MobileClient/area_app/asset/second_service-screen.png)

## 5- Choose Action

![Application](https://github.com/EpitechIT2020/B-YEP-500-PAR-5-1-area-angelina.colas/blob/dev/MobileClient/area_app/asset/action-screen.png)

## 6- Choose Reaction

![Application](https://github.com/EpitechIT2020/B-YEP-500-PAR-5-1-area-angelina.colas/blob/dev/MobileClient/area_app/asset/reaction-screen.png)

## 7- Click on Make it !

![Application](https://github.com/EpitechIT2020/B-YEP-500-PAR-5-1-area-angelina.colas/blob/dev/MobileClient/area_app/asset/make_it-screen.png)


## 8- Config your Action & Reaction

![Application](https://github.com/EpitechIT2020/B-YEP-500-PAR-5-1-area-angelina.colas/blob/dev/MobileClient/area_app/asset/setting-screen.png)


## 9- Click on Make Area !

![Applicati](https://github.com/EpitechIT2020/B-YEP-500-PAR-5-1-area-angelina.colas/blob/dev/MobileClient/area_app/asset/make_area-screen.png)


<p align="center">
  <img src="https://cdn.iconscout.com/icon/free/png-256/flutter-2038877-1720090.png" />
</p>

## User Interface - Flutter


>Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.

>You can download it here: https://flutter.dev/docs/get-started/install/windows

## Installation

**Download Packages**

```sh
flutter pug get
```
**Build apk**

```sh
flutter build apk
```
**Run apk**

```sh
flutter run
```

>Runs the app in the development mode.
Open http://localhost:8081/client.apk to download the app.

## Repository structure

```
/
├─ Dockerfile
├─ area_app/
     ├─ android/                # Android config
     │        ├─ app/
     |        |     ├─src/
     |        |     |   ├─res/value/string.xml       # facebook value for api
     |        |     |   └─main/AndroidManifest.xml   #app + facebook + internet config
     |        |     |
     |        |     ├─build.gradle                # Gradle config
     |        |     └─google-service.json         # Google firebase config
     |        | 
     │        ├─ gradle/                          # Gradle wrapper properties
     │        ├─ gradle.property                  # gradle property value
     │        └─ settings.gradle                  # flutter setting
     |
     ├─ ios/                    # IOS app
     ├─ asset/                  # Assets (Logo, Video, Images)
     |
     ├─ lib/                    # Main code
     │    ├─ login/                               # Area log pages
     │    ├─ pages/                               # Area pages
     |    ├─ Param.dart                           # Class of action reaction contain
     │    ├─ Themes.dart
     │    ├─ global.dart
     │    ├─ action_reaction_list.dart            # List of action reaction
     │    └─ main.dart                            # Main
     |
     ├
     │
     ├─ test/                    # test file 
     |
     ├
     └─ pubspec.yaml             # File Package (Dependencies)

```
