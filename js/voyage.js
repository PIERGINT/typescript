"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return "" + this._nom;
        },
        set: function (newNom) {
            this._nom = "" + newNom;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejour = new Array();
        this.sejour.push(new Sejour('Malte', 500));
        this.sejour.push(new Sejour('Madère', 1000));
        this.sejour.push(new Sejour('Bali', 2000));
    }
    SejourService.prototype.findTripByNom = function (_nom) {
        for (var _i = 0, _a = this.sejour; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.nom === _nom) {
                return sejour;
            }
            else {
                console.log('Destination', "" + _nom, 'not found');
                break;
            }
        }
    };
    return SejourService;
}());
var destination1 = new SejourService();
var test1 = destination1.findTripByNom('Malte');
console.log(test1);
var destination2 = new SejourService().findTripByNom('Saint-Peguy-sur-gazon');
console.log(destination2);
