import { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import homePage from "./pages/homePage";
import './style.scss';

function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path ="/" component = {homePage}/>


      </Router>
    </Fragment>
  );
}

export default App;
