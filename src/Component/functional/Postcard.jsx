import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const Postcard = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://placeimg.com/318/180/tech" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{props.title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>{props.desc}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
export default Postcard;