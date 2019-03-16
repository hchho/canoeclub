import React from 'react'
import { Link } from 'react-router-dom'

const SuccessPage = () => (
  <div>
    <h2>
      Success!
    </h2>
    <Link to="/">
      Return to Home
    </Link>
  </div>
)

export default SuccessPage