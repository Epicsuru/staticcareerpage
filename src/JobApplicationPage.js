import React from 'react';
import './JobApplicationPage.css';

const JobApplicationPage = () => {
  return (
    <div className="job-application-page">
      <header className="header">
        <div className="header-content">
          <span className="logo">Schneider Electric</span>
          <span className="user-info">Suruchi Kumari, you are signed in.</span>
          <a href="/signout" className="sign-out">
            Sign Out <i className="fas fa-sign-out-alt"></i>
          </a>
        </div>
      </header>
      
      <main className="main-content">
        <nav className="navbar">
          <a href="/jobsearch">JOB SEARCH</a>
          <a href="/myjobpage">MY JOBPAGE</a>
        </nav>
        
        <section className="application-status">
          <h1>Thank You</h1>
          <p>Process completed</p>
          <p>Thank you for your job application. If your profile meets the requirements, a member of our team will contact you.</p>
          <p>We invite you to view the available job openings and to further explore the functionalities of your account.</p>
          <div className="links">
            <a href="/submissions">View My Submissions</a>
            <a href="/profile">View the General Profile</a>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="social-links">
          <a href="https://x.com/SchneiderElec" className="twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" className="facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://linkedin.com" className="linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://plus.google.com" className="google-plus">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="https://instagram.com" className="instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-links">
          <a href="/careers">Careers</a>
          <a href="/privacy">Data Privacy and Cookies Policy</a>
          <a href="/privacy-notice">Privacy Notice</a>
        </div>
        <div className="footer-note">
          <p>©2024, Schneider Electric</p>
        </div>
      </footer>
    </div>
  );
};

export default JobApplicationPage;
