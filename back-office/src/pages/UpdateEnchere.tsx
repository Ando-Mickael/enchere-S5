import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import MenuSidebar from "../components/MenuSidebar";
import { FormUpdate } from "../components/FormUpdate";
import { useState } from 'react';

export const UpdateEnchere: React.FC = () => {

    const admin = localStorage.getItem("admin");
	if (admin == null) {
		console.log("not connected");
	} else {
		console.log("is connected");
    }
        return (

            <>
                <MenuSidebar />
                <IonPage id="main-content">
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonMenuButton></IonMenuButton>
                            </IonButtons>
                            <IonTitle>Enchere</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        <FormUpdate />
                    </IonContent>
                </IonPage>
            </>
        );
	
	
};
