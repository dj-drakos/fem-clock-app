import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  --black: hsl(0, 0%, 0%);
  --white: hsl(0, 0%, 100%);
  --grey-dark: hsl(0, 0%, 19%);
  --grey-mid: hsla(0, 0%, 50%);
  --grey-light: hsl(0, 0%, 60%);
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body, #root {
  height: 100%;
  overflow: hidden;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--white);
  background: var(--grey-mid);
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  scroll-behavior: smooth;
}

#root {
  margin: 0 auto;
}

img, picture {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
  background: inherit;
  padding: 0;
}

ul, ol {
  list-style-type: none;
  padding: 0;
}

blockquote { 
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  quotes: none;
}

button {
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
}

.flex {
  display: flex;
}

`