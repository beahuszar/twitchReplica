import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions'
import StreamForm from './StreamForm';

class StreamCreate extends Component {
  // This will be passed down to Redux form
  // not StreamForm directly
  onSubmit = (formProps) => {
    this.props.createStream(formProps);
  }

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
