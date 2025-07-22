import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import SuperAdminSidebar from "../component/dashboardsidebar";
import { Table, Card, Row, Col, Button, Modal, Form, Pagination, Nav } from "react-bootstrap";

const Adminblog = () => {
  const [users, setUsers, userId] = useState([
    {
      id: 1,
      image: '/assets/images/superadmin/Contact.png',
      title: "Admin blog Dashboard",
      shortTitle: "blog Admin",
      description: "This blog post from User Interviews knocks two things out of the park. One, the headline sets clear expectations for readers but also sparks curiosity by going against the usual “How to Conduct a Phenomenal Focus Group” approach.Two, the opening line works because it goes against the grain also. It reels readers in by making a controversial statement while also touching on pain points readers want to avoid. ",
    },
    {
      id: 2,
      image: '/assets/images/superadmin/Contact.png',
      title: "Editor blog Tools",
      shortTitle: "blog Editor",
      description: "We like this post from Hopin for a few reasons. The headline shows a bit of personality without comprising clarity. The intro gets readers engaged by putting them in an imaginary scenario that drives home the importance of the topic. Plus, Hopin makes great use of white space, headings, and lists to make the post easy to skim. ",
    },
    {
      id: 3,
      image: '/assets/images/superadmin/Game development.png',
      title: "User blog Reports",
      shortTitle: " blog Reports",
      description: "View reports and analytics of user activity and trends.",
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
    shortTitle: "",
    description: "",
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
    setNewContent({ image: "", title: "", shortTitle: "", description: "" });
  };

  const handleViewContent = (content) => {
    setSelectedContent(content);
    setShowViewModal(true);
  };

  const handleEditClick = (content) => {
    setEditContent(content);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    setEditContent({ ...editContent, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setUsers(users.map((user) => (user.id === editContent.id ? editContent : user)));
    setShowEditModal(false);
  };
  const handleDelete = () => {
    setUsers(users.filter((user) => user.id !== userId));
    setShowDeleteModal(false);
  };

  const visitsData = [
    { page: "/dashboard", visits: 1200, unique: 800 },
    { page: "/settings", visits: 900, unique: 600 },
    { page: "/reports", visits: 1100, unique: 750 },
  ];

  const totalTransactions = visitsData.length;

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  }

  return (
    <div>
      <SuperAdminSidebar />

      <div className="superadmin-content col-md-9 col-lg-10">
        {/* <h3>Welcome to Blog Dashboard</h3> */}

        <Card className="mt-4 shadow-sm">
          <Card.Header>
            <Row className="align-items-center">
              <Col>
                <h5>Blog Management</h5>
              </Col>
              <Col className="text-end">
                <Button className="btn-gradient-1" size="sm" onClick={() => setShowModal(true)}>
                  Add New Content
                </Button>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Table responsive bordered hover>
              <thead className="thead-light">
                <tr>
                  <th>S/no</th>
                  <th style={{ width: "100px" }}>Image</th>
                  <th>Title</th>
                  <th>Shortening Title</th>
                  <th style={{ width: "350px" }}>Description</th>
                  <th style={{ width: "50px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <img src={item.image} alt="Content" style={{ width: "100px", height: "40px", borderRadius: "5px" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.shortTitle}</td>
                    <td className="text-truncate" style={{ maxWidth: "450px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {item.description}
                    </td>
                    <td className="d-flex gap-2">
                      <Button variant="info" size="sm" onClick={() => handleViewContent(item)}>
                        <FontAwesomeIcon icon={faEye} style={{ color: "white" }} />
                      </Button>

                      <Button variant="warning" size="sm" onClick={() => handleEditClick(item)}>
                        <FontAwesomeIcon icon={faEdit} style={{ color: "white" }} />
                      </Button>

                      <Button variant="danger" size="sm" onClick={() => setShowDeleteModal(true)}>
                        <FontAwesomeIcon icon={faTrash} style={{ color: "white" }} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {/* Page Visits Table */}
          </Card.Body>
          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
            <small className="fw-bold">
              Showing <b>{totalTransactions}</b> out of <b>25</b> entries
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
                <Form.Control type="text" name="title" value={newContent.title} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Shortening Title</Form.Label>
                <Form.Control type="text" name="shortTitle" value={newContent.shortTitle} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" value={newContent.description} onChange={handleChange} required />
              </Form.Group>
              <Button className="btn-gradient-1" size="sm" type="submit">
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal show={showViewModal} onHide={() => setShowViewModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>View Full Content</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedContent && (
              <div>
                <img src={selectedContent.image} alt="Content" className="mb-3" style={{ width: "100%", borderRadius: "5px" }} />
                <h5>{selectedContent.title}</h5>
                <h6 className="text-muted">{selectedContent.shortTitle}</h6>
                <p>{selectedContent.description}</p>
              </div>
            )}
          </Modal.Body>
        </Modal>

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
                    style={{ width: "100%", maxHeight: "200px", objectFit: "cover", borderRadius: "5px" }}
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
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  )
}

export default Adminblog
