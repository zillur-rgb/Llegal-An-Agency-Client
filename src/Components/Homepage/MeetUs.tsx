import { teams } from "../../Types/Types";
import "../../styles/MeetUs.scss";

const MeetUs = () => {
  const ourTeam: teams[] = [
    {
      id: 1,
      img: "/assets/attorney-1.jpg",
      name: "Salma Tabassum",
      title: "Environment Lawyer & CEO",
    },
    {
      id: 2,
      img: "/assets/attorney-2.jpg",
      name: "Rodney Stratton",
      title: "Human Rights",
    },
    {
      id: 3,
      img: "/assets/attorney-3.jpg",
      name: "Avie Beaton",
      title: "Mortgage Lawyer",
    },
  ];
  return (
    <div className="teamContainer">
      <section className="title">
        <h1>Meet Our Attorneys</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          nihil, eius possimus ratione nobis neque esse illum nam reprehenderit
          cumque voluptas ea sed cum nisi! Deleniti consequatur omnis molestias
          inventore!
        </p>
      </section>

      <section className="testimonials">
        {ourTeam.map((team) => (
          <div key={team.id}>
            <img src={team.img} alt={team.img} />
            <h1>{team.name}</h1>
            <p>{team.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MeetUs;
