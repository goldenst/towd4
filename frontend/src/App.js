import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import CallScreen from './screens/CallScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ServiceListScreen from './screens/ServiceListScreen';
import UserListScreen from './screens/UserListScreen';
import CallDetail from './components/Calls/CallDetail';
import CallRecieving from './components/Calls/CallRecieving';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/calls' component={CallScreen} exact />
          <Route path='/new' component={CallRecieving} exact />
          <Route path='/calls/:id' component={CallDetail} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/services' component={ServiceListScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
