import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateContainer from "./containers/CreateContainer";
import EditContainer from "./containers/EditContainer";
import DetailContainer from "./containers/DetailContainer";





const App = () => {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/create" exact component={CreateContainer} />
          <Route path="/detail/:id" exact component={DetailContainer} />
          <Route path="/edit/:id" exact component={EditContainer} />
        </BrowserRouter>
      </div>
    );
}

export default App
