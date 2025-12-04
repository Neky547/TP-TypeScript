import Client from "./gestionBancaire/client";
import CompteCourant from "./gestionBancaire/compteCourant";

let tsMessage = "Hello World !";
console.log(tsMessage);

let compte1=new CompteCourant(1,1000,500)
let client1=new Client(1)

client1.associerCompte(compte1)

compte1.crediter(200)
compte1.debiter(500)
compte1.debiter(800)
