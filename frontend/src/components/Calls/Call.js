import React from 'react';
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';

const Call = ({ call }) => {
  return (
    <>
      <Card className='my-2 p-3'>
        <Link to={`/calls/${call._id}`}>
          <Card.Body>{call.requestedBy}</Card.Body>
        </Link>
        <Card.Text>
          {call.customer} <br></br>
          {call.vehMake}
        </Card.Text>
      </Card>
    </>
  );
};

export default Call;
