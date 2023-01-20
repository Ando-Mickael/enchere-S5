import React from 'react';
import { 
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

function MenuSidebar() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          
            <IonList>
					<IonItem href="/listeRecharge">
						<IonLabel>Liste des Recharges Compte</IonLabel>
					</IonItem>
					<IonItem href="/listeEnchere" >
						<IonLabel>Liste des Encheres</IonLabel>
					</IonItem>
          <IonItem href="/stat" >
						<IonLabel>Statistiques</IonLabel>
					</IonItem>
			</IonList>
        </IonContent>
      </IonMenu>
    </>
  );
}
export default MenuSidebar;