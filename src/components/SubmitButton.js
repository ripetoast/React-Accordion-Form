import React from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

const SubmitButton = (props) => {
    const decoratedOnClick = useAccordionToggle(props.eventKey);

    return (
        <button type="submit" className="btn btn-purple" onClick={decoratedOnClick}>
            {props.children}
        </button>
    );
}

export default SubmitButton;