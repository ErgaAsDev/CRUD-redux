import React from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getUserDetail } from "../actions/userAction";
import DetailUserComponent from "../components/DetailUserComponent";

const DetailContainer = (props) => {
  React.useEffect(() => {
    props.dispatch(getUserDetail(props.match.params.id));
  })

    return (
      <Container id="detail">
        <BackComponent />
        <h1>Detail User</h1>
        <DetailUserComponent />
      </Container>
    );
  
}

export default connect()(DetailContainer);
