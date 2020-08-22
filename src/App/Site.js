import React, { useEffect } from "react";
import Navbar from "./Layout/Navbar";
import Messages from "./Messages/Messages";
import MessageForm from "./Messages/MessageForm";
import Modal from "../ui/Modal";
import useToggle from "../hooks/useToggle";
import useMessages from "../hooks/useMessages";

const Site = () => {
  const [modalVisible, toggleModal] = useToggle(false);

  const { messages, fetchMessages, createMessage } = useMessages();

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return (
    <>
      <Navbar onButtonClick={toggleModal} />
      <main className="py-5">
        <div className="container">
          <h1 className="text-alpha mb-5">Liste des messages</h1>
          <Messages messages={messages} />
          {modalVisible && (
            <Modal onClose={toggleModal} title="Ecrivez votre message">
              <MessageForm
                onSubmit={createMessage}
                nbOfMessages={messages.length}
                onClose={toggleModal}
              />
            </Modal>
          )}
        </div>
      </main>
    </>
  );
};

export default Site;
