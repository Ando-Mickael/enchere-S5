import axios from "axios";
import { baseUrl } from "../util/Api";

export default class Personne {
    
    private __email?:string;
    private __mdp?: string;

    public constructor(email: any, mdp: any) {
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



}