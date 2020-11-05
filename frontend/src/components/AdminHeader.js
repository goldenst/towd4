import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions'

const AdminHeader = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
   
    dispatch(logout())
  };

  return (
    
    <header> 

      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Admin Bar</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/new'>
                <Nav.Link>
                  <i className='far fa-calendar-plus'> Add Call</i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/calls'>
                <Nav.Link>
                  <i className='fas fa-phone-volume'> Calls</i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/mystats'>
                <Nav.Link>
                <i class="fas fa-tachometer-alt"> Sats</i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/storage'>
                <Nav.Link>
                <i class="fas fa-car"> Storage</i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/lien'>
                <Nav.Link>
                <i class="fas fa-clipboard-list"> Lien </i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/logout'>
                <Nav.Link>
                <i class="fas fa-sign-out-alt"> Logout</i>
                </Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
    
  );
};

export default AdminHeader;
