import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { useState } from "react";
import Utilisateur from "../model/Utilisateur";

export const FormLogin: React.FC = () => {

    const [email, setEmail] = useState();
    const [mdp, setMdp] = useState();

    const verifLogin = () => {
        const utilisateur = new Utilisateur(email, mdp, null, null);
        console.log(utilisateur);
        utilisateur.login();
        window.location.assign("/profil");
    }

    return (
        <>
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