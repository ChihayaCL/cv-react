import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Timeline(props) {

    return(
        <Row className="text-left">
            <Col md={5}>
                <h4>{props.dates}</h4>
                <h5>{props.city}</h5>
            </Col>
            
            <Col md={7}>
                <h2><strong>{props.charge}</strong></h2>
                <p>{props.description}</p>
            </Col>
        </Row>
    );
}

export default Timeline;