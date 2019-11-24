import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  // 2 input values: a JSX & the id of a child of #root in index.html
  // (e) => e.stopPropagation() - hinders an event to bubble up to the parent div
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
