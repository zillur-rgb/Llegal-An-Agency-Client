import { serviceTypes } from "../../Types/Types";
import Service from "./Service";
import "../../styles/services.scss";

export const services: serviceTypes[] = [
  {
    img: "todo-line",
    name: "Labor Law",
    texts:
      "Whether as a managing director, head of department or employer — it is crucial for your success that you have competent and experienced legal advice on labor law at your side. ",
  },
  {
    img: "home-heart-line",
    name: "inheritance law and probate law",
    texts:
      "Whether it's estate planning, succession, a compulsory portion or an inheritance dispute - the law firm Schlun & Elseven takes away most of the worries that can arise in connection with the inheritance.",
  },
  {
    img: "aspect-ratio-line",
    name: "freedom of speech and press law",
    texts:
      "Whether it is a violation of personal rights, the use of a personal image or a case of defamation, slander or insult - our lawyers for media, freedom of speech and press law are at your side.",
  },
  // {
  //   img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M16 20V4H4v15a1 1 0 0 0 1 1h11zm3 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h4v9a3 3 0 0 1-3 3zm-1-10v7a1 1 0 0 0 2 0v-7h-2zM6 6h6v6H6V6zm2 2v2h2V8H8zm-2 5h8v2H6v-2zm0 3h8v2H6v-2z'/%3E%3C/svg%3E",
  //   name: "Civil Litigation",
  //   texts:
  //     "the quick fox jumps over the lazy dog the quick fox jumps over the lazy dog",
  // },
  {
    img: "pen-nib-line",
    name: "Extradition Lawyer",
    texts:
      "Anyone who is threatened by extradition proceedings is in an exceptional situation, which often affects their freedom, life and physical integrity, and therefore requires particularly competent legal support.",
  },
  {
    img: "bank-fill",
    name: "Debt Collection",
    texts:
      "The lawyers at Schlun & Elseven offer companies, freelancers and private individuals comprehensive legal advice on debt collection. We use the full range of legal tools to effectively enforce your rights as a creditor.",
  },
  {
    img: "home-6-fill",
    name: "Tenancy Law",
    texts:
      "Llegal support clients in all aspects of commercial tenancy law in Germany. In order to protect your rights as a commercial tenant or landlord, legal advice from an experienced lawyer seems advisable.",
  },
];
const Services = () => {
  return (
    <div className="services-container">
      <h1>Every Client Matters</h1>
      <p className="subHead">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
      <div className="single-service">
        {services.map((service, idx) => (
          <Service key={idx} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
