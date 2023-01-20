import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonItem, IonLabel, IonPage, IonRow } from '@ionic/react';

import '../theme/enchere.css';

export const DetailsEnchere: React.FC = () => {
  const [items, setItems] = useState([{ id: 0, value: 'Item 0' }, { id: 1, value: 'Item 1' }, { id: 2, value: 'Item 2' },
  { id: 3, value: 'Item 3' }, { id: 4, value: 'Item 4' }]);

  return (
    <>
      <IonCard color="primary">
        <IonCardHeader class="contain">
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Card Content
        </IonCardContent>
      </IonCard>

      <IonCard color="secondary">
        <IonCardHeader class="contain">
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Card Content
        </IonCardContent>
      </IonCard>

      <IonCard color="tertiary">
        <IonCardHeader class="contain">
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Card Content
        </IonCardContent>
      </IonCard>

      <IonCard color="success">
        <IonCardHeader class="contain">
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Card Content
        </IonCardContent>
      </IonCard>

      <IonCard color="warning">
        <IonCardHeader class="contain">
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Card Content
        </IonCardContent>
      </IonCard>

      <IonCard color="danger">
        <IonCardHeader class="contain">
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Card Content
        </IonCardContent>
      </IonCard>

      <IonCard color="light">
        <IonCardHeader class="contain">
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Card Content
        </IonCardContent>
      </IonCard>

      <IonCard color="medium">
        <IonCardHeader class="contain">
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Card Content
        </IonCardContent>
      </IonCard>

      <IonCard color="dark">
        <IonCardHeader class="contain">
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Card Content
        </IonCardContent>
      </IonCard>
    </>
  );
}