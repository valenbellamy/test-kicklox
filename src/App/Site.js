import React, { useEffect } from "react";
import Navbar from "../ui/Navbar";
import Messages from "./Messages/Messages";
import MessageForm from "./Messages/MessageForm";
import Modal from "../ui/Modal";
import useToggleModal from "../hooks/useToggleModal";
import useMessages from "../hooks/useMessages";

const Site = () => {
  const { isVisible, toggle } = useToggleModal(false);

  const { messages, fetchMessages, createMessage } = useMessages();

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return (
    <>
      <Navbar onButtonClick={toggle} />
      <main className="py-5">
        <div className="container">
          <Messages messages={messages} />
          {isVisible && (
            <Modal onClose={toggle} title="Ecrivez votre message">
              <MessageForm
                onSubmit={createMessage}
                nbOfMessages={messages.length}
                onClose={toggle}
              />
            </Modal>
          )}
        </div>
      </main>
    </>
  );
};

export default Site;
