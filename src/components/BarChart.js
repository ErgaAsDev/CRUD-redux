// import "./styles.css";
import React from "react";
import { connect } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const mapStateToProps = (state) => {
    return {
      getUsersList: state.users.getUsersList,
      errorUsersList: state.users.errorUsersList,
    };
  };

function App(props) {
  return (
    <div>
        
        <BarChart
      width={350}
      height={200}
      data={props.getUsersList}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="userId" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="userId" fill="#8884d8" />
      <Bar dataKey="id" fill="#82ca9d" />
    </BarChart>
    </div>
    
  );
}

export default connect(mapStateToProps, null)(App);