const PageLinks = ({ id, href, text }) => {
    return (
        <li>
            <a key={id} href={href}>
                {text}
            </a>
        </li>
    );
};

export default PageLinks;
