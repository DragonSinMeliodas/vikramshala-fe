// import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./assets/css/styles.css";

function App() {
  return (
    <main>
      <Switch>
        <Route path="" component={HomePage} exact />
      </Switch>
    </main>
  );
}

export default App;
