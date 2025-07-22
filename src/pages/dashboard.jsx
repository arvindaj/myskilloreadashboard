import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SuperAdminSidebar from "../component/dashboardsidebar";
import { faEye, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Table, Card, Row, Col, Button, Modal, Form, Pagination, Nav } from "react-bootstrap";
import { useState } from "react";
import '../assets/css/superadmin/dasboard.css';
import Avaterimg from '../assets/img/avatar image.png';

const Superadmin = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  // Placeholder totals (replace with dynamic values later)
  const blogTotal = 120; // Example value
  const eventTotal = 45; // Example value
  const testimonialTotal = 85; // Example value

  const [users, setUsers] = useState([
    {
      id: 1,
      image: '/assets/images/superadmin/Contact.png',
      title: "Finance",
      date: "16, Feb 2024",
      author: "Diya Bhat",
      content: "Lorem ipsum...",
    },
    {
      id: 2,
      image: '/assets/images/superadmin/Contact.png',
      title: "Finance",
      date: "16, Feb 2024",
      author: "Diya Bhat",
      content: "Lorem ipsum...",
    },
    {
      id: 3,
      image: '/assets/images/superadmin/Contact.png',
      title: "Finance",
      date: "16, Feb 2024",
      author: "Diya Bhat",
      content: "Lorem ipsum...",
    },
    {
      id: 4,
      image: '/assets/images/superadmin/Contact.png',
      title: "Finance",
      date: "16, Feb 2024",
      author: "Diya Bhat",
      content: "Lorem ipsum...",
    },
    {
      id: 5,
      image: '/assets/images/superadmin/Contact.png',
      title: "Finance",
      date: "16, Feb 2024",
      author: "Diya Bhat",
      content: "Lorem ipsum...",
    },
 
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editContent, setEditContent] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newContent, setNewContent] = useState({
    image: "",
    title: "",
    date: "",
    author: "",
    content: "",
  });

  const handleChange = (e) => {
    setNewContent({ ...newContent, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      setNewContent({ ...newContent, image: fileURL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { ...newContent, id: users.length + 1 }]);
    setShowModal(false);
    setNewContent({ image: "", title: "", date: "", author: "", content: "" });
  };

  const handleViewContent = (content) => {
    setSelectedContent(content);
    setShowViewModal(true);
  };

  const handleEditClick = (content) => {
    setEditContent(content);
    setSelectedImage(content.image); // Set initial image for preview
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    setEditContent({ ...editContent, [e.target.name]: e.target.value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setSelectedImage(fileURL);
      setEditContent({ ...editContent, image: fileURL });
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setUsers(users.map((user) => (user.id === editContent.id ? editContent : user)));
    setShowEditModal(false);
    setSelectedImage(null); // Reset image preview after submission
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setShowDeleteModal(false);
  };

  const visitsData = [
    { page: "/dashboard", visits: 1200, unique: 800 },
    { page: "/settings", visits: 900, unique: 600 },
    { page: "/reports", visits: 1100, unique: 750 },
  ];

  const totalTransactions = visitsData.length;

  return (
    <div className="superadmin-container d-flex">
      <SuperAdminSidebar />

      <div className="superadmin-content col-md-9 col-lg-9">
        {/* Top Dashboard */}
        <div className="top-dashboard d-flex justify-content-between align-items-center p-3">
          <div className="left-section d-flex align-items-center">
            <h3>OverView</h3>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control ms-3"
              style={{ width: "200px" }}
            />
          </div>
          <div className="profile-section d-flex align-items-center">
            <img
              src={Avaterimg}
              alt="Kamisato Aya"
              style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "10px" }}
            />
            <span>Kamisato Aya</span>
          </div>
        </div>

        <Row className="mt-4">
          <Col xs={12} md={4}>
            <Card className="text-center shadow-sm">
              <Card.Body className="dashboardcard">
                <h5>Number Of Blog</h5>
                <h2>{blogTotal}</h2>
                <h3 style={{ color: '#FF4500' }}>
                  ↑ 0.0% <br />
                  <small style={{ color: '#000000' }}>From last week</small>
                </h3>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="text-center shadow-sm">
              <Card.Body className="dashboardcard">
                <h5>Number Of Event</h5>
                <h2>{eventTotal}</h2>
                <h3 style={{ color: '#FF4500' }}>
                  ↑ 0.0% <br />
                  <small style={{ color: '#000000' }}>From last week</small>
                </h3>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="text-center shadow-sm">
              <Card.Body className="dashboardcard">
                <h5>Number Of Contacts</h5>
                <h2>{testimonialTotal}</h2>
                <h3 style={{ color: '#FF4500' }}>
                  ↑ 5.1% <br />
                  <small style={{ color: '#000000' }}>From last week</small>
                </h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Table */}
        <div className="col-md-9 col-lg-12">
          <div className="dashboard-content col-md-12">
            <Card className="mt-4 shadow-sm">
              <Card.Header>
                <Row className="align-items-center">
                  <Col>
                    <h5 className="blogtitel">User Blog List</h5>
                  </Col>
                  <Col className="text-end">
                    <select
                      className="form-select form-select-sm"
                      style={{ width: "auto", display: "inline-block", marginRight: "10px" }}
                    >
                      <option>Monthly</option>
                      <option>Weekly</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Search by Name..."
                      className="form-control form-control-sm"
                      style={{ width: "200px", display: "inline-block" }}
                    />
                    <Button
                      className="btn-gradient-1 ms-2"
                      size="sm"
                      onClick={() => setShowModal(true)}
                    >
                      Add New Content
                    </Button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Table responsive bordered hover>
                  <thead className="thead-light" >
                    <tr>
                      <th style={{ color: '#070759' }}>S.No</th>
                      <th style={{ color: '#070759' }} >Image</th>
                      <th style={{ color: '#070759' }}>Title</th>
                      <th style={{ color: '#070759' }}>Date</th>
                      <th style={{ color: '#070759' }}>Author</th>
                      <th style={{ color: '#070759' }}>Content</th>
                      <th style={{ width: "50px", color: '#070759' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          <img
                            src={item.image}
                            alt="Content"
                            style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.date}</td>
                        <td>{item.author}</td>
                        <td
                          className="text-truncate"
                          style={{
                            maxWidth: "200px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.content}
                        </td>
                        <td className="d-flex gap-2 align-items-center justify-content-center">
                          <Button
                            variant="info"
                            size="sm"
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '40px', height: '40px' }}
                            onClick={() => handleViewContent(item)}
                          >
                            <FontAwesomeIcon icon={faEye} style={{ color: 'white' }} />
                          </Button>
                          <Button
                            variant="warning"
                            size="sm"
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '40px', height: '40px' }}
                            onClick={() => handleEditClick(item)}
                          >
                            <FontAwesomeIcon icon={faEdit} style={{ color: 'white' }} />
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '40px', height: '40px' }}
                            onClick={() => {
                              setShowDeleteModal(true);
                              setSelectedContent(item);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} style={{ color: 'white' }} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                <small className="fw-bold">
                  Showing 1 to 10 of 7000 entries
                </small>
                <Nav>
                  <Pagination className="mb-2 mb-lg-0 custom-pagination">
                    <Pagination.Prev>Previous</Pagination.Prev>
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Item>3</Pagination.Item>
                    <Pagination.Item>4</Pagination.Item>
                    <Pagination.Item>5</Pagination.Item>
                    <Pagination.Next>Next</Pagination.Next>
                  </Pagination>
                </Nav>
              </Card.Footer>
            </Card>

            {/* Add New Content Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>Add New Content</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={newContent.title}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="text"
                      name="date"
                      value={newContent.date}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      type="text"
                      name="author"
                      value={newContent.author}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="content"
                      value={newContent.content}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button className="btn-gradient-1" size="sm" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>

            {/* View Content Modal */}
            <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>View Content</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {selectedContent && (
                  <div>
                    <img
                      src={selectedContent.image}
                      alt="Content"
                      style={{
                        width: "100%",
                        maxHeight: "200px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        marginBottom: "15px",
                      }}
                    />
                    <h5>Title: {selectedContent.title}</h5>
                    <p><strong>Date:</strong> {selectedContent.date}</p>
                    <p><strong>Author:</strong> {selectedContent.author}</p>
                    <p><strong>Content:</strong> {selectedContent.content}</p>
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowViewModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Edit Content Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>Edit Content</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleEditSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </Form.Group>
                  {selectedImage && (
                    <div className="mb-3">
                      <p>Image Preview:</p>
                      <img
                        src={selectedImage}
                        alt="Preview"
                        style={{
                          width: "100%",
                          maxHeight: "200px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                  )}
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={editContent?.title || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="text"
                      name="date"
                      value={editContent?.date || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      type="text"
                      name="author"
                      value={editContent?.author || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="content"
                      value={editContent?.content || ""}
                      onChange={handleEditChange}
                      required
                    />
                  </Form.Group>
                  <Button className="btn-gradient-1" size="sm" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>

            {/* Delete Content Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
              <Modal.Header closeButton>
                <Modal.Title>Confirm Deletion</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete this content?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                  Cancel
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(selectedContent.id)}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Superadmin;