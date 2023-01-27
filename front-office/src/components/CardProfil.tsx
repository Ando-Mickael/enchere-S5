import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";

export const CardProfil: React.FC = () => {
    return (
        <>
            <IonCard>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <IonCardHeader>
                    <IonCardTitle>Card Title</IonCardTitle>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    Here's a small text description for the card content. Nothing more, nothing less.
                </IonCardContent>
            </IonCard>
        </>
    );
}