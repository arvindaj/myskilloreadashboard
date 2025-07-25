import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import SuperAdminSidebar from "../component/dashboardsidebar";
import { Table, Card, Row, Col, Button, Modal, Form, Pagination, Nav } from "react-bootstrap";
import '../assets/css/superadmin/dasboard.css';
import Avaterimg from '../assets/img/avatar image.png';
import Blogimgview from '../assets/img/bogimg.png';


const Adminblog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
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
      title: "Marketing",
      date: "17, Feb 2024",
      author: "John Doe",
      content: "Lorem ipsum dolor sit amet...",
    },
    {
      id: 3,
      image: '/assets/images/superadmin/Contact.png',
      title: "Technology",
      date: "18, Feb 2024",
      author: "Jane Smith",
      content: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      id: 4,
      image: '/assets/images/superadmin/Contact.png',
      title: "Health",
      date: "19, Feb 2024",
      author: "Mike Johnson",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing...",
    },
    {
      id: 5,
      image: '/assets/images/superadmin/Contact.png',
      title: "Education",
      date: "20, Feb 2024",
      author: "Sarah Wilson",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    },
  ]);

  // Define alternating row colors
  const getRowBackgroundColor = (index) => {
    return index % 2 === 0 ? '#ffffff' : '#EEEEEE';
  };

  const handleViewContent = (item) => {
    setSelectedContent(item);
    setShowViewModal(true);
  };

  const handleEditClick = (item) => {
    navigate('/editblog'); // Navigate to EditBlog page
  };
  const handleDelete = () => {
    setUsers(users.filter(user => user.id !== selectedContent.id));
    setShowDeleteModal(false);
  }

  return (
    <div>
      <SuperAdminSidebar />

      <div className="superadmin-content col-md-9 col-lg-10 border-0" style={{ backgroundColor: "#fff" }}>
        {/* Top Dashboard */}
        <div className="top-dashboard d-flex justify-content-between align-items-center p-3">
          <div className="left-section d-flex align-items-center">
            <h3>OverView</h3>
            <div className="search-wrapper position-relative ms-3" style={{ width: "300px" }}>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control ps-5"
                style={{ width: "100%", borderRadius: "8px", border: "1px solid #ced4da" }}
              />
              <span
                className="position-absolute"
                style={{
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#6c757d",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="profile-section d-flex align-items-center">
            <img
              src={Avaterimg}
              alt="Kamisato Aya"
              style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "10px" }}
            />
            <div className="text-section d-flex flex-column">
              <span className="fs-4">Kamisato Aya</span>
              <h5 className="" style={{ color: '#C2C5D0', fontSize: '16px' }}>Manager</h5>
            </div>
          </div>
        </div>

        <Card className="mt-4 shadow-sm">
          <Card.Header className="border-0">
            <Row>
              <h3>Blog list</h3>
              <Col className="text-end mb-3">
                <select
                  className="form-select form-select-sm"
                  style={{
                    width: "auto",
                    display: "inline-block",
                    marginRight: "0px",
                    color: '#070759',
                    backgroundColor: '#EEEEEE',
                  }}
                >
                  <option>Monthly</option>
                  <option>Weekly</option>
                </select>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col>
                <h5>Blog Management</h5>
              </Col>

              <Col className="d-flex align-items-center justify-content-end gap-3 mt-4 me-0">
                <div className="position-relative" style={{ width: '300px' }}>
                  <span
                    className="position-absolute"
                    style={{
                      left: '15px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#EEEEEE',
                    }}
                  >
                    <i className="bi bi-search" style={{ fontSize: '16px' }}></i>
                  </span>

                  <input
                    type="text"
                    placeholder="Search by Name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-control ps-5"
                    style={{
                      borderRadius: '50px',
                      backgroundColor: '#f1f1f1',
                      border: 'none',
                      height: '45px',
                    }}
                  />
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: '45px',
                      height: '45px',
                      backgroundColor: '#EEEEEE',
                    }}
                  >
                    <i className="bi bi-ui-checks" style={{ fontSize: '18px' }}></i>
                  </div>

                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: '45px',
                      height: '45px',
                      backgroundColor: '#EEEEEE',
                    }}
                  >
                    <i className="bi bi-filter" style={{ fontSize: '28px' }}></i>
                  </div>
                  {/* Add Button */}
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                      backgroundColor: "#070759",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/addblog")}
                  >
                    <i className="bi bi-plus-lg" style={{ fontSize: "20px" }}></i>
                  </div>

                </div>
              </Col>
            </Row>
          </Card.Header>

          <Card.Body className="border-0" style={{ backgroundColor: '#f8f9fa' }}>
            <Table responsive hover className="table-modern border-0 borderless-table">
              <thead style={{ backgroundColor: '#f8f9fa' }}>
                <tr>
                  <th style={{ color: '#070759' }}>S.No</th>
                  <th style={{ color: '#070759' }}>Image</th>
                  <th style={{ color: '#070759' }}>Title</th>
                  <th style={{ color: '#070759' }}>Date</th>
                  <th style={{ color: '#070759' }}>Author</th>
                  <th style={{ color: '#070759' }}>Content</th>
                  <th style={{ width: "120px", color: '#070759' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => {
                  const rowBgColor = getRowBackgroundColor(index);
                  return (
                    <tr key={item.id}>
                      <td style={{ backgroundColor: rowBgColor }}>
                        <input type="checkbox" className="mx-2" />
                        {item.id}
                      </td>
                      <td style={{ backgroundColor: rowBgColor }}>
                        <img
                          src={item.image}
                          alt="Content"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "5px",
                            objectFit: "cover"
                          }}
                        />
                      </td>
                      <td style={{ backgroundColor: rowBgColor }}>{item.title}</td>
                      <td style={{ backgroundColor: rowBgColor }}>{item.date}</td>
                      <td style={{ backgroundColor: rowBgColor }}>{item.author}</td>
                      <td
                        className="text-truncate"
                        style={{
                          maxWidth: "200px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          backgroundColor: rowBgColor
                        }}
                      >
                        {item.content}
                      </td>

                      {/* view, edit, delete  */}
                      <td
                        className="d-flex gap-2 align-items-center justify-content-center"
                        style={{ backgroundColor: rowBgColor }}
                      >

                        {/* viewblogbutton */}
                        <Button
                          size="sm"
                          className="rounded-circle"
                          style={{ width: '30px', height: '30px', backgroundColor: '#0253F269', border: 'none' }}
                          onClick={() => handleViewContent(item)}
                        >
                          <FontAwesomeIcon icon={faEye} style={{ color: 'black' }} />
                        </Button>
                        <Button
                          size="sm"
                          className="rounded-circle"
                          style={{ width: '30px', height: '30px', backgroundColor: '#F4A10069', border: 'none' }}
                          onClick={() => handleEditClick(item)}
                        >
                          <FontAwesomeIcon icon={faEdit} style={{ color: 'black' }} />
                        </Button>
                        <Button size="sm" className="rounded-circle" style={{ backgroundColor: '#EE7C7C', border: 'none', width: 30, height: 30 }}
                          onClick={() => {
                            setSelectedContent(item);
                            setShowDeleteModal(true);
                          }}>
                          <FontAwesomeIcon icon={faTrash} style={{ color: 'black' }} />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>

          <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between" style={{ backgroundColor: '#F9F9F9' }}>
            <small className="fw-bold" style={{color:'#070759'}}>
              Showing 1 to 10 of 7000 entries
            </small>
            <Nav>
              <Pagination className="mb-2 mb-lg-0 custom-pagination text-black">
                <Pagination.First>
                  <span className="pagination-arrow">«</span>
                </Pagination.First>
                <Pagination.Prev>
                  <span className="pagination-arrow">‹</span>
                </Pagination.Prev>
                <Pagination.Item active>
                  <span className="text-white">1</span>
                </Pagination.Item>
                <Pagination.Item>
                  <span className="text-black">2</span>
                </Pagination.Item>
                <Pagination.Item>
                  <span className="text-black">3</span>
                </Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Next>
                  <span className="pagination-arrow">›</span>
                </Pagination.Next>
                <Pagination.Last>
                  <span className="pagination-arrow">»</span>
                </Pagination.Last>
              </Pagination>
            </Nav>
          </Card.Footer>
        </Card>
      </div>


      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered backdrop="static">
        <Modal.Body className="text-center p-4">

          <p style={{ fontWeight: 600, fontSize: '16px' }}>
            Are you sure want to delete<br />
            this User Contact details details?
          </p>
          <p style={{ fontStyle: 'italic', fontWeight: '600', fontSize: '18px' }}>
            “{selectedContent?.author}”
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button
              onClick={handleDelete}
              style={{ backgroundColor: '#1C0F4D', border: 'none', padding: '6px 24px', borderRadius: '8px' }}
            >
              Yes
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => setShowDeleteModal(false)}
              style={{ border: '1px solid #1C0F4D', padding: '6px 24px', borderRadius: '8px' }}
            >
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showViewModal}
        onHide={() => setShowViewModal(false)}
        centered
        backdrop="static"
      >
        <Modal.Body className="text-center p-4">
          {/* Modal Header */}
          <h5 className="fw-bold mb-4" style={{ color: '#070759' }}>User Blog Information</h5>

          {/* Blog Details */}
          <div className="text-start px-2" style={{ fontSize: '14px' }}>
            {/* Image */}
            <Row className="mb-3 text-center">
              <Col>
                <img
                  src={Blogimgview}
                  alt="Blog"
                  className=""
                  style={{ width: '280px', height: '160px', objectFit: 'cover' }}
                />
              </Col>
            </Row>

            {/* Title */}
            <Row className="mb-2">
              <Col xs={5} className="fw-semibold mb-3" style={{ color: '#070759' }}>Title</Col>
              <Col >
                {selectedContent?.title || '-'}
              </Col>
            </Row>

            {/* Author */}
            <Row className="mb-2">
              <Col xs={5} className="fw-semibold mb-3 " style={{ color: '#070759' }}>Author</Col>
              <Col >
                {selectedContent?.author || '-'}
              </Col>
            </Row>

            {/* Date */}
            <Row className="mb-2">
              <Col xs={5} className="fw-semibold mb-3" style={{ color: '#070759' }}>Date</Col>
              <Col >
                {selectedContent?.date || '-'}
              </Col>
            </Row>

            {/* Short Content */}
            <Row className="mb-2">
              <Col xs={5} className="fw-semibold mb-3" style={{ color: '#070759' }}>Content</Col>
              <Col >
                {selectedContent?.content?.substring(0, 60) || '-'}
              </Col>
            </Row>

            {/* Full Content */}
            <Row className="mb-2">
              <Col xs={5} className="fw-semibold mb-3" style={{ color: '#070759' }}>Full Content</Col>
              <Col style={{ whiteSpace: 'pre-line' }}>
                {selectedContent?.content || 'No content available.'}
              </Col>
            </Row>
          </div>

          {/* Close Button */}
          <Button
            onClick={() => setShowViewModal(false)}
            style={{
              backgroundColor: '#1C0F4D',
              border: 'none',
              padding: '6px 24px',
              borderRadius: '8px',
              marginTop: '25px'
            }}
          >
            Close
          </Button>
        </Modal.Body>
      </Modal>





    </div>
  );
}

export default Adminblog;