import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { dateRef } from '../../../firebase/refs'
import { capitalizeString } from '../../utils/stringUtils'

const OPERATION_HOURS_LENGTH = 12

const STARTING_TIME = 9

const GYM = 'gym'

const TENNIS = 'tennis'

const FACILITIES = [
  GYM,
  TENNIS
]

const generateTimes = (startingTime, operationLength) => {
  let times = []
  for (let i = startingTime; i <= startingTime + operationLength; i++) {
    times.push(i)
  }
  return times
}

const formatTime = (time) => time + ":00"

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const TimeSlotWrapper = ({ time, facilityType }) => {

  const [isBooked, setIsBooked] = useState(false)
  const prevFacilityType = usePrevious(facilityType)

  useEffect(() => {
    if (prevFacilityType !== facilityType) setIsBooked(false)
    dateRef
      .where("time", "==", time)
      .where("facility", "==", facilityType)
      .get()
      .then((snapShot) => snapShot.forEach(() => {
        setIsBooked(true)
      }))
  }, [facilityType])

  return (
    <SlotWrapper>
      <TimeWrapper>
        {formatTime(time)}
      </TimeWrapper>
      {isBooked ?
        <BookedWrapper>
          Booked
        </BookedWrapper> :
        <SignUpLink to={{
          pathname: `/signup/${facilityType}`,
          state: { time: time, facility: facilityType }
        }}>
          Signup
        </SignUpLink>
      }
    </SlotWrapper>
  )
}

const FacilityContainer = ({ name, isActive, onClick }) => (
  <div onClick={() => onClick(name)} className={isActive ? 'active' : null}>
    <h3>
      {capitalizeString(name)}
    </h3>
  </div>
)

const TimeTable = () => {

  const [facilityType, setFacilityType] = useState(GYM)

  const times = generateTimes(STARTING_TIME, OPERATION_HOURS_LENGTH)

  return (
    <TimeTableWrapper>
      <Header>
        {FACILITIES.map((facility) => (
          <FacilityWrapper>
            <FacilityContainer name={facility} onClick={setFacilityType} isActive={facilityType === facility} />
          </FacilityWrapper>
        ))}
      </Header>
      <TimeSlotContainer>
        {times.map((time) => <TimeSlotWrapper time={time} facilityType={facilityType} />)}
      </TimeSlotContainer>
    </TimeTableWrapper>
  )
}

const TimeWrapper = styled.div`
  
`

const BookedWrapper = styled.div`
  color: red;
  font-weight: bold;
  width: 64px;
  text-align: center;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #FCFCFC;
  margin: 8px;
`

const FacilityWrapper = styled.div`
  display: flex;
  background-color: #FCFCFC;
  color: lightgrey;
  width: 100%;
  align-items: center;
  justify-content: center;

  h3:hover {
    color: white;
    cursor: pointer;
  }

  .active {
    background-color: #46237A;
    color: #FCFCFC;
    flex-grow: 1;
    text-align: center;
  }

  .active > h3:hover {
    color: #FCFCFC
  }
`

const SignUpLink = styled(Link)`
  background-color: #3DDC97;
  border: 1px solid #3DDC97;
  padding: 4px;
  width: 64px;
  color: white;
  text-decoration: none;
  text-align: center;

  :hover, :active, :visited {
    text-decoration: none;
  }

  :hover {
    background-color: white;
    border: 1px solid #3DDC97;
    color: #3DDC97;
  }
`

const SlotWrapper = styled.div`
  display: flex;
  width: 300px;
  color: black;
  background-color: #FCFCFC;
  justify-content: space-evenly;
  align-self: center;
  align-items: center;
  height: 48px;
  width: 100%;
  margin: 4px;
  border-color: 1px solid lightgrey;
`

const TimeTableWrapper = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  align-content: center;
`

const TimeSlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content; space-evenly;
  align-content: center;
  margin: 8px;
`

export default TimeTable