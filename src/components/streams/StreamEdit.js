import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreamById, editStream } from '../../actions';
import StreamForm from './StreamForm';

// Props here includes details about the url
// because this component is being rendered by the Route component
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStreamById(this.props.currentStreamId);
  }

  // coming from ReduxForm
  onSubmit = (formValues) => {
    this.props.editStream(this.props.currentStreamId, formValues)
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        {/* initialValues' properties (should be) equal to the <Field name={}/> properties in StreamForm component
            thus we have to pick the properties from Stream object, in order to avoid other properties to be changed  */}
        <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// ownProps are the same data as props in the function component
const mapStateToProps = (state, ownProps) => {
  const currentStreamId = ownProps.match.params.id;
  // retrieve the stream object we need, by key
  return {
    stream: state.streams[currentStreamId],
    currentStreamId
  }
};

export default connect(mapStateToProps, { fetchStreamById, editStream })(StreamEdit);
