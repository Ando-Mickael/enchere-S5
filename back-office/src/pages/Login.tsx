import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { FormLogin } from '../components/FormLogin';

export const Login: React.FC = () => {

	return (
		<>
			<IonPage id="main-content">
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton></IonMenuButton>
						</IonButtons>
						<IonTitle>Se connecter</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className="ion-padding">
					<FormLogin />
				</IonContent>
			</IonPage>
		</>
	);
};
