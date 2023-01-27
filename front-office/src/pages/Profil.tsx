import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { Sidemenu } from "../components/Sidemenu";

export const Profil: React.FC = () => {

    return (
        <>
            <Sidemenu />
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Profil</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    profil + mes encheres
                </IonContent>
            </IonPage>
        </>
    );
}