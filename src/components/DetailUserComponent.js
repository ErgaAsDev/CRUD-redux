import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">User Id</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.userId}</td>
        </tr>
        <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.id}</td>
        </tr>
        <tr>
          <td width="200">Title</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.title}</td>
        </tr>
        <tr>
          <td width="200">Description</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.body}</td>
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
