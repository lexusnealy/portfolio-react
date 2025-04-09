import React from 'react';
import { Link } from "react-router-dom";
// import ContactMe from "../pages/contactme";

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer style={{ border: "1px solid black", width: "100%", position: "fixed", height: "6rem", bottom: 0, display: "flex", justifyContent: "center" }}>
                <div className="links" style={{ display: "flex", justifyContent: "space-between", width: "70%", color: "orange" }}>
                    <Link to="/about">About Me</Link>
                    <Link to="/aboutus">Github Profile</Link>
                    <Link to="/contactme">Contact Me</Link>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <a href="https://twitter.com" className="text-blue-500">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" className="text-blue-700">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://facebook.com" className="text-blue-600">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </footer >
        </>
    );
};

export default Footer;