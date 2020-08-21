import React, { memo } from "react";
import PropTypes from "prop-types";

const Message = memo(function ({ message }) {
  return (
    <div className="card" data-testid="card">
      <div className="card-body">
        <p className="card-text">{message.content}</p>
        <p className="card-text">
          {message.visibility === "public" ? (
            <small className="text-success">Ce message est public</small>
          ) : (
            <small className="text-danger">Ce message est privé</small>
          )}
        </p>
      </div>
    </div>
  );
});

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
