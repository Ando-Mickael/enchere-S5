import { IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { useEffect, useState } from "react";
import { baseUrl } from "../util/Api";
import Utilisateur from "../model/Utilisateur";
import axios from "axios";

export const FormAjoutEnchere: React.FC = () => {

    const [categories, setCategories] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [idCategorie, setIdCategorie] = useState();
    const [nom, setNom] = useState();
    const [prixMin, setPrixMin] = useState();
    const [duree, setDuree] = useState();
    const [descri, setDescri] = useState();
    const proprietaireId = new Utilisateur().getId();

    function ajouter() {
        const url = baseUrl + `/addEnchere?duree=${duree}&prixMin=${prixMin}&nomProduit=${nom}&descriProduit=${descri}&proprietaireId=${proprietaireId}&categorieId=${idCategorie}`;

        axios.get(url)
            .then((response) => {
                console.log(response);
            })

        window.location.assign("/profil");
    }

    function getListeCategorie() {
        const url = baseUrl + "/categories";

        axios.get(url)
            .then((response) => {
                setCategories(response.data);
                setIsLoad(true);
            })
    }

    useEffect(() => {
        getListeCategorie();
    }, []);

    if (!isLoad) {
        return (
            <p>Loading...</p>
        );
    } else {
        return (
            <>
                <IonItem>
                    <IonLabel>Categorie</IonLabel>
                    <IonSelect
                        placeholder="Categorie"
                        onIonChange={(e: any) => setIdCategorie(e.target.value)} >
                        {categories.map((categorie, index) => {
                            return (
                                <IonSelectOption value={categorie["id"]} key={index}>{categorie["intitule"]}</IonSelectOption>
                            );
                        })}
                    </IonSelect>
                </IonItem>

                <IonItem>
                    <IonLabel>Nom</IonLabel>
                    <IonInput
                        onIonChange={(e: any) => setNom(e.target.value)} />
                </IonItem>

                <IonItem>
                    <IonLabel>Prix Min</IonLabel>
                    <IonInput
                        onIonChange={(e: any) => setPrixMin(e.target.value)} />
                </IonItem>

                <IonItem>
                    <IonLabel>Duree</IonLabel>
                    <IonInput
                        type="time"
                        onIonChange={(e: any) => setDuree(e.target.value)} />
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Description</IonLabel>
                    <IonInput
                        onIonChange={(e: any) => setDescri(e.target.value)} />
                </IonItem>

                <IonButton
                    expand="block"
                    onClick={() => ajouter()}>Ajouter</IonButton>
            </>
        );
    }
}