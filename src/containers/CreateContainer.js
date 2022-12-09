import React from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

const CreateContainer = (props) => {
  function handleSubmit(data) {
    props.dispatch(postUserCreate(data));
  }

  if (props.getResponDataUser || props.errorResponDataUser) {
    if(props.errorResponDataUser)
    {
      swal(
          "Failed!",
          props.errorResponDataUser,
          "error"
        );
    }else {
      swal(
          "Data Created! (Check console)",
          "Title : " +
            props.getResponDataUser.title +
            " , Desc : " +
            props.getResponDataUser.description,
          "success"
        );
    }
  }
  
    return (
      <Container id="add">
        <BackComponent />
        <h1>Add Data</h1>
        <FormComponent onSubmit={(data) => handleSubmit(data)} />
      </Container>
    );
  
}

export default connect(mapStateToProps, null)(CreateContainer);
