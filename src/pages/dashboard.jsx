import SuperAdminSidebar from "../component/dashboardsidebar";
import { Table, Card, Row, Col, Button, Modal, Form, Pagination, Nav } from "react-bootstrap";
import { useState } from "react";
import '../assets/css/superadmin/dasboard.css';
import Avaterimg from '../assets/img/avatar image.png';

const Superadmin = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [selectedContent, setSelectedContent] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [editContent, setEditContent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

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
      content: "Lorem ipsum dolor sit amet consectetur...",
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
      content: "Lorem ipsum dolor sit amet consectetur adipiscing...",
    },
    {
      id: 4,
      image: '/assets/images/superadmin/Contact.png',
      title: "Health",
      date: "19, Feb 2024",
      author: "Mike Johnson",
      content: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    },
    {
      id: 5,
      image: '/assets/images/superadmin/Contact.png',
      title: "Education",
      date: "20, Feb 2024",
      author: "Sarah Wilson",
      content: "Lorem ipsum dolor sit amet consectetur...",
    },
  ]);

  // Define alternating row colors
  const getRowBackgroundColor = (index) => {
    return index % 2 === 0 ? '#ffffff' : '#EEEEEE';
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

        <Row className="mt-4">
          <Col xs={12} md={4}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body className="dashboardcard">
                <h5>Number Of Blog</h5>
                <h2>{blogTotal}</h2>
                <h3 style={{ color: '#00C95C' }}>
                  ↑ 0.0% <br />
                  <small style={{ color: '#000000' }}>From last week</small>
                </h3>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body className="dashboardcard">
                <h5>Number Of Event</h5>
                <h2>{eventTotal}</h2>
                <h3 style={{ color: '#00C95C' }}>
                  ↑ 0.0% <br />
                  <small style={{ color: '#000000' }}>From last week</small>
                </h3>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body className="dashboardcard ">
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
            <Card className="mt-4 shadow-sm border-0" style={{ backgroundColor: '#F9F9F9' }}>
              <Card.Header className="bg-light border-0">
                <Row className="align-items-center border-0 ">
                  <Col>
                    <h5 className="blogtitel mb-0">User Blog List</h5>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body style={{ backgroundColor: '#f8f9fa' }}>
                <Table responsive hover className="table-modern borderless-table">
                  <thead style={{ backgroundColor: '#f8f9fa' }}>
                    <tr>
                      <th style={{ color: '#070759' }}>S.No</th>
                      <th style={{ color: '#070759' }}>Image</th>
                      <th style={{ color: '#070759' }}>Title</th>
                      <th style={{ color: '#070759' }}>Date</th>
                      <th style={{ color: '#070759' }}>Author</th>
                      <th style={{ color: '#070759' }}>Content</th>
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
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between" style={{ backgroundColor: '#F9F9F9' }}>
                <small className="fw-bold">
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
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Item>3</Pagination.Item>
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
        </div>
      </div>
    </div>
  );
};

export default Superadmin;