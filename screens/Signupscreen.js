import { useState } from "react";
import AuthContent from "../components/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../Ui.js/Loadingoverlay";

function SignupScreen() {
 const [isAuthenticating, setIsAuthenticating] = useState();

  async function signupHandler({email,password}) {
    setIsAuthenticating(true);
    await createUser(email,password);
    setIsAuthenticating(false); 
  }

  if(isAuthenticating){
    return <LoadingOverlay message="creating user..."/>
    }
  

  return <AuthContent  onAuthenticate={signupHandler}/>;
}

export default SignupScreen;