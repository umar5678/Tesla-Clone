// import React from 'react'
import styled from "styled-components"

function Section({title, description, backgroudImg, leftBtnText, rightBtnText}) {
    return (
    <Wrap className="wrap" BgImg={backgroudImg}>
      <ItemText className="item-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          {
            rightBtnText && 
            <RightButton>
            {rightBtnText}
          </RightButton>
          }
          
        </ButtonGroup>
        <DownArrow className="arrow-img" />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-image: ${props => `url("${props.BgImg}")`};
align-items: center;
max-height: 100vh;
`

const ItemText = styled.div`
   padding-top: 14vh;
`

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;
@media (max-width: 768px){
  flex-direction: column;
}


`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 246px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.8;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 10px;
`
const RightButton = styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;
`
const Buttons = styled.div`

`

const DownArrow = styled.div`
margin-top: 10px;
height: 40px;
overflow-x: hidden;
`