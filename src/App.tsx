import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { BeerDetails } from "./feature/Beers/BeerDetails";
import { BeerList } from "./feature/Beers/BeerList";
import { Header } from "./common/Header";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/beer/details/:id">
          <BeerDetails />
        </Route>
        <Route path="/beer">
          <BeerList />
        </Route>
        <Route path="/">
          <Redirect to="/beer" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
