import React, { useState, useEffect } from "react";

import { useFormik } from "formik";
import * as yup from "yup";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const validationSchema = yup.object({
  person1: yup
    .string("Enter Person1's name")
    .matches(/^[a-z ]+$/i, "Only alphabets & space is allowed.")
    .required("Person1 is required"),
  person2: yup
    .string("Enter Person2's name")
    .matches(/^[a-z ]+$/i, "Only alphabets & space issfsdfssfsfssfdsdfsfsd allowed.")
    .required("Person2 is required"),
});

const Form = ({ formError = "", resetFormOnSubmit = true, onFormSubmit, buttonText = "", typo1 = "", typo2 = "" }) => {

  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      person1: "",
      person2: "",
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    onSubmit: (values, { resetForm }) => {
      let person1 = values.person1.trim().toLowerCase();
      let person2 = values.person2.trim().toLowerCase();

      if (person1 === person2) {
        setError("Person1's name and Person2's name cannot be same.");
        return;
      }

      setError("");
      resetFormOnSubmit && resetForm();
      onFormSubmit(person1, person2);
    },
  });

  useEffect(() => {
    setError(formError)
  }, [formError])

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        justifyContent: "center",
        marginTop: 6,
        border: "1px solid grey",
        borderRadius: 2,
        maxWidth: 700,
        paddingX: 2,
        paddingY: 6,
        marginX: "auto"
      }}
    >

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: error ? 2 : 4
        }}
      >
        {
          typo1 && <Typography variant="body2">{typo1}</Typography>
        }
        <TextField
          sx={{
            width: 280,
          }}
          id="person1"
          name="person1"
          label="Person1*"
          value={formik.values.person1}
          onChange={formik.handleChange}
          error={formik.touched.person1 && !!formik.errors.person1}
          helperText={formik.touched.person1 && formik.errors.person1}
        />
        {typo2 && <Typography variant="body2">{typo2}</Typography>}
        <TextField
          sx={{
            width: 280,
          }}
          id="person2"
          name="person2"
          label="Person2*"
          value={formik.values.person2}
          onChange={formik.handleChange}
          error={formik.touched.person2 && !!formik.errors.person2}
          helperText={formik.touched.person2 && formik.errors.person2}
        />
      </Box>
      {
        error && <Typography sx={{ color: "red", marginBottom: 4 }} variant="body2">{error}</Typography>
      }
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button sx={{ paddingX: 4 }} color="primary" variant="contained" type="submit">
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
}

export default Form;