import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rightimg from '../assets/img/Logomark.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Bannerimg1 from '../assets/img/rightimg1.jpg';
import Bannerimg2 from '../assets/img/rightimg2.jpg';

const ForgetpasswordPage = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // Initialize navigate function
    const [currentSlide, setCurrentSlide] = useState(0);


    // Array of images for the slider
    const slides = [
        { image: Bannerimg1, quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", author: "Your Name" },
        { image: Bannerimg2, quote: "Another inspiring quote for your users.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", author: "Another Name" },

    ];

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    const handleSubmit = () => {
        console.log('Password reset requested for:', { email });
        // Simulate password reset logic (e.g., API call)
        // After successful reset, navigate to OTP validation page
        navigate('/passwordvalidtion');
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-12 col-xl-12">
                        <div className="card shadow-lg border-0" style={{ minHeight: '500px' }}>
                            <div className="row g-0 h-100" style={{ minHeight: '600px' }}>
                                {/* Left Side - Password Reset Form */}
                                <div className="col-md-6 col-lg-5 d-flex align-items-center">
                                    <div className="card-body p-3 p-sm-4 p-md-5 w-100">
                                        {/* Logo/Brand */}
                                        <div className="text-center mb-3 mb-md-4">
                                            <div
                                                className="d-inline-flex align-items-center justify-content-center mb-2 mb-md-3 position-relative logo"
                                                style={{
                                                    width: '60px',
                                                    height: '60px',
                                                }}
                                            >
                                                <img src={Rightimg} alt="Logo" />
                                                {/* Subtle glow effect */}
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
                                                        borderRadius: '16px',
                                                        top: 0,
                                                        left: 0
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <h2 className="fw-bold mb-1 mb-md-2 text-center" style={{ fontSize: '1.5rem' }}>Welcome<br />Back!</h2>
                                        <p className="text-muted text-center mb-3 mb-md-4" style={{ fontSize: '14px' }}>Please enter your email to reset your password</p>

                                        <div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label text-muted small fw-bold">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control border-0 bg-light py-2 py-md-3"
                                                    id="email"
                                                    placeholder="Enter your email address"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    style={{ fontSize: '14px' }}
                                                />
                                            </div>

                                            <button
                                                onClick={handleSubmit}
                                                className="btn w-100 py-2 py-md-3 fw-semibold"
                                                style={{
                                                    background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                                                    border: 'none',
                                                    color: 'white',
                                                    borderRadius: '8px',
                                                    fontSize: '14px',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: '0 4px 15px rgba(40, 167, 69, 0.2)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-1px)';
                                                    e.target.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.3)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0)';
                                                    e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.2)';
                                                }}
                                            >
                                                Reset Password
                                            </button>

                                            <div className="text-center mt-3 mt-md-4">
                                                <span className="text-muted" style={{ fontSize: '13px' }}>
                                                    Remember your password?{' '}
                                                    <a
                                                        href="/login"
                                                        className="text-decoration-none fw-semibold"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                                                            WebkitBackgroundClip: 'text',
                                                            WebkitTextFillColor: 'transparent',
                                                            backgroundClip: 'text'
                                                        }}
                                                    >
                                                        Sign In
                                                    </a>
                                                </span>
                                            </div>

                                            {/* Explanatory Text at Bottom */}
                                            <p className="text-muted text-center mt-4" style={{ fontSize: '12px' }}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis ornare tellus vitae vestibulum.
                                                Donec et amet lectus volutpat purus volutpat pretium quis et lorem. Praesent nec posuere magna.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Image Slider with Overlay */}
                                <div className="col-md-6 col-lg-7 position-relative d-none d-md-block">
                                    <div
                                        className="h-100 position-relative"
                                        style={{
                                            backgroundImage: `url(${slides[currentSlide].image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            borderRadius: '0 0.375rem 0.375rem 0',
                                            minHeight: '400px',
                                            transition: 'background-image 0.5s ease-in-out'
                                        }}
                                    >
                                        {/* Quote icon */}
                                        <div className="position-absolute" style={{ top: '1.5rem', left: '1.5rem' }}>
                                            <div
                                                className="d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                                    borderRadius: '50%',
                                                    backdropFilter: 'blur(10px)',
                                                    border: '1px solid rgba(255,255,255,0.2)'
                                                }}
                                            >
                                                <span className="text-white" style={{ fontSize: '20px', fontWeight: 'bold' }}>"</span>
                                            </div>
                                        </div>

                                        {/* Bottom text overlay */}
                                        <div
                                            className="position-absolute bottom-0 start-0 p-3 p-lg-4"
                                            style={{
                                                maxWidth: '100%',
                                                background: 'linear-gradient(transparent, rgba(0,0,0,0.3))',
                                                borderRadius: '0 0 0 0.375rem'
                                            }}
                                        >
                                            <p
                                                className="text-white mb-0 lh-base fs-2"
                                                style={{
                                                    fontSize: '15px',
                                                    fontWeight: '300',
                                                    textShadow: '0 1px 3px rgba(0,0,0,0.5)'
                                                }}
                                            >
                                                {slides[currentSlide].quote}
                                            </p>
                                            <p
                                                className="text-white mt-1"
                                                style={{
                                                    fontSize: '12px',
                                                    fontWeight: '400',
                                                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                                                }}
                                            >
                                                - {slides[currentSlide].author}
                                            </p>
                                        </div>

                                        {/* Slider Navigation Dots */}
                                        <div
                                            className="position-absolute bottom-0 start-0 p-3 p-lg-4 d-flex"
                                            style={{ gap: '8px' }}
                                        >
                                            {slides.map((_, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        width: '50px',
                                                        height: '10px',
                                                        backgroundColor: currentSlide === index ? '#ffffff' : 'rgba(255,255,255,0.5)',
                                                        borderRadius: '0%',
                                                        cursor: 'pointer',
                                                        transition: 'background-color 0.3s ease'
                                                    }}
                                                    onClick={() => setCurrentSlide(index)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Header Image - Only visible on mobile */}
                                <div className="col-12 d-md-none">
                                    <div
                                        className="position-relative"
                                        style={{
                                            backgroundImage: `
                                                linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
                                                url(${slides[currentSlide].image})
                                            `,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center bottom',
                                            backgroundRepeat: 'no-repeat',
                                            borderRadius: '0.375rem 0.375rem 0 0',
                                            height: '200px',
                                            transition: 'background-image 0.5s ease-in-out'
                                        }}
                                    >
                                        {/* Quote icon */}
                                        <div className="position-absolute" style={{ top: '1rem', left: '1rem' }}>
                                            <div
                                                className="d-flex align-items-center justify-content-center"
                                                style={{
                                                    width: '35px',
                                                    height: '35px',
                                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                                    borderRadius: '50%',
                                                    backdropFilter: 'blur(10px)',
                                                    border: '1px solid rgba(255,255,255,0.2)'
                                                }}
                                            >
                                                <span className="text-white" style={{ fontSize: '18px', fontWeight: 'bold' }}>"</span>
                                            </div>
                                        </div>

                                        {/* Bottom text overlay */}
                                        <div
                                            className="position-absolute bottom-0 start-0 p-3"
                                            style={{
                                                maxWidth: '90%',
                                                background: 'linear-gradient(transparent, rgba(0,0,0,0.4))',
                                                borderRadius: '0 0 0 0.375rem'
                                            }}
                                        >
                                            <p
                                                className="text-white mb-0 lh-base"
                                                style={{
                                                    fontSize: '13px',
                                                    fontWeight: '300',
                                                    textShadow: '0 1px 2px rgba(0,0,0,0.7)'
                                                }}
                                            >
                                                {slides[currentSlide].quote}
                                            </p>
                                            <p
                                                className="text-white mt-1"
                                                style={{
                                                    fontSize: '11px',
                                                    fontWeight: '400',
                                                    textShadow: '0 1px 2px rgba(0,0,0,0.7)'
                                                }}
                                            >
                                                - {slides[currentSlide].author}
                                            </p>
                                        </div>

                                        {/* Slider Navigation Dots for Mobile */}
                                        <div
                                            className="position-absolute bottom-0 end-0 p-3 d-flex"
                                            style={{ gap: '8px' }}
                                        >
                                            {slides.map((_, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        width: '8px',
                                                        height: '8px',
                                                        backgroundColor: currentSlide === index ? '#ffffff' : 'rgba(255,255,255,0.5)',
                                                        borderRadius: '50%',
                                                        cursor: 'pointer',
                                                        transition: 'background-color 0.3s ease'
                                                    }}
                                                    onClick={() => setCurrentSlide(index)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetpasswordPage;