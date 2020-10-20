import React from 'react';
import Col from "../components/Col";
import Row from "../components/Row";
import Container from "../components/Container";

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

                   </Col>
               </Row>
           </Container>
       </div> 
    )

}



export default Portfolio



