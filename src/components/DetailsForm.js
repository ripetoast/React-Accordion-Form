import React from "react";
import validateEmails from "../utils/validateEmails";
import { Field, reduxForm, getFormSubmitErrors } from "redux-form";
import { connect } from "react-redux";
import InputField from "./InputField";
import NextButton from "./NextButton";
import * as actions from "../actions";

class DetailsForm extends React.Component{
    onSubmit = (formValues) => {
        this.props.storeFormData(formValues);
    };

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                {/* Section 1: Your Details */}
                    <div className="row mb-3">
                        <div className="col-4">
                            <label className="font-weight-bold" htmlFor="first_name">
                                First Name
                            </label>
                            <Field
                                name="first_name"
                                type="text"
                                label="First Name"
                                component={InputField}
                            />
                        </div>
                        <div className="col-4">
                            <label className="font-weight-bold" htmlFor="last_name">
                                Surname
                            </label>
                            <Field
                                name="last_name"
                                type="text"
                                label="Surname"
                                component={InputField}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="font-weight-bold" htmlFor="email">
                                Email Address
                            </label>
                            <Field
                                name="email"
                                type="email"
                                label="Email Address"
                                component={InputField}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-4">
                            <div>
                                <NextButton errors={this.props.formStore.DetailsForm} eventKey={"1"}>Next ></NextButton>
                            </div>
                        </div>
                    </div>
            </form>
        );
    }
}

const validate = (values) => {
    const errors = {};

    // First page validation
    if (validateEmails(values.email || "") !== null) {
        errors.email = validateEmails(values.email || "");
    }
    if (!values.first_name) {
        errors.first_name = "You must enter a first name";
    }
    if (!values.last_name) {
        errors.last_name = "You must enter a surname";
    }
    if (!values.email) {
        errors.email = "You must enter an email address";
    }
    return errors;
};

const formWrapped = reduxForm({
    form: "DetailsForm",
    validate
})(DetailsForm);

const mapStateToProps = (state) => {
    return {
        errorList: getFormSubmitErrors('DetailsForm')(state),
        formStore: state.form
    };
};

export default connect(mapStateToProps, actions)(formWrapped);