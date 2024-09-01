import React from "react";
import { servicesData } from "../data";
const Services = () => {
  return (
    <div>
      <section class="section services" id="services">
        <div class="section-title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
        <div class="section-center services-center">
          {servicesData.map((service) => displayService(service))}
        </div>
      </section>
    </div>
  );
};

export default Services;

function displayService(serviceData) {
  const { id, icon, title, text } = serviceData;
  return (
    <article key={id} className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
}
