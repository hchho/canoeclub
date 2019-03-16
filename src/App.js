import React from 'react';
import styled from 'styled-components'
import TimeTable from './modules/timetable/component/timetable'
import AuthForm from './modules/auth/form/authForm'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from './modules/timetable/component/signUp';

const AppHeader = () => (
  <Header>
    <Link to="/">
      <h1>
        Canoe Club Signup
        </h1>
    </Link>
    {/* <Link to="/register">
      Register
    </Link> */}
  </Header>
)

const App = () => (
  <AppWrapper>
    <Router>
      <div>
        <AppHeader />
        <Route exact path="/" component={TimeTable} />
        <Route path="/register" component={AuthForm} />
        <Route path="/signup/:facilityType" component={SignUp} />
      </div>
    </Router>
  </AppWrapper>
)

const AppWrapper = styled.div`
`

const Header = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: #FCFCFC;
  }
`

export default App;

/**
 * Colour scheme
 * Blue: 256EFF
 * Spanish violet: 46237A
 * Eucalyptus: 3DDC97
 * Baby powder: FCFCFC
 * Magic potion: FF495C
 */
