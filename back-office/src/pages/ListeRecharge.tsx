import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonList, IonMenu, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import axios from "axios";
import { card } from "ionicons/icons";
import { useEffect, useState } from "react";
import MenuSidebar from "../components/MenuSidebar";
import { baseUrl } from "../util/Api";

import '../theme/enchere.css';
export const ListeRecharge: React.FC = () => {

    const [demandes, setDemande] = useState([]);
    const [utilisateur, setUtilisateur] = useState([]);

    function accepter(id: any) {
        const url = "http://localhost:8080/acceptRechargeCompte/"+ id;
        axios.get(url).then((response) => {
            console.log(response);
        });
    }

    function refuser(id: any) {
        const url = "http://localhost:8080/refuseRechargeCompte/"+ id;
        axios.get(url).then((response) => {
            console.log(response);
        });
    }

    function getDemandes() {
        const url = baseUrl + "/rechargeComptes";
        axios.get(url).then((response) => {
            setDemande(response.data);
        });
    }

    useEffect(() => {
        getDemandes();
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
                    <IonTitle>Listes des Validation de recharge de compte</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            {demandes.map((demande) => {
                function getUtilisateur() {
                    const url = baseUrl + "/utilisateur/" + demande["id"];
                    axios.get(url).then((response) => {
                        setUtilisateur(response.data);
                    });
                }

                
                return (
                    <>
                    <IonList class="flex-container">
                            <IonCard>
                                <IonCardHeader>
                                    {utilisateur.map((item) => {
                                        return (
                                            <>
                                                <IonCardTitle>{item["nom"]}</IonCardTitle>
                                                <IonCardSubtitle>{item["pseudo"]} </IonCardSubtitle>
                                            </>
                                        )
                                    })}
                                    
                                    <IonCardSubtitle>{demande["dateDemande"]} </IonCardSubtitle>
                                    <IonCardSubtitle>{demande["montant"]} </IonCardSubtitle>
                                </IonCardHeader>
                                <IonButton fill="clear"
                                    onClick={() => accepter(demande["id"])}
                                >Accepter</IonButton>
                                <IonButton fill="clear"
                                    onClick={() => refuser(demande["id"])}
                                >Refuser</IonButton>
                            </IonCard>
                            </IonList> 
                    </>
                        
                    )})
    
            }   
            </IonContent>
        </IonPage>

        </>   
        
    );
}
