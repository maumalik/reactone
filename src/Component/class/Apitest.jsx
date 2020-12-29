import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import Postcard from '../functional/Postcard';

class Apitest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post:[]
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    post:json
                })
            })
    }

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        {
                            this.state.post.map(function(post,index){
                                if(index < 4) 
                                return (
                                    <Col md="3">
                                    <Postcard key={post.id} title={post.title} desc={post.body} />
                                    </Col>
                                )
                            })
                        }
                      
                    </Row>
                </Container>
            </div>
        );

    }
}

export default Apitest;