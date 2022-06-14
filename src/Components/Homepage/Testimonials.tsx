import { testimonialType } from "../../Types/Types";
import "../../styles/testimonials.scss";
const Testimonials = () => {
  const testimonialsArr: testimonialType[] = [
    {
      id: 0,
      ratings: 4,
      name: "Tareq",
      profession: "Student",
      img: "/assets/face.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptatibus laboriosam ratione? Ad, officia perspiciatis?",
    },
    {
      id: 1,
      ratings: 5,
      name: "Tareq",
      profession: "Student",
      img: "/assets/face.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptatibus laboriosam ratione? Ad, officia perspiciatis?",
    },
    {
      id: 2,
      ratings: 2,
      name: "Tareq",
      profession: "Student",
      img: "/assets/face.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptatibus laboriosam ratione? Ad, officia perspiciatis?",
    },
  ];
  return (
    <div className="testimonials-container">
      <h1>What Clients Say</h1>
      <p className="subheading">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nihil
        at veritatis velit corporis accusamus eaque obcaecati similique? Ut
        eaque illum minima eveniet possimus sapiente.
      </p>
      <div className="testimonials">
        {testimonialsArr.map((testimonial) => (
          <div key={testimonial.id} className="card">
            <p className="desc">{testimonial.desc}</p>
            <div className="intro">
              <img src={testimonial.img} alt="testImage" />
              <div>
                <p className="name">{testimonial.name}</p>
                <p className="profession">{testimonial.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
