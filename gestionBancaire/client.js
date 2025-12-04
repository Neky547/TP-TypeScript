"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = /** @class */ (function () {
    function Client(idClient) {
        this.idClient = idClient;
        this.comptes = new Map();
    }
    Client.prototype.associerCompte = function (compte) {
    };
    return Client;
}());
exports.default = Client;
