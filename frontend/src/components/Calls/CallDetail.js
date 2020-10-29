import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import calls from '../../calls';
import { listCallsDetails } from '../../actions/callActions';

const CallDetails = ({ match }) => {
  const dispatch = useDispatch();

  const callDetail = useSelector((state) => state.callDetail);
  const { loading, error, call } = CallDetails;

  useEffect(() => {
    dispatch(listCallsDetails(match.params.id));
  }, [dispatch, match]);

  if (error) {
    console.log(error);
  }

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

export default CallDetails;
