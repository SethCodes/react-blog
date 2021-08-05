import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../../css/Features.css';
import people from '../../img/people.jpg';
import Article from '../Article';


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
const data2 = [
    {
      header: "A New Wave Of Peaceful Protest Has Just Started At The Capital",
      author: "Jack Sparrow",
      date: "07-22-2021",
      img: "./img/people.jpg"
    },
    {
      header: "A New Wave Of Peaceful Protest Has l",
      author: "Jack Sparrow",
      date: "07-22-2021",
      img: "../img/people.jpg"
    },
    {
      header: "A New Wave Of Peaceful ",
      author: "Jack Sparrow",
      date: "07-22-2021",
      img: { people }
    }
];



const Features = () => {
    return(<Container id="features" className="" fluid>
<Row>
    <Col className=" text-start feature-left" lg ={3} md={0} sm={0}>
    {/* <Container fluid> */}

    {
        data2.map(product => {
            return(
                <Row>
                <Article 
                header={product.header}
                date={product.date}
                author={product.author} />
            </Row>
            )
        })

    }

    {/* </Container> */}
    </Col>


    <Col className="center-img-col" md={6} sm={12}>
<Image className="featImg" src={people} alt="people"/>
    </Col>


    <Col className="feature-right" md={3} sm={12}>
    {/* <Container className=""> */}
        <Row className="featRRow">
            <Col>
                <img className="rColImg" src={people} alt="people"/>
            </Col>
            <Col>
                <h6>{data.art1.header}</h6>
                <p>{data.art1.date}</p>
                <p>{data.art1.author}</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <img className="rColImg" src={people} alt="people"/>
            </Col>
            <Col>
                <h6>{data.art1.header}</h6>
                <p>{data.art1.date}</p>
                <p>{data.art1.author}</p>
            </Col>
        </Row>
        <Row>
            <Col >
                <img className="rColImg" src={people} alt="people"/>
            </Col>
            <Col >
                <h6>{data.art1.header}</h6>
                <p>{data.art1.date}</p>
                <p>{data.art1.author}</p>
            </Col>
        </Row>
        <Row id="last-row">
            <Col >
                <img className="rColImg" src={people} alt="people"/>
            </Col>
            <Col >
                <h6>{data.art1.header}</h6>
                <p>{data.art1.date}</p>
                <p>{data.art1.author}</p>
            </Col>
        </Row>
    {/* </Container> */}
    </Col>
</Row>

    </Container>
    
    );

} 

export default Features;
