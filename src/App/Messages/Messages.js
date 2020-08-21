import React from "react";
import Message from "./Message";
import PropTypes from "prop-types";
import Loader from "../../ui/Loader";

const Messages = ({ messages }) => {
  return (
    <>
      {messages === null ? (
        <Loader />
      ) : (
        <div className="row">
          {messages.map((message) => (
            <div className="col-md-4 mb-4" key={message.id}>
              <Message message={message} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

Messages.propTypes = {
  messages: PropTypes.array,
};

export default Messages;
