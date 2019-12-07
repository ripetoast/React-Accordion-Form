import React from "react";
import { Field, reduxForm, getFormSubmitErrors } from "redux-form";
import { connect } from "react-redux";
import SubmitButton from "./SubmitButton";
import InputField from "./InputField";
import * as actions from "../actions";

class FinalForm extends React.Component {
    onSubmit = (formValues) => {
        this.props.storeFormData(formValues);
        console.log("Form Submitted");
        console.log(this.props.formData);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="col-4">
                    <label className="font-weight-bold" htmlFor="comments">
                        Comments
                    </label>
                    <Field
                        name="comments"
                        type="textarea"
                        label="comments"
                        component={InputField}
                    />
                </div>
                <div className="row justify-content-end">
                    <div className="col-4">
                        <div>
                            <SubmitButton eventKey={"2"}>Submit ></SubmitButton>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

const validate = (values) => {
    const errors = {};

    return errors;
};

const formWrapped = reduxForm({
    form: "FinalForm",
    validate
})(FinalForm);

const mapStateToProps = (state) => {
    return {
        errorList: getFormSubmitErrors('FinalForm')(state),
        formStore: state.form,
        formData: state.currentFormData
    };
};

export default connect(mapStateToProps, actions)(formWrapped);