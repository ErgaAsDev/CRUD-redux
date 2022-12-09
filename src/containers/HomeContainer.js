import React from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from '../actions/userAction'
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'
import { Container } from "react-bootstrap";

const HomeContainer = (props) => {
  React.useEffect(() => {
    props.dispatch(getUsersList());
    props.dispatch(deleteDataUser());
  })

    return (
      <div>
        <Container className="mt-3">
          <h2 className="text-center">Data Charts</h2>
        </Container>
        <Container id="charts">
          <LineChart />
          <BarChart />
          <PieChart />
        </Container>
        <TableComponent />
      </div>
    );
  
}

export default connect()(HomeContainer);
