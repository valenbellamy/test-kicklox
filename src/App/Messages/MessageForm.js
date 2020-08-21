import React, { useState, useEffect, useRef } from "react";
import Button from "../../ui/Button";
import PropTypes from "prop-types";

const defaultState = { content: "", visibility: "" };

const MessageForm = ({ onSubmit, nbOfMessages, onClose }) => {
  const [values, setValues] = useState(defaultState);
  const [errors, setErrors] = useState(defaultState);
  const contentInput = useRef(null);

  useEffect(() => {
    contentInput.current.focus(); // Lorsque le composant est monté on focus le textarea pour pouvoir écrire directement
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const submit = () => {
    const isValid = validateForm();
    if (isValid) {
      const newMessage = {
        content: values.content,
        visibility: values.visibility,
        id: nbOfMessages + 1, // ajout d'un id
      };
      onSubmit(newMessage);
      setValues(defaultState);
      setErrors(defaultState);
      onClose(); // fermeture de la modal
    } else {
      return;
    }
  };

  const validateForm = () => {
    let content = "";
    let visibility = "";
    if (!values.content) {
      content = "Votre message est vide";
    }
    if (!values.visibility) {
      visibility = "Ce champ est requis";
    }
    if (content !== "" || visibility !== "") {
      setErrors({ content, visibility });
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="content">Votre message</label>
        <textarea
          className={`form-control ${errors.content ? "is-invalid" : ""}`}
          id="content"
          name="content"
          value={values.content}
          onChange={handleChange}
          ref={contentInput}
        />
        {errors.content && (
          <div className="invalid-feedback">{errors.content}</div>
        )}
      </div>
      <div className="form-check">
        <input
          className={`form-check-input ${
            errors.visibility ? "is-invalid" : ""
          }`}
          type="radio"
          value="public"
          name="visibility"
          checked={values.visibility === "public"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="public">
          Ce message est public
        </label>
      </div>
      <div className="form-check">
        <input
          className={`form-check-input ${
            errors.visibility ? "is-invalid" : ""
          }`}
          type="radio"
          value="private"
          name="visibility"
          checked={values.visibility === "private"}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="private">
          Ce message est privé
        </label>
      </div>
      {errors.visibility && (
        <small className="text-danger">{errors.visibility}</small>
      )}
      <div className="mt-3">
        <Button type="submit">Valider</Button>
      </div>
    </form>
  );
};

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  nbOfMessages: PropTypes.number.isRequired,
  onClose: PropTypes.func,
};

export default MessageForm;
