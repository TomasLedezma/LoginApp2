import NavBar from './components/NavBar/NavBar';
import Contenido from './components/Contenido/Contenido';
import Login from './components/Pages/Login';
import Todo from './components/Pages/Todo/Todo';


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <body >
      <header>
          <NavBar></NavBar>
      </header>
      <main id="info">
        <Switch>
          <Contenido>
            
              <Route path="/" exact >
                <Login> </Login>
              </Route>
              <Route path="/todos" exact >
                <div className="fondo">
                  <Todo />
                </div>
                  
              </Route>
                    
          </Contenido>
        </Switch>
      </main>
    </body>
    </Router>
  );
}

export default App;
