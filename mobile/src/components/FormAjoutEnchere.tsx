import { IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

export const FormAjoutEnchere: React.FC = () => {

    const [idCategorie, setIdCategorie] = useState();
    const [nom, setNom] = useState();
    const [prix, setPrix] = useState();
    const [prixMin, setPrixMin] = useState();
    const [duree, setDuree] = useState();
    const [descri, setDescri] = useState();

    function ajouter() {
        const objet = {
            "idCategorie": idCategorie,
            "nom": nom,
            "prix": prix,
        };
        
        const enchere = {
            "prixMin": prixMin,
            "duree": duree,
            "descri": descri
        }
        
        console.log(objet);
        console.log(enchere);
    }

    return (
        <>
            <IonItem>
                <IonLabel>Categorie</IonLabel>
                <IonSelect
                    placeholder="Categorie"
                    onIonChange={(e: any) => setIdCategorie(e.target.value)} >
                    <IonSelectOption value="cat1">Bureau</IonSelectOption>
                    <IonSelectOption value="cat2">Informatique</IonSelectOption>
                </IonSelect>
            </IonItem>

            <IonItem>
                <IonLabel>Nom</IonLabel>
                <IonInput
                    onIonChange={(e: any) => setNom(e.target.value)} />
            </IonItem>

            <IonItem>
                <IonLabel>Prix</IonLabel>
                <IonInput
                    onIonChange={(e: any) => setPrix(e.target.value)} />
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