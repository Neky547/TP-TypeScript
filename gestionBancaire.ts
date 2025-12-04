class CompteCourant{
    numCompte: number;
    solde: number;
    limiteDecouvert: number;

    constructor(numCompte: number, solde: number, limiteDecouvert: number){
        this.numCompte = numCompte;
        this.solde = solde;
        this.limiteDecouvert = limiteDecouvert;
    }

    crediter(montant: number): void{
        this.solde += montant;
        console.log(`Solde actuel : ${this.solde} €`)
    }

    debiter(montant: number): boolean{
        if(this.solde - montant < -this.limiteDecouvert){
            console.log("Opération refusée : dépassement de la limite de découvert.");
            return false;
        } else {
            this.solde -= montant;
            console.log(`Solde actuel : ${this.solde} €`);
            return true;
        }
    }
}