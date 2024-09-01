import React from "react";
import { toursData } from "../data";

const Tours = () => {
  return (
    <div>
      <section class="section" id="tours">
        <div class="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>

        <div class="section-center featured-center">
          {toursData.map((tour) => tourUi(tour))}
        </div>
      </section>
    </div>
  );
};

export default Tours;

function tourUi(tour) {
  return (
    <article key={tour.id} className="tour-card">
      <div className="tour-img-container">
        <img src={tour.img} className="tour-img" alt="" />
        <p className="tour-date">{tour.date}</p>
      </div>
      <div className="tour-info">
        <h4>{tour.name}</h4>
        <p>{tour.info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {tour.country}
          </p>
          <p>{tour.days} days</p>
          <p>from ${tour.price}</p>
        </div>
      </div>
    </article>
  );
}
