import React, { Component } from "react";
import LineChart from './components/LineChart';
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateContainer from "./containers/CreateContainer";
import EditContainer from "./containers/EditContainer";
import DetailContainer from "./containers/DetailContainer";
import { Container } from "react-bootstrap";




const App = () => {
    return (
      <div>
        <NavbarComponent />
        
        {/* <JumbotronComponent /> */}
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
