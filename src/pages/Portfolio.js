import React from 'react';
import Col from "../components/Col";
import Row from "../components/Row";
import Container from "../components/Container";
import pics from "../pics.json";
import BioCard from "../components/BioCard";

const styles = {
    content: {
        fontSize: "30px"
    }
}


function Portfolio() {
    return (
       <div>
           <Container style={{ marginLeft: 0, marginTop: 30 }}>
               <Row>
                   <Col size= "md-12">
                       <div style={styles.content}>
                           Email Address: bfire23@gmail.com
                       </div>
                       <div style={styles.content}> Phone Number: 480-751-8587
                       </div>
                       <div style={styles.content}>
                           <a href= "https://github.com/bfire23"> GitHub Profile</a>
                       </div>
                   </Col>
               </Row>

               <Row>
                   <Col size= "md-12">
                       <div style= {styles.content}>
                       <h2 class="mt-5 mb-5">Portfolio</h2>
                       </div>
                   </Col>
               </Row>

               <Row>
                   <Col size= "md-6">
                   <BioCard
                    name={pics[1].name}
                    image= {pics[1].image}
                    /> 
                   </Col>

                   <Col size= "md-6">
                   <BioCard
                    name={pics[2].name}
                    image= {pics[2].image}
                    />
                   </Col>

                    <Row>
                   <Col size= "md-6">
                   <BioCard
                    name={pics[3].name}
                    image= {pics[3].image}
                    />
                   </Col>

                   <Col size= "md-6">
                   <BioCard
                    name={pics[4].name}
                    image= {pics[4].image}
                    />
                   </Col>
                    </Row>


               </Row>

                           
           </Container>
       </div> 
    )

}



export default Portfolio



