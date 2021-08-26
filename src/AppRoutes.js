import React from "react";
import { Switch, Route } from "react-router-dom";
import MainComponent from "./Components/MainComponent";
import Glosario from "./Components/Glosario";
import Disertacion from "./Components/Disertacion";
import Resenias from "./Components/Reseñas";
import Audiovisual from "./Components/Audiovisual";
import CrearGlosario from "./Forms/CrearGlosario";
import CrearDisertacion from "./Forms/CrearDisertacion";
import CrearResenia from "./Forms/CrearReseña";
import CrearAudiovisual from "./Forms/CrearAudiovisual";


export default function AppRoutes(props) {
  return (
    <Switch>  
      <Route path="/glosario" exact>
        <Glosario auth={props.auth} setAuth={props.handleAuth} handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType} />
      </Route> 
      <Route path="/disertacion" exact>
        <Disertacion auth={props.auth} setAuth={props.handleAuth} handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
      </Route>
      <Route path="/resenias" exact>
        <Resenias auth={props.auth} setAuth={props.handleAuth} handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
      </Route> 
      <Route path="/audiovisual" exact>
        <Audiovisual auth={props.auth} setAuth={props.handleAuth} handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
      </Route> 

      <Route path="/glosario/crear/:id" exact>
        <CrearGlosario auth={props.auth} setAuth={props.handleAuth} handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
      </Route> 
      <Route path="/disertacion/crear/:id" exact>
        <CrearDisertacion auth={props.auth} setAuth={props.handleAuth} handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
      </Route> 
      <Route path="/resenias/crear/:id" exact>
        <CrearResenia auth={props.auth} setAuth={props.handleAuth} handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
      </Route> 
      <Route path="/audiovisual/crear/:id" exact>
        <CrearAudiovisual auth={props.auth} setAuth={props.handleAuth} handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
      </Route> 
      
      
      <Route default exact path="/" > 
        <MainComponent auth={props.auth} setAuth={props.handleAuth} handleLoader={props.handleLoader} openSnackbarByType={props.openSnackbarByType}/>
      </Route>
    </Switch>
  );
}
