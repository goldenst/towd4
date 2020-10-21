import React from 'react';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import calls from '../../calls';

const CallDetail = ({ match }) => {
  const call = calls.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className='btn btn-dark my-3' to='/calls'>
        Go Back
      </Link>
      <h5>Call Detail</h5>
      <Col md={3}>
          <Card>
        <ListGroup>
            <ListGroup.Item>
          <Row>{call.customer}</Row>
          <Row>{call.vehMake}</Row>
          <Row>{call.vehYr}</Row>
          <Row>{call.vehColor}</Row>
          <Row>{call.requestedBy}</Row>
          </ListGroup.Item>
        </ListGroup>
        </Card>
      </Col>
      <Col md={3}>
        <ListGroup>
          <ListGroup.Item>
            <Card>
              <Row>Service Cost</Row>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </>
  );
};

export default CallDetail;
