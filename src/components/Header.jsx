import { useState } from 'react'
import styled from "styled-components"
import Logo from "../images/logo.svg"
import {FaBars} from "react-icons/fa"
import  {CgClose} from "react-icons/cg"
import { selectCars } from '../features/cars/CarSlice'
import { useSelector } from 'react-redux'


const Header = () => {
  
  const [ burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)

  console.log(cars)


  return (
    
    <Container>
      <a><img src={Logo} alt="Tesla" /></a>
      <Menu>

        {cars && cars.map((car, index) => (
            <a key={index} href={`#${car}`}>{car}</a>
          ))
        }

      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a> 
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrap>
          <CloseMenu onClick={() => setBurgerStatus(false)}/>
        </CloseWrap>
        {cars && cars.map((car, index) => (
            <li key={index}><a href={`#${car}`} onClick={() => setBurgerStatus(false)}>{car}</a></li>
          ))
        }
        <li><a href="#Solar Panels" onClick={() => setBurgerStatus(false)}>Solar Panels</a></li>
        <li><a href="#Solar Roofs" onClick={() => setBurgerStatus(false)}>Solar Roofs</a></li>
        <li><a href="#Accessories" onClick={() => setBurgerStatus(false)}>Accessories</a></li>
        <li><a href="#" onClick={() => setBurgerStatus(false)}>Cybertruck</a></li>
        <li><a href="#" onClick={() => setBurgerStatus(false)}>Roadstar</a></li>

      </BurgerNav>
      
    </Container>
  ) 
}

export default Header
 
const Container = styled.div`
min-height: 60px;
position: fixed; 
display: flex; 
align-items: center;  
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`

const Menu = styled.div`
display: flex;
align-item: cetner;
justify-content: center;
flex: 1;
  a{
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 10px;
  }
  @media (max-width: 768px){
    display: none
  }
`

const RightMenu = styled.div`

a{
  text-transform: uppercase;
  font-weight: 600;
  margin-right: 10px;

}
`

const CustomMenu = styled(FaBars)`
cursor: pointer;
`
const CloseMenu = styled(CgClose)`
cursor: pointer;
`
const CloseWrap = styled.div`
display: flex;
justify-content: flex-end;
`

const BurgerNav = styled.div`
position: fixed;
background: white;
// display: none;
top: 0;
right: 0;
bottom: 0;
width: 300px;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
transform : ${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
transition: transform 0.3s ease-in;
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0, .2);
   
  a{
    font-weight: 600;
  }
}
`