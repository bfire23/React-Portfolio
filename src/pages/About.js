import React from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Canyon from "../components/Canyon";
import BioCard from "../components/BioCard"

function About() {
    return (
      <div>
        <Canyon backgroundImage= "https://wallpapercave.com/wp/mplbvBW.jpg">
        <h1>About Me</h1>
        </Canyon>
         <Container style={{ marginTop: 30 }}>
           <Row>
            <Col size= "md-5">
             <BioCard
             image= "https://lh3.googleusercontent.com/LR2N6ncNoYGnZ7EHsw1g81B7hy6yqTLfri_QGAsToM57WBS0S_pVAzLbmHHg4DxZ2Kyh390bnnIo_au7kDvuCchmfask-anUw2wPGruKIJTJaFBy_C3lo4qzeoovZjCgWEFkH8yaADgRJbiP6DcYEvycw1p8QqXmTG8LKCO-bUhx6WFF0oWxplpbQ0_-pvfIGCjmtSBTmTteRsnoYeK-skUo7xxIxaTEdP9u7gvOIsUIEiAY8rqpkDv6pbeNVYZ5Y4VQ_x56-J5nZNkgamw8JToojFpJbkeuwbfWs06T-1Wt4ElfqFbAkIK11rDG-Jsehdl6buSghF8nrbYweFdj5CbUH5aAshEmzavB-VG8nO-jKlQMyPouVD-vORS0WdcT3nd4psg-UxX8nHxmBDaunl2WwerpGaJ1DE0gBEfNJhcPeB3x909SOadHT-6N5p37rRQSxlNLVjdljkXuWr-IxvnhP-JMrqYQFwvMhyCzOFuBTenwRIV2PPR9zrgWSsCm7x5YPO_B4o4DTqN2gkv4-SicSzB0uElt0EgfNqNEqvoLP0IHT6XGJBdDRfFKBgNRuh5tyS6H4JkziyrcmFblO1UGJViscF3lmT7FBnNcxfJ7ytmhrrs1TMYJOyXuxV1ccQ8n4n0qUa3ZCoYZNL80wTTEYpQsfPKyNaMltFmB0Uv3F7o7McWczk1TpZProkQ=w872-h1083-no?authuser=0">
             </BioCard>
            </Col>

            <Col size = "md-6">
              <p>I was born and raised in Chandler, Arizona. I am 35 years old. I have a wife and 2 daughters. As
                    for my profession, I have been a Letterpress printer for almost 10 years. I enjoy playing
                    Basketball, playing video games and hanging out with my family.
                    I also enjoy a nice scotch and having a filet mignon.</p>
            </Col>
              

               
            </Row>  

         </Container>

       </div>
    )
}
               
                
               





export default About