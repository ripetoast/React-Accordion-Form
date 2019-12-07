import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import FormSection from "./FormSection";
import DetailsForm from "./DetailsForm";
import CommentsForm from "./CommentsForm";
import FinalForm from "./FinalForm";

class Form extends React.Component{
    render(){
        return (
          <div className="container">
            <Accordion className="acord shadow rounded" defaultActiveKey="0">
                {/* Section 1: Your Details */}
                <FormSection eventKey="0" sectionName="Your details">
                  <DetailsForm />
                </FormSection>

                {/* Section 2: More Comments */}
                <FormSection eventKey="1" sectionName="More comments">
                  <CommentsForm />
                </FormSection>

                {/* Section 3: Final Comments */}
                <FormSection eventKey="2" sectionName="Final comments">
                  <FinalForm />
                </FormSection>
            </Accordion>
          </div>
        );
    }
}

export default Form;