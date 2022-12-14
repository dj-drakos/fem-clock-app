import styled from 'styled-components';
import { forwardRef } from 'react';
import GridContainer from './GridContainer'
import GridItem from './GridItem'
import { H2, H6 } from './Typography'
import breakpoints from '../styles/breakpoints';
import * as Collapsible from '@radix-ui/react-collapsible';
import * as Separator from '@radix-ui/react-separator';

const StyledContent = styled(Collapsible.Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.color2 };
  background-color: ${({ theme }) => theme.background };
  backdrop-filter: blur(1.25rem);

  hgroup {
    display: flex;
    flex-direction: column;
    
    &:first-of-type {
      margin-block-end: 2.625rem;
    }
  }
  
  .flex {
    flex-direction: column;
    justify-content: space-between;
  }

  .separator {
    border-inline-start: 1px ${({ theme }) => theme.color2} solid;
    opacity: .25;
  }

  ${`@media screen and ${breakpoints.tabletSm}`} {
    hgroup:first-of-type {
      margin-block-end: 3rem;
    }

    .separator {
      border-inline-start:none;
    }
  }

  ${`@media screen and ${breakpoints.mobile}`} {
    hgroup {
      &:first-of-type {
      margin-block-end: .5rem;
      }

      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-block: .5rem;
      
      p { text-align: end; }

    }
  }
`

const CollapsibleDetailsContent = forwardRef(({clockOptions, ...props}, forwardedRef) => {
  const { dayOfWeek, dayofYear, timezone, week } = clockOptions

return (
    <StyledContent {...props} ref={forwardedRef}>
      <GridContainer as="section" alignContent="center">
        <GridItem m={6} className="flex">
          <hgroup>
            <H6 as='h2'>Current timezone</H6>
            <H2 as='p'>{timezone.country}/
              <wbr/>
              {timezone.city}
            </H2>
          </hgroup>
          
          <hgroup>
            <H6 as='h2'>Day of the year</H6>
            <H2 as='p'>{dayofYear}</H2>
          </hgroup>
        </GridItem>

        <Separator.Root asChild decorative>

          <GridItem m={1} className="separator"></GridItem>
        </Separator.Root>
          
        <GridItem m={5} className="flex">
          <hgroup>
            <H6 as='h2'>Day of the week</H6>
            <H2 as='p'>{dayOfWeek}</H2>
          </hgroup>
          
          <hgroup>
            <H6 as='h2'>Week number</H6>
            <H2 as='p'>{week}</H2>
          </hgroup>
        </GridItem>
      </GridContainer>
    </StyledContent>
  )
})

export default CollapsibleDetailsContent