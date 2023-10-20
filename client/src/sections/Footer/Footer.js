import React from "react";

const Footer = () => {
    return (
        <footer className="text-body-secondary py-5">
            <div className="container">
                <p className="float-end mb-1">
                    <a href="#top"><img src="images/back-to-top.png" alt="back to top"/></a>
                </p>
                <p className="mb-1"> &copy; DAILYNEWS</p>
                <p className="mb-0">&copy; 2023</p>
            </div>
        </footer>
    );
};

export default Footer;