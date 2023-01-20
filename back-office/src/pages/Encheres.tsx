import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
// import axios from "axios";
import { card } from "ionicons/icons";
import { useEffect, useState } from "react";
import MenuSidebar from "../components/MenuSidebar";
import { baseUrl } from "../util/Api";

// import '../theme/enchere.css';
import { ListeEnchere } from "./ListeEnchere";

export const Encheres: React.FC = () => {

    const [demande, setDemande] = useState([]);
    const [items, setItems] = useState([{ id: 0, value: 'Item 0' }, { id: 1, value: 'Item 1' }, { id: 2, value: 'Item 2' },
  { id: 3, value: 'Item 3' }, { id: 4, value: 'Item 4' }]);

    return (
        <>
            {/* {demande.map((item) => { */}
                {/* return ( */}
        <MenuSidebar/>
        <IonPage id="main-content">
            <IonList class="flex-container">
                
                {items.map((item) => {
                    return (
                        <>
                        <ListeEnchere />
                        {/* <IonLabel>{item.id}</IonLabel> */}
                        </>
                    )
                })}
                
            </IonList>
        </IonPage>
                
                {/* ); */}
            {/* })} */}

        </>   
        
    );
}
