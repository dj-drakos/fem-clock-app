import styled from 'styled-components'
import Greeting from './Greeting'
import GridContainer from './GridContainer'
import GridItem from './GridItem'
import ToggleDetails from './ToggleDetails'
import { H1, H3, Timezone } from './Typography'
import breakpoints from '../styles/breakpoints';
import { formatTime } from '../utils/formatUtils'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column; 
  justify-content: flex-end;

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
  }

  @media screen and ${breakpoints.tabletSm} {
    section {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      gap: 5rem;
    }
  }

  @media screen and ${breakpoints.mobile} {
    section {
      gap: 3rem;
    }
  }
`

export default function Main({ 
  currentTime, 
  detailsIsOpen, 
  status, 
  timeOfDay, 
  timezoneAbbr, 
  toggleDetails 
}) {

return (
    <StyledMain className="clock">
      <GridContainer>
        { status === 'resolved' &&
          <GridItem>
            <section>
              <div className="wrapper">
                <Greeting timeOfDay={timeOfDay} />
                <H1>
                  <time>
                    {`${formatTime(currentTime)}`}
                    <Timezone>
                      {timezoneAbbr}
                    </Timezone>
                  </time>
                </H1>
                <H3 as="p">
                  in Portland, USA
                </H3>
              </div>
              <ToggleDetails detailsIsOpen={detailsIsOpen} toggleDetails={toggleDetails}/>
            </section>
          </GridItem>
          }
        </GridContainer>
    </StyledMain> 
  )
}