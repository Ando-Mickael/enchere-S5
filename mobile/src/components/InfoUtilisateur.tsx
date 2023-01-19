import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { useHistory } from "react-router";
import json from "../data/database.json";

export const InfoUtilisateur: React.FC = () => {

    const utilisateur = json["utilisateur"];
    const history = useHistory();

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{utilisateur["nom"]}</IonCardTitle>
                <IonCardSubtitle>@{utilisateur["pseudo"]}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <h3>Email : {utilisateur["email"]}</h3>
                <h3>Mon compte : {utilisateur["compte"]} Ar</h3>
                <IonButton
                    expand="block"
                    onClick={() => history.push("/demandeRecharge")}>Recharger</IonButton>
            </IonCardContent>
        </IonCard>
    );
} 