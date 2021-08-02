import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../../css/Features.css';
import people from '../../img/people.jpg';

const data = {
    art1: {
      header: "A New Wave Of Peaceful Protest Has Just Started At The Capital",
      author: "Jack Sparrow",
      date: "07-22-2021",
      img: "./img/people.jpg"
    },
    art2: {
      header: "A New Wave Of Peaceful Protest Has Just Started At The Capital",
      author: "Jack Sparrow",
      date: "07-22-2021",
      img: "../img/people.jpg"
    },
    art3: {
      header: "A New Wave Of Peaceful ",
      author: "Jack Sparrow",
      date: "07-22-2021",
      img: { people }
    }
  };


const Features = () => {
    return(<Container id="features" className="text-center" fluid>
<Row>
    <Col className=" text-start feature-left" md={3}>
    <div>
            <div>
                <h6>{data.art1.header}</h6>
                <div className="date-author">
                    <p>{data.art1.date}</p>
                    <p>{data.art1.author}</p>
                </div>
                <hr/>
            </div>
            <div>
                <h6>{data.art1.header}</h6>
                <div className="date-author">
                    <p>{data.art1.date}</p>
                    <p>{data.art1.author}</p>
                </div>
                <hr/>
            </div>
            <div>
                <h6>{data.art1.header}</h6>
                <div className="date-author">
                    <p>{data.art1.date}</p>
                    <p>{data.art1.author}</p>
                </div>
            </div>

    </div>
    </Col>
    <Col className="center-img-col" md={6}>
<Image className="featImg" src={people} alt="people"/>
    </Col>
    <Col className="col-center feature-right" md={3}>
    <Container className="">

    </Container>
    </Col>
</Row>

    </Container>
    
    );

} 

export default Features;
