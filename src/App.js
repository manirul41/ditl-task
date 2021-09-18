import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./containers/Counter";
import Footer from "./containers/Footer";
import Form from "./containers/Form";
import HomePage from "./containers/HomePage";
import List from "./containers/List";
import SideBar from "./containers/SideBar";
import Topbar from "./containers/Topbar";
function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline />
        <Topbar />
        <SideBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/counter" exact component={Counter} />
          <Route path="/form" exact component={Form} />
          <Route path="/list" exact component={List} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
