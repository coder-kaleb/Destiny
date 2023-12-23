import "../css/service.css";
import ServiceDesc from "./ServiceDesc";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="s-container">
        <div className="head-txt">
          <h1>Destiny isn't A.I, its the result of human intelligence.</h1>
          <p>
            Ne homero petentium mel, eu pro putent persecuti. Id ius mutat
            gubergren, eros harum hendrerit ex eos, in quo vocibus inimicus
            gubergren.
          </p>
        </div>
        <div className="servic-desc">
          <ServiceDesc
            imgUrl={icon1}
            title="Highly Responsive"
            desc="Id ius mutat gubergren, eros harum hendrerit ex eos, in quo vocibus inimicus gubergren. Experience, then believe."
          />
          <ServiceDesc
            imgUrl={icon2}
            title="Built-in Security"
            desc="Id ius mutat gubergren, eros harum hendrerit ex eos, in quo vocibus inimicus gubergren. Experience, then believe."
          />
          <ServiceDesc
            imgUrl={icon3}
            title="Safety Locked"
            desc="Id ius mutat gubergren, eros harum hendrerit ex eos, in quo vocibus inimicus gubergren. Experience, then believe."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
