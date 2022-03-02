import React from 'react'
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: pink;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  
`;

function Header() {
  return (
      <HeaderWrapper>
          
    </HeaderWrapper>
  )
}

export default Header