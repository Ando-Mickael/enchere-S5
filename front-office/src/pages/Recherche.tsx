import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from "@ionic/react";
import { FormRechercheAvancee } from "../components/FormRechercheAvancee";
import { Sidemenu } from "../components/Sidemenu";

export const Recherche: React.FC = () => {

    return (
        <>
            <Sidemenu />
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Recherche</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <FormRechercheAvancee />
                </IonContent>
            </IonPage>
        </>
    );
}