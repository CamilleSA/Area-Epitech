import 'package:sign_button/sign_button.dart';

class Param {
  final String service;
  final String area;
  final String param1;
  String param2;
  String name;
  String param3;
  String param4;
  String param5;
  ButtonType button;
  Future<void> clic;

  Param(
      {this.service,
      this.area,
      this.name,
      this.param1,
      this.param2,
      this.param3,
      this.param4,
      this.param5,
      this.button,
      this.clic});

  factory Param.fromJson(Map<String, dynamic> json) {
    var list = json['param'] as List;

    return Param(
      service: json['service'],
      area: json['area'],
      name: json['name'],
      param1: json['param1'],
      param2: json['param2'],
      param3: json['param3'],
      param4: json['param4'],
      param5: json['param5'],
      button: json['button'],
      clic: json['clic'],
    );
  }
}
