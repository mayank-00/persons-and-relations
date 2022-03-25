import React from "react";
import { connect } from 'react-redux'

import Form from "../../components/Form";

import { addPerson } from "../../store/persons/action"

const AddPeople = ({ addPerson }) => {

  const onFormSubmit = (person1, person2) => {
    addPerson(person1, person2);
  }

  return (
    <Form onFormSubmit={onFormSubmit} buttonText="Add" typo2="is a friend of" />
  );
}

export default connect(null, { addPerson })(AddPeople)