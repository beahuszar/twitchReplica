import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreamById } from '../../actions';

// Props here includes details about the url
// because this component is being rendered by the Route component
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStreamById(this.props.currentStreamId);
  }

  render() {
    console.log(this.props);
    return <div>StreamEdit</div>;
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

export default connect(mapStateToProps, { fetchStreamById })(StreamEdit);
