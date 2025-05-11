import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Switch>
        {/*<Route path="/about">
          <About />
        </Route>*/}
      </Switch>
    </Router>
    </>
  )
}

export default App
