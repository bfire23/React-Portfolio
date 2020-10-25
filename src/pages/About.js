import React from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Canyon from "../components/Canyon";
import BioCard from "../components/BioCard";
import pics from "../pics.json"

import BioPic from "../images/BioPic.jpg"


function About() {
    return (
      <div>
        <Canyon backgroundImage= "https://wallpapercave.com/wp/mplbvBW.jpg">
        <h1>About Me</h1>
        </Canyon>
         <Container style={{ marginTop: 30 }}>
           <Row>
            <Col size= "md-8">
             <BioCard
             name={pics[0].name}
             image= {BioPic}
             />
            
            </Col>

            <Col size = "md-3">
              <p> <strong>I was born and raised in Chandler, Arizona. I am 35 years old. I have a wife and 2 daughters. As
                    for my profession, I have been a Letterpress printer for almost 10 years. I enjoy playing
                    Basketball, playing video games and hanging out with my family.
                    I also enjoy a nice scotch and having a filet mignon.</strong></p>
            </Col>
              

               
            </Row>  

         </Container>
         

       </div>
    )
}
               
                
               





export default About