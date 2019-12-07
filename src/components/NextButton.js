import React from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

const NextButton = (props) => {
    const decoratedOnClick = useAccordionToggle(props.eventKey);
    try {
        if (props.errors.syncErrors === undefined) {
            return (
                <button type="submit" className="btn btn-purple" onClick={decoratedOnClick}>
                    {props.children}
                </button>
            );
        } else {
            return (
                <button type="submit" className="btn btn-purple">
                    {props.children}
                </button>
            );
        }
    } catch (e) {
        return (
            <button type="button" className="btn btn-purple" onClick={decoratedOnClick}>
                {props.children}
            </button>
        );
    }
}

export default NextButton;