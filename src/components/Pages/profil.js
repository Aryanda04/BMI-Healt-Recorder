// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NotificationAlert from "react-notification-alert";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { ref, set, get, child } from "firebase/database";
import { db, auth } from "../../firebase";

function User() {
  const [showModal, setShowModal] = React.useState(false);
  const [dataProfil, setDataProfil] = useState([]);
  let [fetchStatus, setFetchStatus] = useState(true);
  const notificationAlertRef = React.useRef(null);

  const [input, setInput] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    profile_picture: "",
  });

  useEffect(() => {
    const dbRef = ref(db);
    const fetchData = async () => {
      get(child(dbRef, `puskesmas/users/${auth.currentUser.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            let result = data["profil"];
            setDataProfil(result);

            // console.log(result);
            setInput({
              name: result.name,
              address: result.address,
              email: result.email,
              phone: result.phone,
              profile_picture: result.profile_picture,
              posCode: result.posCode,
              city: result.city,
              country: result.country,
            });
          }
          return () => {
            setInput({
              name: "",
              address: "",
              email: "",
              phone: "",
              profile_picture: "",
              country: "",
              city: "",
              posCode: "",
            });
          };
        })
        .catch((error) => {
          console.error(error);
        });
    };
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  // console.log(dataProfil.address);
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setInput({ ...input, [name]: value });
  };
  const notify = () => {
    var options = {};
    options = {
      place: "tc",
      message: (
        <div>
          <div>BERHASIL MENGUPDATE PROFIL</div>
        </div>
      ),
      type: "success",
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  const writeUserData = () => {
    // e.preventDefault();
    let {
      name,
      email,
      phone,
      address,
      profile_picture,
      city,
      country,
      posCode,
    } = input;
    set(ref(db, `puskesmas/users/${auth.currentUser.uid}/profil/`), {
      name: name,
      email: email,
      phone: phone,
      address: address,
      profile_picture: profile_picture,
      city: city,
      country: country,
      posCode: posCode,
    });
    setShowModal(false);
    notify();
    setFetchStatus(true);
  };

  return (
    <>
      <Container fluid>
        <div className="rna-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col>
            <Card>
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    dataProfil.profile_picture === undefined
                      ? "assets/img/photo-1431578500526-4d9613015464.jpeg"
                      : dataProfil.profile_picture
                  }
                ></img>
              </div>
              <Card.Header>
                <Card.Title as="h4">
                  {dataProfil.name === undefined
                    ? "Edit Profile"
                    : dataProfil.name}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue={dataProfil.address}
                          placeholder="Address"
                          type="text"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          defaultValue={dataProfil.city}
                          placeholder="City"
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue={dataProfil.country}
                          placeholder="Country"
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          defaultValue={dataProfil.posCode}
                          placeholder="POS Code"
                          type="number"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Phone Number</label>
                        <Form.Control
                          defaultValue={dataProfil.phone}
                          placeholder="+62"
                          type="text"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Email Address</label>
                        <Form.Control
                          defaultValue={dataProfil.email}
                          placeholder="@mail.com"
                          type="text"
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    variant="info"
                    onClick={() => setShowModal(true)}
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* MODAL */}
        <Modal
          className="modal-large modal-primary"
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <Modal.Body>
            <Card.Title as="h4" className="text-center">
              Edit Profile
            </Card.Title>
            <Card.Body>
              <Form>
                <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>Nama Puskesmas</label>
                      <Form.Control
                        value={input.name}
                        name="name"
                        onChange={handleChange}
                        placeholder="Nama Puskesmas"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>Address</label>
                      <Form.Control
                        value={input.address}
                        name="address"
                        onChange={handleChange}
                        placeholder="Address"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>City</label>
                      <Form.Control
                        value={input.city}
                        name="city"
                        onChange={handleChange}
                        placeholder="City"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="4">
                    <Form.Group>
                      <label>Country</label>
                      <Form.Control
                        value={input.country}
                        name="country"
                        onChange={handleChange}
                        placeholder="Country"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Postal Code</label>
                      <Form.Control
                        value={input.posCode}
                        name="posCode"
                        placeholder="ZIP Code"
                        type="number"
                        onChange={handleChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>Phone Number</label>
                      <Form.Control
                        name="phone"
                        value={input.phone}
                        onChange={handleChange}
                        placeholder="+62"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Email Address</label>
                      <Form.Control
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                        placeholder="@mail.com"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>Image Url</label>
                      <Form.Control
                        value={input.profile_picture}
                        onChange={handleChange}
                        name="profile_picture"
                        placeholder="Link Profile"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Modal.Body>
          <div className="modal-footer">
            <Button
              className="btn-simple"
              type="button"
              variant="link"
              onClick={() => setShowModal(false)}
            >
              Back
            </Button>
            <Button
              className="btn-fill pull-right"
              variant="info"
              type="button"
              onClick={writeUserData}
            >
              Submit
            </Button>
          </div>
        </Modal>
      </Container>
    </>
  );
}

export default User;
