import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import axios from "axios";
import { card } from "ionicons/icons";
import { useEffect, useState } from "react";
import MenuSidebar from "../components/MenuSidebar";
import { baseUrl } from "../util/Api";

import '../theme/enchere.css';
export const ListeEnchere: React.FC = () => {

    const [encheres, setEnchere] = useState([]);
    function getEncheres() {
        const url = baseUrl + "/encheres";
        axios.get(url).then((response) => {
            setEnchere(response.data);
            console.log(response.data)
        })
    }

    useEffect(() => {
        getEncheres();
    }, []);

    const [items, setItems] = useState([{ id: 0, value: 'Item 0' }, { id: 1, value: 'Item 1' }, { id: 2, value: 'Item 2' },
  { id: 3, value: 'Item 3' }, { id: 4, value: 'Item 4' }]);

    return (
        <>
            
        <MenuSidebar/>
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                    <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Listes des Encheres</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">

                
                    {encheres.map((enchere) => {
                        const tmp: string = "/updateEnchere?id=" + enchere["id"];
                        return (
                        <>
                        <IonList class="flex-container">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>{enchere["nomProduit"]}</IonCardTitle> 
                                    {/* <IonCardSubtitle>{enchere["intitule"]} </IonCardSubtitle> --categorie */}
                                    <IonCardSubtitle>{enchere["dateDebut"]} </IonCardSubtitle>
                                    <IonCardSubtitle>{enchere["prixmin"]} </IonCardSubtitle>
                                </IonCardHeader>
                                <IonButton fill="clear" href={tmp}>Voir details</IonButton>
                            </IonCard>
                        </IonList> 
                        </>
                        )
                    })}
                    
                               
                       
            </IonContent>
        </IonPage>


        </>   
        
    );
}
