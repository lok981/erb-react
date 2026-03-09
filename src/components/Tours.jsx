import Title from "./Title";
import { tData } from "../../data.js";
import Tour from "./Tour";
const Tours = () => {
    return (
        <div>
            <section className="section tours" id="tours">
                <Title title="featured" subTitle="tours" />

                <div className="tour-center">
                    {tData.map((item) => {
                        return <Tour key={item.id} {...item} />;
                    })}
                </div>
            </section>
        </div>
    );
};

export default Tours;
