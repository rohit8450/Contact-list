import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "react-bootstrap/Card";

const Home = () => {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-end">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
        <div className="col-md-10 mx-auto cardContainer">
          {contacts.map((contact, id) => (
            <Card className="card-details" key={id} border="info" style={{ width: "20rem" }}>
              <Card.Header id="card-title">{contact.name}</Card.Header>
              <Card.Body>
                <Card.Title >
                    Id: {" "}
                    {id+1}
                    </Card.Title>
                <Card.Text>
                  <span id="label">Email: </span>
                  <span>{contact.email}</span>
                </Card.Text>

                <Card.Text>
                  <span id="label">Contact: </span>
                  <span>{contact.number}</span>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary me-2'>Edit</Link>
                                            <button type='button' onClick={() => deleteContact(contact.id)} className='btn btn-small btn-danger'>Delete</button>
        </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
