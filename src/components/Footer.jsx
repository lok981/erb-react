import { pageLink } from "../../data.js";
import PageLinks from "../components/PageLinks";

import SocialLinks from "../components/SocialLinks";

const Footer = () => {
    return (
        <footer className="section footer" id="footer">
            <ul className="footer-menu-list">
                {pageLink.map((item) => {
                    return <PageLinks {...item} key={item.id} />;
                })}
            </ul>

            <ul className="footer-menu-icons">
                <SocialLinks />
            </ul>

            <p>
                Copyright&copy; Dennis <span>{new Date().getFullYear()}</span> all rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
