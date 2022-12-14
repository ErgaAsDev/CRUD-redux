// import "./styles.css";
import React from "react";
import { connect } from "react-redux";
import { PieChart, Pie,  Tooltip } from "recharts";



const mapStateToProps = (state) => {
    return {
      getUsersList: state.users.getUsersList,
      errorUsersList: state.users.errorUsersList,
    };
  };

function App(props) {
  return (
    <PieChart width={400} height={300}>
      <Pie
        dataKey="id"
        isAnimationActive={false}
        data={props.getUsersList}
        cx={200}
        cy={130}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
}

export default connect(mapStateToProps, null)(App);
