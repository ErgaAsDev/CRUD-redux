const UserValidation = (values) => {
  const errors = {};

  if (!values.title || values.title === "") {
    errors.title = "Must be filled";
  }

  if (!values.description || values.description === "") {
    errors.description = "Must be filled";
  }

  return errors
};

export default UserValidation;
