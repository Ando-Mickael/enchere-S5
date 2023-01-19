import axios from "axios";
import { pseudoRandomBytes } from "crypto";
import { baseUrl } from "../util/Api";

export default class Utilisateur {

    private __nom?: string;
    private __pseudo?: string;
    private __email?: string;
    private __mdp?: string;

    public constructor(nom: any, pseudo: any, email: any, mdp: any) {
        this.__nom = nom;
        this.__pseudo = pseudo;
        this.__email = email;
        this.__mdp = mdp;
    }

    public login() {
        const url = baseUrl + "/login";
        axios.post(url, {
            "email": this.__email,
            "mdp": this.__mdp
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    public inscription() {
        const url = baseUrl + "/inscription";
        axios.post(url, {
            "nom": this.__nom,
            "pseudo": this.__pseudo,
            "email": this.__email,
            "mdp": this.__mdp
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err)
            });
    }

}