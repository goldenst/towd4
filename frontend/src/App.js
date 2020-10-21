import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import CallScrene from './components/Calls/CallScrene';
import HomeScrene from './screnes/HomeScrene';
import CallDetail from './components/Calls/CallDetail';
import CallRecieving from './components/Calls/CallRecieving'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScrene} exact />
          <Route path='/calls' component={CallScrene} exact />
          <Route path='/new' component={CallRecieving} exact />
          <Route path='/calls/:id' component={CallDetail} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
