import React, { Component } from 'react';
// Field - a react component
// reduxForm - a function, with the same functionality as connect()()
import { Field, reduxForm } from 'redux-form';

// Refactored to class based
// in order to have a bunch of helper methods
// that we can utilize
class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  // formProps input is passed by redux-form
  // it has a bunch of useful functions/event handlers
  // label is coming from the <Field/> component's label property
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );

    /* not destructured way with some formProps example
    (
      <input
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    ) 
    */
  }

  // with the help of this.props.handleSubmit()
  // we are now able to access all the form data
  //
  // we are expecting the parent component to pass down a callback called onSubmit()
  // and that is going to be called with whatever values are coming out of our form
  onSubmit = (formProps) => {
    this.props.onSubmit(formProps);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// again => formValues, passed in by redux-form
// to have access to all form elements and input values
const validate = (formValues) => {
  // if errors obj receives a property
  // redux form realises there is a validation error
  // and returns that object
  //
  // the property name must be identical to any of the field names
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
}

// This way, the component will be passed several props,
// that it can utilize, for the form functionality
// all of them can be called with this.props syntax
//
// validate prop equals to the validate function we have created
export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
