import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';

import {
  listServices,
  deleteService,
  createService,
} from '../actions/servicesActions';
import { SERVICES_CREATE_RESET } from '../constants/servicesConstants';

const ServiceListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const serviceList = useSelector((state) => state.serviceList);
  const { loading, error, services } = serviceList;

  const serviceDelete = useSelector((state) => state.serviceDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = serviceDelete;

  const serviceCreate = useSelector((state) => state.serviceCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    service: createdService
  } = serviceCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: SERVICES_CREATE_RESET });

    if (!userInfo) {
      history.push('/login');
    }

    if (successCreate) {
      history.push(`/admin/services/${createdService._id}/edit`);
    } else {
      dispatch(listServices());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdService,
  ]);

  const createServiceHandler = () => {
    dispatch(createService())
    console.log('create clicked');
  };

  const deleteHandler = (id) => {
    if (window.confirm('Are Yoy Sure')) {
      dispatch(deleteService(id));
    }
  };

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h2>Services</h2>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createServiceHandler}>
            <i className='fas fa-plus'></i> Create Service
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>isActive</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td>{service._id}</td>
                <td>{service.name}</td>
                <td>${service.price}</td>
                <td>
                  {service.isActive ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/service/${service._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(service._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ServiceListScreen;
