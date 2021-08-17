import './App.css';
import {BrowserRouter, Route, Switch} from  "react-router-dom";
import landingPage from './components/landingPage'
import home from './components/home'
import pokemonCreate from './components/pokemonCreate'
import detail from './components/detail'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
<Route exact path= '/' component = {landingPage}/>
<Route path = '/home' component={home}/>
<Route path = '/pokemon' component={pokemonCreate}/>
<Route path = '/pokemon/:id' component={detail}/>


      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

//switch envuelve a cada ruta y va a ir de ruta en ruta. se mueve solo adentro de lo que esta envolvendo