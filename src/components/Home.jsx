// import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import ModelS from "../images/model-s.jpg"
import ModelX from "../images/model-x.jpg"
import ModelY from "../images/model-y.jpg"
import Model3 from "../images/model-3.jpg"
import SolarPanel from "../images/solar-panel.jpg"
import SolarRoof from "../images/solar-roof.jpg"
import Accessories from "../images/accessories.jpg"
import Footer from "./Footer"




function Home() {
    return (
        <Container>
         <div id="Model S" >
            <Section
               title="Model S"
               description="Order Online for Touchless Delivery"
               backgroudImg= {`${ModelS}`}
               leftBtnText="Custom Order"
               rightBtnText="Existing Inventory"
            />
         </div>
            
            <div id="Model Y" >
            <Section
               title="Model Y"
               description="Order Online for Touchless Delivery"
               backgroudImg={`${ModelY}`}
               leftBtnText="Custom Order"
               rightBtnText="Existing Inventory"
            />
            </div>
            <div id="Model 3">
            <Section
               title="Model 3"
               description="Order Online for Touchless Delivery"
               backgroudImg={`${Model3}`}
               leftBtnText="Custom Order"
               rightBtnText="Existing Inventory"
            />
            </div>

            <div id="Model X">
            <Section
               title="Model X"
               description="Order Online for Touchless Delivery"
               backgroudImg={`${ModelX}`}
               leftBtnText="Custom Order"
               rightBtnText="Existing Inventory"
            />
            </div>
            
            <div id="Solar Panels">
             <Section
               title="Lowest Cost Solar Panels in America"
               description="Money-Back Guaratee"
               backgroudImg={`${SolarPanel}`}
               leftBtnText="Order Now"
               rightBtnText="Learn More"
            /> 
            </div>
            
            <div id="Solar Roofs">
             <Section
               title="Solar For New Roofs"
               description="Soalr Roof Costs Less then a New Roof Plus Solar Panel"
               backgroudImg={`${SolarRoof}`}
               leftBtnText="Order Now"
               rightBtnText="Learn More"
            /> 
            </div>

            <div id="Accessories">
              <Section
               title="Accessories"
               description=""
               backgroudImg={`${Accessories}`}
               leftBtnText="Shop Now"
            />          
            </div>
            <Footer/>
        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;
width: 100%;
// background-color: green;
text-align: center;
`