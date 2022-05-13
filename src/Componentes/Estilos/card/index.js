import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #abcb2d;
  width: 7em;
  height: 2em;
  cursor: pointer;

  p {
    margin-top: 1em;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
  }

  &:hover {
    background-color: rgba(171, 203, 45, 0.85);
  }
`

export const Card22 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(242, 125, 22, 0.85);
  width: 7em;
  height: 2em;
  cursor: pointer;

  p {
    margin-top: 1em;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
  }
`
