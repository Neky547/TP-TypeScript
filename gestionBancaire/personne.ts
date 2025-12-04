import Client from "./client";

export default class Personne extends Client{
    nom: String;
    prenom: String;
    dateNaissance: String;

    constructor(idClient: number, nom: String, prenom: String, dateNaissance: String){
        super(idClient);
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
    }
}