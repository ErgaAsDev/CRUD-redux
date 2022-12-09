import React from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { getUserDetail, putUserUpdate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

const EditContainer = (props) => {
  React.useEffect(() => {
    props.dispatch(getUserDetail(props.match.params.id));
  })

  function handleSubmit(data) {
    props.dispatch(putUserUpdate(data, props.match.params.id));
  }

  
  if (props.getResponDataUser || props.errorResponDataUser) {
    if (props.errorResponDataUser) {
      swal("Failed!", props.errorResponDataUser, "error");
    } else {
      swal(
        "Data Updated!",
        "Title : " +
          props.getResponDataUser.title +
          " , Desc : " +
          props.getResponDataUser.description,
        "success"
      );
    }
  }
    return (
      <Container id="edit">
        <BackComponent />
        <h1>Edit Data</h1>
        <FormComponent onSubmit={(data) => handleSubmit(data)} />
      </Container>
    );
  
}

export default connect(mapStateToProps, null)(EditContainer);
