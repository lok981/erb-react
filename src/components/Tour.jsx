const Tour = ({ image, date, title, text, country, duration, price }) => {
    return (
        <div className="tour-card">
            <div className="tour-img-container">
                <img src={image} alt="image" />
                <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                    <p>
                        <i className="fa-solid fa-map"></i> {country}
                    </p>
                    <p>{duration}</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default Tour;
