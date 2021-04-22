import React, {Component} from "react";
import {Row,Col, Card} from "react-bootstrap";

class ChildComponent extends Component{
    constructor(props) {
        super(props);
        
    }

    render() {
      
        return (
            <Row>
                {this.props.data.map((movie, index) => (
                        <Col key={index} sm={4} md={4} lg={3}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={"http://image.tmdb.org/t/p/w300//"+movie.poster_path} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        {movie.overview}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                )}
            </Row>
        )
    }
}
export default ChildComponent