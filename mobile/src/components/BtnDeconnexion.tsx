import { IonButton } from "@ionic/react";
import { useHistory } from "react-router";

export const BtnDeconnexion: React.FC = () => {
    
    const history = useHistory();

    function deconnexion() {
        history.push("/connexion");
        // mamafa donnee localstorage
    }
    
    return (
        <IonButton
            onClick={() => deconnexion()}>
            Se deconnecter
        </IonButton>
    );
}