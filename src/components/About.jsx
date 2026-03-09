import aboutImg from "../assets/image-about.png";
import Title from "./Title.jsx";
const About = () => {
    return (
        <section className="section about" id="about">
            <Title title="about" subTitle="us" />
            <div className="about-center">
                <div className="about-img">
                    <img src={aboutImg} alt="About Us" />
                </div>
                <article className="about-info">
                    <h3>explore the different</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#" className="btn">
                        read more
                    </a>
                </article>
            </div>
        </section>
    );
};

export default About;
