import { IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonToggle, } from "@ionic/react";
import { useState } from "react";
import "../css/styles.css";

export const FormRechercheAvancee: React.FC = () => {

    const [idCategorie, setIdCategorie] = useState();
    const [nom, setNom] = useState();
    const [date, setDate] = useState();
    const [idProprietaire, setIdProprietaire] = useState();
    const [fini, setFini] = useState();


    function rechercher() {
        const objet = {
            "idCategorie": idCategorie,
            "nom": nom,
            "date": date,
            "idProprietaire": idProprietaire,
            "fini": fini
        }

        console.log(objet);
    }

    return (
        <div className="flex-center">
            <div>
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
                    <IonLabel>Date</IonLabel>
                    <IonInput
                        type="date"
                        onIonChange={(e: any) => setDate(e.target.value)} />
                </IonItem>

                <IonItem>
                    <IonLabel>Proprietaire</IonLabel>
                    <IonSelect
                        placeholder="Proprietaire"
                        onIonChange={(e: any) => setIdProprietaire(e.target.value)} >
                        <IonSelectOption value="prop1">Bob</IonSelectOption>
                        <IonSelectOption value="prop2">Tobias</IonSelectOption>
                    </IonSelect>
                </IonItem>

                <IonItem>
                    <IonLabel>Fini</IonLabel>
                    <IonToggle
                        slot="end"
                        onChange={() => console.log("Ando")} />
                </IonItem>

                <IonButton
                    expand="block"
                    onClick={() => rechercher()}>Recherche</IonButton>
            </div>
        </div>
    );
}