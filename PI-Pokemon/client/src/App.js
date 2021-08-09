import './App.css';
import {BrowserRouter, Route, Switch} from  "react-router-dom";
import landingPage from './components/landingPage'
import home from './components/home'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
<Route exact path= '/' component = {landingPage}/>
<Route path = '/home' component={home}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

//switch envuelve a cada ruta y va a ir de ruta en ruta. se mueve solo adentro de lo que esta envolvendo