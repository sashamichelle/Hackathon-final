import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import './style.css';

class Card extends Component {
    render() {
        return(
            <Col xs={12} md={3}>
                <div className="card">
                    <img className="img_card" src="http://materializecss.com/images/sample-1.jpg" alt="tarjeta"/>
                    <h3>{this.props.title}</h3>
                    
                    <div className="cardContent">
                        <p>{this.props.content}</p>
                    </div>
                    <div className="link">
                        <a href={this.props.href}>{this.props.link}</a>
                    </div>
                </div>
            </Col>
        )
    }
}

export default Card;