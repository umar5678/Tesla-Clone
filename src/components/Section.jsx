// import React from 'react'
import styled from "styled-components"
import Fade from "react-reveal/Fade"


function Section({title, description, backgroudImg, leftBtnText, rightBtnText}) {
 
    return (
    <Wrap className="wrap" bgImg={backgroudImg} >
      <Fade bottom>
      <ItemText className="item-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>

      <Fade bottom>
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
      </Fade>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-image: ${props => `url("${props.bgImg}")`};
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
background-color: rgba(23, 26, 32, 1);
height: 40px;
width: 246px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 9px;
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