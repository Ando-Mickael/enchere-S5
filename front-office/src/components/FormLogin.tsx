import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { useState } from "react";
import Person from "../model/Personne";

export const FormLogin: React.FC = () => {

    const [email, setEmail] = useState();
    const [mdp, setMdp] = useState();

    const verifLogin = () => {
        const personne = new Person(email, mdp);
        // personne.login();
        console.log(personne);
        window.location.assign("/accueil");
    }

    return (
        <>
            <h2>Se connecter</h2>
            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                    onIonChange={(e: any) => setEmail(e.target.value)} />
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Mot de passe</IonLabel>
                <IonInput
                    type="password"
                    onIonChange={(e: any) => setMdp(e.target.value)} />
            </IonItem>

            <IonButton
                expand="block"
                onClick={() => verifLogin()}>Se connecter</IonButton>
        </>
    );
} 