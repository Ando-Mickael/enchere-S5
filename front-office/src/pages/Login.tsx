import { IonContent } from "@ionic/react";
import { FormLogin } from "../components/FormLogin";

export const Login: React.FC = () => {
    return (
        <IonContent className="ion-padding">
            <FormLogin />
        </IonContent>
    );
}