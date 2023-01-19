// liste des encheres

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ListeEncheres } from '../components/ListeEncheres';
import { Sidemenu } from '../components/Sidemenu';
import json from "../data/database.json";

export const Accueil: React.FC = () => {

	return (
		<>
			<Sidemenu />
			<IonPage id="main-content">
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton></IonMenuButton>
						</IonButtons>
						<IonTitle>Accueil</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<ListeEncheres encheres={json["encheres"]} />
				</IonContent>
			</IonPage>
		</>
	);
};
