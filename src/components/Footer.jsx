import React from "react";



function Footer(){
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <div className="footer-container">
            <footer>
                <p>
                    Jay Prakash Sharma
                    &copy; {currentYear}
                </p>
            </footer>
        </div>
    );
}

export default Footer;