import Home from './components/HomeComponent/HomeComponent'
import Quiz from './components/QuizComponent/QuizComponent'

import {BrowserRouter as Router,
        Switch,
        Route,
        Link} from 'react-router-dom';

import './App.css'
function App() {
            return (
            <>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/quiz">
                  <Quiz/>
                </Route>
              </Switch>
            </Router>
            </>
            );
}

export default App;
