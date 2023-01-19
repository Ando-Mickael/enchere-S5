import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import { ItemEnchereProps } from "../util/Interface";

export const ItemEnchere: React.FC<ItemEnchereProps> = ({ enchere }) => {

    return (
        <IonCard className="box">
            <IonCardHeader>
                <IonCardTitle>{enchere["nom"]}</IonCardTitle>
                <IonCardSubtitle>{enchere["categorie"]}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                Here's a small text description for the card content. Nothing more, nothing less.
            </IonCardContent>
            <IonButton fill="clear">Voir plus</IonButton>
        </IonCard>
    );
}