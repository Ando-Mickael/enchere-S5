import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, useIonAlert } from "@ionic/react";
import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../util/Api";

export const FormLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [presentAlert] = useIonAlert();

    // function presentAler() {
    //     header: 'Alert'
    //     subHeader: 'Important message'
    //     message: 'This is an alert!'
    //     buttons: ['OK']
    // }

    function login() {
        console.log("email : " + email);
        console.log("password : " + password);
        const url = baseUrl + "/loginAdmin?email=" + email + "&mdp=" + password;

        axios.get(url).then((response) => {
            // console.log(response.data);
            if(response.data == "") {
                console.log("nooo")
                presentAlert({
                    header: 'Alert',
                    message: 'Email or password failed',
                    buttons: ['OK'],
                  })
            } else {
                console.log(response.data);
                localStorage.setItem("admin", JSON.stringify(response.data));
                window.location.assign("/listeEnchere");
            }
            
        });
        // 

    }

    return (
        <>
        
                <IonGrid fixed={true}>
                    <IonRow>
                    <IonCol></IonCol>
                    <IonCol size="7">
                        <IonItem>
                            <IonLabel position='floating'>Email</IonLabel>
                            <IonInput
                                type="email"
                                onIonInput={(e: any) => setEmail(e.target.value)} />
                        </IonItem>

                        <IonItem>
                            <IonLabel position='stacked'>Mot de passe</IonLabel>
                            <IonInput clearInput={true}
                                type="password"
                                onIonInput={(e: any) => setPassword(e.target.value)} />
                        </IonItem>

                        <IonButton
                            expand="block"
                            onClick={() => login()} 
                            >Continue</IonButton>
                    </IonCol>
                    <IonCol></IonCol>
            
                </IonRow>
                </IonGrid>

        </>
    );
}