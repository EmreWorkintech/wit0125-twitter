import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/feed">
          <Feed />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
