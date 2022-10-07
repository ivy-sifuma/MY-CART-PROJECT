import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Home</h2>
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <Switch>
              <Route exact path='/' component={Home} />
              </Switch>
        </div>
        </Router>
    );
  }
}

export default Home;


