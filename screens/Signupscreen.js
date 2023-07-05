import { useContext, useState } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../Ui.js/Loadingoverlay";
import { Alert } from "react-native";

function SignupScreen() {
 const [isAuthenticating, setIsAuthenticating] = useState();


 const authCtx = useContext(AuthContent);
  async function signupHandler({email,password}) {
    setIsAuthenticating(true);
    try{
       const token = await createUser(email,password);
      authCtx.authenticate(token);
    }catch (error){
    Alert.alert(
      'Authentication failed',
      'could not create user, pleace check your input and try again later!'
    );
    setIsAuthenticating(false); 
    }
    
  }
 
  if(isAuthenticating){
    return <LoadingOverlay message="creating user..."/>
    }
  

  return <AuthContent  onAuthenticate={signupHandler}/>;
}

export default SignupScreen;