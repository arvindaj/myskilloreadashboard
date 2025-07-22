import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SuperAdminSidebar from '../component/dashboardsidebar';

const ViewBlogs = () => {
  const [title, setTitle] = useState('Cyber Security');
  const [author, setAuthor] = useState('Hannah');
  const [date, setDate] = useState('18/01/2025');
  const [content, setContent] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  const [fullContent, setFullContent] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, author, date, content });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SuperAdminSidebar />
        <div className="superadmin-content col-md-9">
          <div className="top-dashboards d-flex justify-content-between align-items-center p-3">
            {/* Top dashboard content remains unchanged */}
          </div>

          <div className="p-4 bg-light rounded shadow" style={{ maxWidth: '500px', margin: '20px auto', backgroundColor: '#f8f9fa' }}>
            <h4 style={{ color: '#292D32' }}>Blog Details</h4>
            <div className="text-center mb-3">
              <img src="https://via.placeholder.com/200x150" alt="Blog Image" style={{ maxWidth: '200px' }} />
            </div>
            <div className="mb-2">
              <strong style={{ color: '#1E3A8A' }}>Title</strong>
              <p>{title}</p>
            </div>
            <div className="mb-2">
              <strong style={{ color: '#1E3A8A' }}>Author</strong>
              <p>{author}</p>
            </div>
            <div className="mb-2">
              <strong style={{ color: '#1E3A8A' }}>Date</strong>
              <p>{date}</p>
            </div>
            <div className="mb-2">
              <strong style={{ color: '#1E3A8A' }}>Content</strong>
              <p>{content}</p>
            </div>
            <div className="mb-2">
              <strong style={{ color: '#1E3A8A' }}>Full Content</strong>
              <p>{fullContent}</p>
            </div>
            <button
              type="button"
              className="btn btn-primary w-100"
              style={{ backgroundColor: '#1E3A8A', borderColor: '#1E3A8A' }}
              onClick={() => { setTitle(''); setAuthor(''); setDate(''); setContent(''); setFullContent(''); }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogs;