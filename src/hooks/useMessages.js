import { useReducer, useCallback } from "react";
import messagesData from "../data/data";

function reducer(state, action) {
  switch (action.type) {
    case "SET_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };
    default:
      throw new Error("Action inconnue " + action.type);
  }
}

const useMessages = () => {
  const [state, dispatch] = useReducer(reducer, {
    messages: null,
  });

  const fetchMessages = useCallback(() => {
    if (state.messages !== null) {
      // on évite de recharcher les messages
      return;
    }
    const messages = messagesData; // avec une API on aurait fait l'appel pour charger les messages à cet endroit
    dispatch({ type: "SET_MESSAGES", payload: messages });
  }, [state]);

  const createMessage = useCallback((message) => {
    // avec une API on aurait fait l'appel pour ajouter le message à cet endroit
    dispatch({ type: "ADD_MESSAGE", payload: message });
  }, []);

  return {
    messages: state.messages,
    fetchMessages,
    createMessage,
  };
};

export default useMessages;
