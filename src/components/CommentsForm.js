import React from "react";
import validateMobile from "../utils/validateMobile";
import { Field, reduxForm, getFormSubmitErrors } from "redux-form";
import { connect } from "react-redux";
import InputField from "./InputField";
import NextButton from "./NextButton";
import * as actions from "../actions";

const genderData = ["Male", "Female"];

class CommentsForm extends React.Component {
    onSubmit = (formValues) => {
        this.props.storeFormData(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="row mb-3">
                    <div className="col-4">
                        <label className="font-weight-bold" htmlFor="mobile_no">
                            Telephone number
                        </label>
                        <Field
                            name="mobile_no"
                            type="text"
                            label="mobile_no"
                            component={InputField}
                        />
                    </div>
                    <div className="col-4">
                        <label className="font-weight-bold" htmlFor="gender">
                            Gender
                        </label>
                        <Field
                            name="gender"
                            type="select"
                            label="gender"
                            data={genderData}
                            component={InputField}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label
                            className="font-weight-bold"
                            htmlFor="date_of_birth"
                        >
                            Date of birth
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Field
                            name="date"
                            type="date"
                            label="date"
                            component={InputField}
                        />
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-4">
                        <div>
                            <NextButton errors={this.props.formStore.CommentsForm} eventKey={"2"}>Next ></NextButton>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

const validate = (values) => {
    const errors = {};
    // Second page validation
    if (validateMobile(values.mobile_no || "") !== null) {
        errors.mobile_no = validateMobile(values.mobile_no || "");
    }
    if (!values.gender) {
      errors.gender = "You must select a gender";
    }
    if (!values.date) {
      errors.date = "Date required";
    }
    if (!values.mobile_no) {
        errors.mobile_no = "You must enter a mobile number";
    }
    return errors;
};

const formWrapped = reduxForm({
    form: "CommentsForm",
    validate
})(CommentsForm);

const mapStateToProps = (state) => {
    return {
        errorList: getFormSubmitErrors('CommentsForm')(state),
        formStore: state.form
    };
};

export default connect(mapStateToProps, actions)(formWrapped);