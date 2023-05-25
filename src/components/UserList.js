import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const App = () => {
  const [isShow, setShow] = useState(false);

  const handleModalOpen = () => {
    setShow(true);
  };

  const handleModalClose = () => {
    setShow(false);
  };

  return (
    <>
      <button type="button" className="btn btn-light UserBtn" onClick={handleModalOpen}>
        Users
      </button>
      <button type="button" className="btn btn-light UserBtn" onClick={handleModalOpen}>
        Add User
      </button>

      <Modal show={isShow} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleModalClose}>
            Store
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default App;
