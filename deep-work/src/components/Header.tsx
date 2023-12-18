import React from 'react'
import styled from 'styled-components'


const HeaderLayer = styled.div`
display:flex;
justify-content: space-between;
height:30px;
`


const Header = () => {
  return (
    <HeaderLayer>
        <div>MY TodoList</div>
        <div>React</div>
    </HeaderLayer>
  )
}

export default Header