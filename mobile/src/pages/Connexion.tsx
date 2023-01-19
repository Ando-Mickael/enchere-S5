import { IonButton, IonContent, IonHeader, IonPage } from "@ionic/react";
import { useHistory } from "react-router";

export const Connexion: React.FC = () => {

    const history = useHistory();

    return (
        <IonPage id="main-content">
            <IonHeader></IonHeader>
            <IonContent className="ion-padding">
                <IonButton
                    expand="block"
                    onClick={() => history.push("/inscription")}>Inscription</IonButton>
                <IonButton
                    expand="block"
                    fill="outline"
                    onClick={() => history.push("/login")}>Se connecter</IonButton>
            </IonContent>
        </IonPage>
    );
}