import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class FormSection extends React.Component{
    render(){
        return (
          <Card>
            <Card.Header className="card-header-bg">
              <p className="font-weight-bold section-title">{this.props.sectionName}</p>
            </Card.Header>
            <Accordion.Collapse eventKey={this.props.eventKey}>
              <Card.Body>
                {this.props.children}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
    }
}

export default FormSection;