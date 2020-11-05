import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
// import DriverHeader from './components/DriverHeader';
// import AdminHeader from './components/AdminHeader';
import Footer from './components/Footer';
import CallScreen from './screens/CallScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ServiceListScreen from './screens/ServiceListScreen';
import ServiceEditScreen from './screens/ServiceEditScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen'
import CallDetail from './components/Calls/CallDetail';
import CallRecieving from './components/Calls/CallRecieving';
import PdrScreen from './screens/PdrScreen'
// import DispatchHeader from './components/DispatchHeader';

const App = () => {
  return (
    <Router>
      <Header />
      {/* <AdminHeader /> */}
      {/* <DispatchHeader /> */}
      {/* <DriverHeader /> */}
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
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/services' component={ServiceListScreen} />
          <Route path='/admin/service/:id/edit' component={ServiceEditScreen} />
          <Route path='/pdrs' component={PdrScreen}  />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
