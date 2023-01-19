import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { useState } from "react";

export const FormDemandeRecharge: React.FC = () => {

    const [montant, setMontant] = useState();

    function demandeRecharge() {
        console.log(montant);
    }

    return (
        <>
            <IonItem>
                <IonLabel position="floating">
                    Montant
                </IonLabel>
                <IonInput
                    onIonChange={(e: any) => setMontant(e.target.value)} />
            </IonItem>

            <IonButton
                expand="block"
                onClick={() => demandeRecharge()}>Recharger</IonButton>
        </>
    );
} 