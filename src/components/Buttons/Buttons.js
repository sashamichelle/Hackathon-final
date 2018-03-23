import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import './style.css';

class ButtonYellow extends React.Component {
  render() {
    return (
    <Col xs={12} md={4}>
      <button className="button">
        {this.props.name}
      </button>
    </Col>
    );
  }
}

class ButtonGreen extends React.Component {
  render() {
    return (
      <Col xs={12} md={4}>
      <button className="buttonGreen">
        {this.props.name}
      </button>
      </Col>
    );
  }
}

class ButtonRose extends React.Component {
  render() {
    return (
    <Col xs={12} md={4}>
      <button className="buttonRose">
        {this.props.name}
      </button>
    </Col>
    );
  }
}

class ButtonYellowM extends React.Component {
  render() {
    return (
    <Col xs={12} md={4}>
      <button className="buttonM">
      {this.props.name}
      </button>
    </Col>
    );
  }
}

export {ButtonYellow, ButtonGreen, ButtonRose, ButtonYellowM};