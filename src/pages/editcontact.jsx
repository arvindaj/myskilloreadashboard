import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SuperAdminSidebar from '../component/dashboardsidebar';
import Avaterimg from '../assets/img/avatar image.png';
import '../assets/css/superadmin/dasboard.css';

const EditContact = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelImage = () => {
    setImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, author, date, content, image });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SuperAdminSidebar />
        <div className="superadmin-content col-md-9">
          <div className="top-dashboards d-flex justify-content-between align-items-center p-3">
            <div className="left-section d-flex align-items-center">
              <h3>Edit Contact</h3>
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

          <form onSubmit={handleSubmit} className="border p-4 col-lg-8 border-0" style={{ borderStyle: 'dashed' }}>
            <h5 style={{ color: '#292D32' }}>Edit Details</h5>
            <div className="mb-3">
              {/* blog img  */}
              <label className="form-label" style={{ color: '#070759' }}>Upload Blog Image</label>
              <div className="input-group">
                <input type="file" className="form-control" onChange={handleImageChange} />
              </div>
              {image && (
                <div className="mb-3 mt-3 text-center position-relative">
                  <img
                    src={image}
                    alt="Uploaded Blog Image"
                    className="img-fluid"
                    style={{ maxWidth: '500px', marginBottom: '10px' }}
                  />
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={handleCancelImage}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      padding: '5px 10px',
                      fontSize: '14px',
                      lineHeight: '1.5',
                    }}
                    aria-label="Cancel uploaded image"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label blogtitel" style={{ color: '#070759' }}>Title *</label>
              <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: '#070759' }}>Author *</label>
              <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: '#070759' }}>Date *</label>
              <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: '#070759' }}>Content</label>
              <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} rows="5"></textarea>
            </div>

  
            <button type="submit" className="btn me-2 text-white" style={{ backgroundColor: '#170645' }}>Submit</button>
            <button
              type="button"
              className="btn"
              onClick={() => { setTitle(''); setAuthor(''); setDate(''); setContent(''); setImage(null); }}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;