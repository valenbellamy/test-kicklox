import { useReducer, useCallback } from "react";
import messagesData from "../data/data";

function reducer(state, action) {
  //console.log("MESSAGES REDUCER", action.type, action.payload);
  switch (action.type) {
    case "FETCHING_MESSAGES":
      return {
        ...state,
        loading: true,
      };
    case "SET_MESSAGES":
      return {
        ...state,
        loading: false,
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

export default function useMessages() {
  const [state, dispatch] = useReducer(reducer, {
    messages: null,
    loading: false,
  });

  const fetchMessages = useCallback(() => {
    if (state.loading || state.messages !== null) {
      return;
    }
    dispatch({ type: "FETCHING_MESSAGES" });
    const messages = messagesData;
    dispatch({ type: "SET_MESSAGES", payload: messages });
  }, [state]);

  const createMessage = useCallback((message) => {
    dispatch({ type: "ADD_MESSAGE", payload: message });
  }, []);

  return {
    messages: state.messages,
    fetchMessages,
    createMessage,
  };
}
