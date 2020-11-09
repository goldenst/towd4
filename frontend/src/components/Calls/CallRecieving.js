
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Col, Button } from 'react-bootstrap';
import { createCall } from '../../actions/callActions';

const CallRecieving = () => {
 
  const [requestedBy, setRequestedBy] = useState('')
  const [callOrPoNumber, setCallOrPoNumber] = useState('')
  const [customerName, setCustomerNamer] = useState('')
  


  const dispatch = useDispatch()


  const submitHandler = (e) => {
    e.preventDefaulut();
    dispatch(createCall({
    requestedBy,
    callOrPoNumber,
    customerName

    }))
  };

  return (
    <div>
      <h3>Call Recieving</h3>
      <Form onSubmit={submitHandler}>
        <h5>Requested by</h5>
        <Form.Row>
          <Form.Group as={Col} controlId='requestedBy'>
            <Form.Label>Requested By</Form.Label>
            <Form.Control 
            type='text' 
            placeholder='Requested By'
            value={requestedBy}
            />
          </Form.Group>
          <Form.Group as={Col} controlId='callOrPoNumber'>
            <Form.Label>Call / Log Number</Form.Label>
            <Form.Control 
            type='text' 
            placeholder='12345' 
            value={callOrPoNumber}
            />
          </Form.Group>
        </Form.Row>
        {/* -------------------------------- Customer Section -------------------------------- */}
        <br />
        <h5>Customer Info</h5>
        <hr />
        <Form.Row>
          <Col>
            <Form.Label>Customer Name</Form.Label>
            <Form.Control 
            placeholder='Customer Name'
            type='text'
            value={customerName} />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridPhone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control 
            type='Phone' 
            placeholder='Phone' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type='email' 
            placeholder='Enter email' />
          </Form.Group>
        </Form.Row>
        {/* -------------------------------- Vehicle Section -------------------------------- */}
        <br />
        <h5>Vehicle info</h5> <hr />
        <Form.Row>
          <Form.Group as={Col} controlId='formGridVehYear'>
            <Form.Label>Year</Form.Label>
            <Form.Control type='text' placeholder='Year' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridMake'>
            <Form.Label>Make</Form.Label>
            <Form.Control type='text' placeholder='Make' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridModel'>
            <Form.Label>Model</Form.Label>
            <Form.Control type='text' placeholder='Make' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridColor'>
            <Form.Label>Color</Form.Label>
            <Form.Control type='text' placeholder='Color' />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridVin'>
            <Form.Label>Vin #</Form.Label>
            <Form.Control type='text' placeholder='Vin #' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridPlate'>
            <Form.Label>Plate</Form.Label>
            <Form.Control type='text' placeholder='Plate' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>State</Form.Label>
            <Form.Control type='text' placeholder='State' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridUnit'>
            <Form.Label>Unit</Form.Label>
            <Form.Control type='text' placeholder='Unit' />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridUnit'>
            <Form.Label>Unit</Form.Label>
            <Form.Control type='text' placeholder='Unit' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridDrive'>
            <Form.Label>Drivable</Form.Label>
            <Form.Control type='text' placeholder='Yes/No' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridKeys'>
            <Form.Label>Have Keys</Form.Label>
            <Form.Control type='text' placeholder='Yes/No' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridDrive'>
            <Form.Label>Drive Type</Form.Label>
            <Form.Control type='text' placeholder='2WD / 4WD / AWD' />
          </Form.Group>
        </Form.Row>
        {/* -------------------------------- Breakdown location Section -------------------------------- */}
        <br />
        <h5>Breakdown location</h5> <hr />
        <br />
        <Form.Row>
          <Col>
            <Form.Group controlId='formGridAddress1'>
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder='1234 Main St' />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>State</Form.Label>
            <Form.Control as='select' defaultValue='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridZip'>
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
        {/* -------------------------------- Services Section -------------------------------- */}
        <br />
        <h5>Services Requested</h5> <hr />
        <Form.Row>
          <Form.Group as={Col} controlId='formGridService'>
            <Form.Label>Service requested</Form.Label>
            <Form.Control placeholder='Tow' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridReason'>
            <Form.Label>Reason</Form.Label>
            <Form.Control placeholder='Accident / 22651(h)' />
          </Form.Group>
        </Form.Row>
        {/* -------------------------------- Destination location Section -------------------------------- */}
        <br />
        <h5>Tow Destination</h5> <hr />
        <Form.Row>
          <Form.Group as={Col} controlId='formGridShop'>
            <Form.Label>Shop</Form.Label>
            <Form.Control placeholder='Golden State Car Care' />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridAddressTow'>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder='1234 Main St' />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>State</Form.Label>
            <Form.Control as='select' defaultValue='Choose...'>
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridZip'>
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
        <Button variant='primary' type='submit' >
          Submit Call
        </Button>
      </Form>
    </div>
  );
};

export default CallRecieving;
