import React, { Component } from 'react';
// Field - a react component
// reduxForm - a function, with the same functionality as connect()()
import { Field, reduxForm } from 'redux-form';

// Refactored to class based
// in order to have a bunch of helper methods
// that we can utilize
class StreamCreate extends Component {
  // formProps input is passed by redux-form
  // it has a bunch of useful functions/event handlers
  // label is coming from the <Field/> component's label property
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
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
  onSubmit(formProps) {
    console.log(formProps);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// This way, StreamCreate component will be passed several props,
// that it can utilize, for the form functionality
// all of them can be called with this.props syntax
export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
