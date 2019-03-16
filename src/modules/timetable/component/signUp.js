import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { dateRef } from '../../../firebase/refs'
import SignUpForm from '../form/signUpForm'
import SuccessPage from './successPage'

const SignUp = (props) => {
  const { params: { facilityType } } = props.match
  const { time } = props.location.state
  const [isSubmitted, setSubmitted] = useState(false)

  const handleSubmit = (booking) => {
    dateRef.add({
      name: booking.name,
      unit: booking.unit,
      strata: booking.strata,
      time: parseInt(time),
      facility: facilityType
    }).then(setSubmitted(true)).catch((e) => console.error(e))
  }

  return (
  <div>
    {isSubmitted ? <SuccessPage /> : <SignUpForm handleSubmit={handleSubmit} { ...props } />}
  </div>
  )
}

export default withRouter(SignUp)

