import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { listServicesDetails, updateService } from '../actions/servicesActions';
import { SERVICES_UPDATE_RESET } from '../constants/servicesConstants';

const ServiceEditScreen = ({ match, history }) => {
  const serviceId = match.params.id;

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [catagory, setCatagory] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const serviceDetail = useSelector((state) => state.serviceDetail);
  const { loading, error, service } = serviceDetail;

  const serviceUpdate = useSelector((state) => state.serviceUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = serviceUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SERVICES_UPDATE_RESET });
      history.push('/admin/services');
    } else {
      if (!service.name || service._id !== serviceId) {
        dispatch(listServicesDetails(serviceId));
      } else {
        setName(service.name);
        setPrice(service.price);
        setCatagory(service.catagory);
        setDescription(service.description);
        setIsActive(service.isActive);
      }
    }
  }, [dispatch, history, serviceId, service, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateService({
      _id: serviceId,
      name,
      price,
      catagory,
      description,
      isActive
    }))
  };

  return (
    <>
      <Link to='/admin/servicelist' className='btn btn-light my-3'>
        Go Back
      </Link>

      <FormContainer>
        <h2>Edit Service</h2>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='catagory'>
              <Form.Label>Catagory</Form.Label>
              <Form.Control
                type='text'
                placeholder='Catagory'
                value={catagory}
                onChange={(e) => setCatagory(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='isActive'>
              <Form.Check
                type='checkbox'
                label='Is Active'
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ServiceEditScreen;
