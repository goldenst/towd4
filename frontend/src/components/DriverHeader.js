import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { logout } from '../actions/userActions'

const DriverHeader = () => {
  const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const logoutHandler = () => {
   
  //   dispatch(logout())
  // };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Driver links</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/new'>
                <Nav.Link>
                  <i className='far fa-calendar-plus'> Add Call</i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/mycalls'>
                <Nav.Link>
                  <i className='fas fa-phone-volume'> My Calls</i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/mystats'>
                <Nav.Link>
                <i class="fas fa-tachometer-alt"> My Sats</i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/mydaily'>
                <Nav.Link>
                <i class="fas fa-clipboard-list"> Daily log</i>
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

export default DriverHeader;
