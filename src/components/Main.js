import styled from 'styled-components'
import { ReactComponent as IconArrowDown } from '../assets/desktop/icon-arrow-down.svg'
import { ReactComponent as IconArrowUp } from '../assets/desktop/icon-arrow-up.svg'
import { ReactComponent as IconSun } from '../assets/desktop/icon-sun.svg'
import { ReactComponent as IconMoon } from '../assets/desktop/icon-moon.svg'
import { H1, H2, H3, H4, H6, Timezone } from './Styled'
import breakpoints from '../styles/breakpoints';

const Styled = styled.main`
  display: flex;
  padding-block-end: 6.125rem;

  p::after {
      content: ", it\'s currently";
    }

  button {
    --arrowBgSize: 2.5rem;
    display: grid;
    grid-template-columns: 1fr var(--arrowBgSize);
    justify-items: center;

    height: 3.5rem;
    width: 9.125rem;
    color: var(--grey-mid);
    background: var(--white);
    border-radius: 28px;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: .3125rem;
    padding: .5rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black);
    border-radius: 50%;
    height: var(--arrowBgSize);
    width: var(--arrowBgSize);
  }
}

  @media screen and ${breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media screen and ${breakpoints.tabletLg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media screen and ${breakpoints.tabletSm} {
    padding-block-end: 4rem;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 5rem;
  }

  @media screen and ${breakpoints.mobile} {
    padding-block-end: 2.5rem;
    flex-direction: column;
    gap: 3rem;

    p::after {
      content: none;
    }

    button {
      --arrowBgSize: 2rem;
      height: 2.5rem;
      width: 7.1875rem;
      font-size: .75rem;
      letter-spacing: .234rem;
      line-height: .875rem;
      padding: .25rem;
    } 
  }
`

export default function Main() {
  return (
    <Styled>
      <section>
        <H4 as="p">
          { true 
          ? <><IconSun /> Good Morning</> 
          : <><IconMoon />Good Evening</>}
        </H4> 
        <H1 as="time">9:54<Timezone> PST</Timezone></H1>
        <H3>in Portland, USA</H3>
      </section>

      <button>
        { true 
        ? <>More 
            <span>
              <IconArrowDown />
            </span>
          </> 
        : <> Less 
            <span>
              <IconArrowUp />
            </span>
          </> }
      </button>

      { true ? '' :
        <section>
          <H6>Current timezone</H6>
          <H2 as='p'>United States/Portland</H2>

          <H6>Day of the year</H6>
          <H2 as='p'>312</H2>

          <H6>Day of the week</H6>
          <H2 as='p'>Tuesday</H2>

          <H6>Week number</H6>
          <H2 as='p'>44</H2>
        </section>
      }
    </Styled> 
  )
}