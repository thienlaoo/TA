import React from 'react';
import "./Footer.scss";

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer_text"> performed as a test assignment<br /> for the company <br /> JSNinjas</div>
            <div className="footer_ellipse">
                <div className="footer_image"></div>
            </div>
            <div className="footer_links">
                <a href="https://github.com/thienlaoo" className="footer_links_git"></a>
                <a href="https://www.linkedin.com/in/anton-cherepynets-aab19b285/" className="footer_links_twitter"></a>
            </div>
            <div className="footer_year">
                2023
            </div>
        </div>
    )
}
