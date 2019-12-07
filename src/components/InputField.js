import React from "react";

class InputField extends React.Component{
    renderInput = ({ input, type, data, meta: {error, touched} }) => {
        switch (type) {
            case "text":
                return (
                    <div>
                        <input
                            type={type}
                            className="shadow-sm form-control"
                            {...input}
                        />
                        <div className="text-danger">{touched && error}</div>
                    </div>
                );
            case "select":
                return (
                    <div>
                        <select type={type} className="shadow-sm form-control" {...input}>
                            <option value="">Choose here</option>
                            {data.map(option => {
                                return (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                );
                            })}
                        </select>
                        <div className="text-danger">{touched && error}</div>
                    </div>
                );
            case "textarea":
                return (
                    <div>
                        <textarea className="shadow-sm form-control" {...input}
                            className="shadow-sm form-control"
                            cols="30"
                            rows="3"
                        ></textarea>
                        <div className="text-danger">{touched && error}</div>
                    </div>
                );
            default:
                return (
                    <div>
                        <input
                            type={type}
                            className="shadow-sm form-control"
                            {...input}
                        />
                        <div className="text-danger">{touched && error}</div>
                    </div>
                );
        }
    };

    render(){
        return(
            <div>
                {this.renderInput(this.props)}
            </div>
        );
    }
}

export default InputField;