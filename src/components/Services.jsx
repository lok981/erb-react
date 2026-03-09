import Title from "./Title";
import Service from "./Service";
import { sData } from "../../data";

const Services = () => {
    return (
        <div>
            <section className="section services" id="services">
                <Title title="our" subTitle="services" />

                <div className="service-center">
                    {sData.map((item) => {
                        return (
                            // <Service
                            //     icon={item.icon}
                            //     title={item.title}
                            //     text={item.text}
                            //     key={item.id}
                            // />

                            <Service key={item.id} {...item} />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Services;
