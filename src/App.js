// import logo from "./logo.svg";
import "./App.scss";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home/Home";

function App() {
  return (
    <div className="App">
      <Helmet titleTemplate="%s - NetFlix" defaultTitle="NetFlix">
        <meta name="description" content="NetFlix Web Application" />
      </Helmet>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
