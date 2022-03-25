import React, { useState } from "react";
import { connect } from 'react-redux'

import Form from "../../components/Form";
import RelationshipChain from "./relationshipChain";

const Relations = ({ persons }) => {

  const [person1, setPerson1] = useState("")
  const [person2, setPerson2] = useState("")
  const [formError, setFormError] = useState("")

  const onFormSubmit = (person1, person2) => {

    if (typeof persons[person1] === "undefined" || typeof persons[person2] === "undefined") {
      setFormError(typeof persons[person1] === "undefined" ? "Person1 not found" : "Person2 not found")
      return
    }

    setFormError("")
    setPerson1(person1);
    setPerson2(person2);
  }

  return (
    <>
      <Form formError={formError} resetFormOnSubmit={false} onFormSubmit={onFormSubmit} buttonText="Find" typo1="Find" typo2="relations with" />
      {
        person1 && person2 && <RelationshipChain person1={person1} person2={person2} />
      }
    </>
  )
}

const mapStateToProps = (state => ({
  persons: state?.persons?.data || {}
}))


export default connect(mapStateToProps, {})(Relations)
