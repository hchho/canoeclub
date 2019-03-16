import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { capitalizeString } from '../../utils/stringUtils'

const SignUpForm = (props) => {
  const { handleSubmit, location: { state: { time, facility } } } = props
  return (
    <FormWrapper>
      <h3>
        {capitalizeString(facility)} booking for {time}:00
    </h3>
      <Formik
        initialValues={{ name: '', unit: '', strata: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <FieldGroup>
            <label>
              Name:
          </label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </FieldGroup>
          <FieldGroup>
            <label>
              Unit:
          </label>
            <Field type="number" name="unit" />
            <ErrorMessage name="number" component="div" />
          </FieldGroup>
          <FieldGroup>
            <label>
              Strata:
          </label>
            <Field type="text" name="strata" />
            <ErrorMessage name="strata" component="div" />
          </ FieldGroup>
          <ButtonWrapper>
            <button type="submit">
              Submit
            </button>
          </ButtonWrapper>
        </Form>
      </Formik>
    </FormWrapper>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FCFCFC;
  color: black;

  h3 {
    text-align: center;
  }
    
  * {
      margin: 12px;
  }

  button {
    background-color: #3DDC97;
    color: white;
    border: none;
    text-decoration: none;
    cursor: pointer;
    padding: 8px;
    font-size: 1em;
  }
`

const FieldGroup = styled.div`
  display: flex;
  justify-content: flex-start;

  label {
      flex-grow: 2;
  }
`

export default SignUpForm