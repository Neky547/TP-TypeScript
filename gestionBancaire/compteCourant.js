"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompteCourant = /** @class */ (function () {
    function CompteCourant(numCompte, solde, limiteDecouvert) {
        this.historique = [];
        this.numCompte = numCompte;
        this.solde = solde;
        this.limiteDecouvert = limiteDecouvert;
    }
    CompteCourant.prototype.crediter = function (montant) {
        this.solde += montant;
        console.log("Solde actuel : ".concat(this.solde, " \u20AC"));
    };
    CompteCourant.prototype.debiter = function (montant) {
        if (this.solde - montant < -this.limiteDecouvert) {
            console.log("Opération refusée : dépassement de la limite de découvert.");
            return false;
        }
        else {
            this.solde -= montant;
            console.log("Solde actuel : ".concat(this.solde, " \u20AC"));
            return true;
        }
    };
    return CompteCourant;
}());
exports.default = CompteCourant;
