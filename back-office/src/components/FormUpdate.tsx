import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { getEnabledCategories } from "trace_events";
import { baseUrl } from "../util/Api";

export const FormUpdate = () => {

    const [nomProduit, setNomProduit] = useState("");
    const [descriProduit, setDescriProduit] = useState("");
    const [prix, setPrixProduit] = useState("");
    const [dateDebut, setDateDebut] = useState("");
    const [duree, setDuree] = useState("");
    const [status, setStatus] = useState("");

    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    console.log(id)

    const [encheres, setEnchere] = useState([]);
    const [categories, setCategorie] = useState([]);
    const [photos, setPhoto] = useState([]);
    const [onecategories, setOneCategories] = useState([]);

    function update(id: any) {
        console.log(nomProduit);
        console.log(descriProduit);
        console.log(prix);
        console.log(dateDebut);
        console.log(duree);
        console.log(status);

        // const url = "http://localhost:8080/updateEnchere?id="++"&dateDebut="++
        // "&duree="++"&prixmin="++"&status="++
        // "&nomProduit="++"&descriProduit="++"&proprietaireId="++
        // "&categorieId="++;
        // axios.get(url).then((response) => {
        //     console.log(response);
        // });
    }

    function getEncheres() {
        const url = baseUrl + "/encheres/" + id;
        axios.get(url).then((response) => {
            setEnchere(response.data);
            
        })
    }

    function getCategories() {
        const url = baseUrl + "/categorie";
        axios.get(url).then((response) => {
            setCategorie(response.data);
            // console.log(response.data)
        })
    }

    function getPhoto() {
        const url = baseUrl + "/photo/" + id;
        axios.get(url).then((response) => {
            setPhoto(response.data);
            // console.log(response.data)
        })
    }

    function getOneCategories() {
        const url = baseUrl + "/categorie/"+ id;
        axios.get(url).then((response) => {
            setOneCategories(response.data);
            // console.log(response.data)
        })
    }

    useEffect(() => {
        getEncheres();
        getCategories();
        getOneCategories();
        getPhoto();
    }, []);

    return (
        <>
        
                <IonGrid fixed={true}>
                    <IonRow>
                    <IonCol></IonCol>
                    <IonCol size="7">
                    {encheres.map((item) => {
                            
                            return (
                                <>
                                <IonItem>
                                    <IonLabel position='stacked'>Categorie</IonLabel>
                                    {onecategories.map((onecategorie) => {
                                        return (
                                        <IonSelect interface="popover" placeholder={onecategorie["intitule"]}> 
                                            {categories.map((categorie) => {

                                                return (
                                                    <>
                                                        <IonSelectOption value={categorie["id"]}>{categorie["intitule"]}</IonSelectOption>
                                                    </>
                                                )
                                            })}
                                        </IonSelect>
                                        )
                                    })}
                                </IonItem>
                                <IonItem>
                                        <IonLabel position='stacked'>Nom du Produit</IonLabel>
                                        <IonInput
                                            onIonInput={(e: any) => setNomProduit(e.target.value)}
                                            placeholder={item["nomProduit"]} /> 
                                </IonItem>
                                <IonItem>
                                        <IonLabel position='stacked'>Description du Produit</IonLabel>
                                        <IonInput
                                            onIonInput={(e: any) => setDescriProduit(e.target.value)}
                                            placeholder={item["descriProduit"]} /> 
                                </IonItem>
                                <IonItem>
                                        <IonLabel position='stacked'>Prix minimum du produit</IonLabel>
                                        <IonInput
                                            onIonInput={(e: any) => setPrixProduit(e.target.value)}
                                            placeholder={item["prixmin"]} />
                                </IonItem>
                                <IonItem>
                                        <IonLabel position='stacked'>Date debut</IonLabel>
                                        <IonInput readonly={true}
                                            onIonInput={(e: any) => setDateDebut(e.target.value)}
                                            placeholder={item["dateDebut"]} /> 
                                    </IonItem>
                                <IonItem>
                                        <IonLabel position='stacked'>Duree</IonLabel>
                                        <IonInput
                                            
                                            placeholder={item["duree"]} 
                                            onIonInput={(e: any) => setDuree(e.target.value)}
                                            />
                                </IonItem>
                                <IonItem>
                                        <IonLabel position='stacked'>Status</IonLabel>
                                        <IonInput
                                            
                                            placeholder={item["status"]} 
                                            onIonInput={(e: any) => setStatus(e.target.value)}
                                            />
                                            
                                </IonItem>
                                <IonButton
                            expand="block"
                            onClick={() => update(item["id"])} 
                            >Modifier</IonButton>

                                </>
                            )
                        })}
                        

                        
                    </IonCol>
                    <IonCol></IonCol>
            
                </IonRow>
                </IonGrid>

        </>
    );
}