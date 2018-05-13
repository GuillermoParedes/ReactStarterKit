/**
 * @author  Guillermo David Paredes Torrez, https://github.com/GuillermoParedes
 * @email  gdavid.ptorrez@gmail.com
 * @link    url goes here
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './home.scss';

class Home extends Component {
  constructor (props) {
    super(props);
    
  }
  render() {
    return (
      <div className="containerHome">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="success-template">
                <h1>
                  hi!</h1>

                <div className="success-details">
                  Welcome to Starter kit with React.JS
                </div>
                <div className="success-actions">
                  
                  <a href="https://github.com/mycodebad" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-envelope" /> Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Home.propTypes = {
  urlConnect: PropTypes.string,
  portConnect: PropTypes.number
}

Home.defaultProps = {
  urlConnect: 'http://localhost',
  portConnect: 8888
};

export default Home;