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

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
      </form>
    );
  }
}

// This way, StreamCreate component will be passed several props,
// that it can utilize, for the form functionality
export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
