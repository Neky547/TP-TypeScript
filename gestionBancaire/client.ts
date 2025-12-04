import CompteCourant from "./compteCourant";

export default class Client{
    idClient: number;
    comptes: Map<number, CompteCourant>;

    constructor(idClient: number){
        this.idClient = idClient;
        this.comptes = new Map<number, CompteCourant>();
    }

    associerCompte(compte: CompteCourant): void{
        
    }
}