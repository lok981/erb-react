import { socialLink } from "../../data.js";
const SocialLinks = () => {
    return (
        <>
            {socialLink.map((item) => {
                return (
                    <li key={item.id}>
                        <a href={item.href}>
                            <i className={item.icon}></i>
                        </a>
                    </li>
                );
            })}
        </>
    );
};
export default SocialLinks;
