import React from "react";
import Message from "./Message";
import PropTypes from "prop-types";

const Messages = ({ messages }) => {
  if (messages === null) {
    return <div>Chargement</div>;
  }
  return (
    <>
      <h1 className="text-alpha mb-5">Liste des messages</h1>
      <div className="row">
        {messages.map((message) => (
          <div className="col-md-4 mb-4" key={message.id}>
            <Message message={message} />
          </div>
        ))}
      </div>
    </>
  );
};

Messages.propTypes = {
  messages: PropTypes.array,
};

export default Messages;
