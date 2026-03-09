import logo from "../assets/favicon.ico";

import { pageLink } from "../../data.js";
import PageLinks from "../components/PageLinks";
import SocialLinks from "../components/SocialLinks";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container navbar-flex">
                {/* TODO #href */}
                <img src={logo} alt="" className="logo" />
                <ul className="main-menu-list">
                    {pageLink.map((item) => {
                        return <PageLinks {...item} key={item.id} />;
                    })}
                </ul>

                <ul className="main-menu-icons">
                    <SocialLinks />
                </ul>
                <div className="mobile-menu">
                    <div className="mobile-menu-toggle">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="mobile-menu-items">
                        <ul className="mobile-menu-list">
                            {pageLink.map((item) => {
                                return <PageLinks {...item} key={item.id} />;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
