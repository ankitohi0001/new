import { useState } from "react";
import { AuthContext } from "../auth/auth-context";
import AuthContent from "../components/AuthContent";
import LoadingOverlay from "../Ui.js/Loadingoverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";
import { useContext } from "react";
function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState();  

  const authCtx = useContext(AuthContext);
  async function loginHandler({email,password}) {
    setIsAuthenticating(true);
    try{
   const token = await login (email, password);
   authCtx.authenticate(token);
    await login(email,password);
    }catch(error){
      Alert.alert(
        'Authentication failed!',
        'could not log you in. Pleace check your credentials or try again later!'
      );
      
    }
    setIsAuthenticating(false); 
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Logging you in..."/>
    }
  
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;