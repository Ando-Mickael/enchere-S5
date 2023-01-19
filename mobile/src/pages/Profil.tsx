import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { BtnAjoutEnchere } from "../components/BtnAjoutEnchere";
import { BtnDeconnexion } from "../components/BtnDeconnexion";
import { InfoUtilisateur } from "../components/InfoUtilisateur";
import { ListeEncheres } from "../components/ListeEncheres";
import json from "../data/database.json";

export const Profil: React.FC = () => {

    const encheres = json["encheres"];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Profil</IonTitle>
                    <IonButtons slot='end'>
                        <BtnDeconnexion />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <InfoUtilisateur />
                <h2 className="ion-padding">Mes encheres</h2>
                <ListeEncheres encheres={encheres} />
                <BtnAjoutEnchere />
            </IonContent>
        </IonPage>
    );
}