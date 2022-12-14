import styled from 'styled-components'
import { AccessibleIcon } from '@radix-ui/react-accessible-icon'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { ReactComponent as RefreshIcon } from '../assets/desktop/icon-refresh.svg'
import GridContainer from './GridContainer';
import GridItem from './GridItem';
import { H5, P } from './Typography';
import { fetchAndJSON } from '../utils/fetchUtils'

const StyledFigure = styled.figure`
  .flex {
    flex-direction: row;
    gap: .5rem;
    justify-content: space-between;
  }

  blockquote {
    ::before, ::after {
      content: '"';
    }
  }
  
  button {
    background: none;
    border-radius: 50%;
    height: fit-content;
    width: fit-content;
    padding: .5rem;
    justify-content: center;
    will-change: transform;

    path {
      -webkit-transition: opacity .25s ease-out;
      -moz-transition: opacity .25s ease-out;
      -o-transition: opacity .25s ease-out;
      transition: opacity .25s ease-out;
    }

    &:hover, &:focus {
      path { opacity: 1; }
    }
  }
`

const Quote = forwardRef((props, forwardedRef) => {
  const [ quote, setQuote ] = useState(null);
  const refreshIcon = useRef(null)

  const getNewQuote = useCallback(() => {
    refreshIcon.current.animate(
      { transform: 'rotate(360deg)' },
      { duration: 500 }
    )
    setQuote(null)
    fetchAndJSON("https://quotable.io/random")
      .then((quote) => setQuote(quote))
  }, [])
  
  
  useEffect(() => {
    getNewQuote()
    
  }, [getNewQuote])


  return (
      <StyledFigure ref={forwardedRef} {...props}>
        <GridContainer>
          <GridItem s={12} m={11} l={7} xl={6} className='flex'>
            <div className="wrapper">
              { quote === null
              ? <P>Loading Quote...</P>
              : 
              <>
                <P as="blockquote">
                  {quote?.content}
                </P>
                <H5 as="figcaption">
                  {quote?.author}
                </H5>
              </>
              }
            </div>

            <button ref={refreshIcon} onClick={getNewQuote}>
              <AccessibleIcon label="fetch a new quote">
                <RefreshIcon />
              </AccessibleIcon>
            </button>
          </GridItem>
        </GridContainer>
      </StyledFigure>
  )
})

export default Quote