import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartPie,
    faSignOutAlt,
    faTimes,
    faBlog,
    faClipboardList,
    faAddressBook,
    faCalendarAlt,
    faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import '../assets/css/superadmin/superadmin.css'
import Skillorea from '../assets/img/skillorealogo.png'
const SuperAdminSidebar = () => {
    const [show, setShow] = useState(false);

    const toggleSidebar = () => setShow(!show);


    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const navigate = useNavigate(); // For redirecting after logout

    const handleLogout = () => {
        localStorage.removeItem("adminToken"); // Clear session storage
        setShowLogoutModal(false);
        navigate("/"); // Redirect to login page
    };



    return (
        <>

            {/* Sidebar */}
            <div className={`sidebar d-md-block bg-primary text-white ${show ? "show" : ""}`}>
                <SimpleBar className="sidebar-inner px-4 pt-3 d-flex flex-column" style={{ height: "100vh" }}>
                    <div>
                        {/* Logo Image at Top */}
                        <div className="text-center p-2  mb-4">
                            <img src={Skillorea} style={{width:'240px', position:'absolute', left:'-20px'}} />
                        </div>

                        {/* User Profile (Mobile View) */}
                        <div className="user-card d-flex d-md-none align-items-center justify-content-between pb-4">
                            <div className="d-flex align-items-center">
                                <div className="user-avatar lg-avatar me-3">
                                    <img src="/assets/img/skillorealogo.png" className="rounded-circle border-white" />
                                </div>
                                <div>
                                    <h6>Hi, Admin</h6>
                                    <Button as={Link} variant="secondary" size="sm" to="/logout" className="text-dark">
                                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                                    </Button>
                                </div>
                            </div>
                            <Nav.Link className="collapse-close d-md-none" onClick={toggleSidebar}>
                                <FontAwesomeIcon icon={faTimes} />
                            </Nav.Link>
                        </div>

                        {/* Sidebar Menu */}
                        <Nav className="flex-column pt-3">
                            <Nav.Item>
                                <Link className="nav-link text-white" to="/Dashboard">
                                    <FontAwesomeIcon icon={faChartPie} className="me-2" /> Dashboard
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link text-white" to="/Adminblog">
                                    <FontAwesomeIcon icon={faBlog} className="me-2" /> Blog
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link text-white" to="/AdminEvent">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> Events
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link text-white" to="/AdminTestimonials">
                                    <FontAwesomeIcon icon={faCommentDots} className="me-2" /> Testimonials
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link text-white" to="/AdmincContactForm">
                                    <FontAwesomeIcon icon={faAddressBook} className="me-2" /> Contact Us
                                </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Button variant="link" className="nav-link text-white" onClick={() => setShowLogoutModal(true)}>
                                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Logout
                                </Button>
                            </Nav.Item>
                            {/* Logout Confirmation Modal */}
                            <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Confirm Logout</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Are you sure you want to log out?
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
                                        Cancel
                                    </Button>
                                    <Button variant="danger" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Nav>
                    </div>

                
                </SimpleBar>
            </div>
        </>
    );
};

export default SuperAdminSidebar;
