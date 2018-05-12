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
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              
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