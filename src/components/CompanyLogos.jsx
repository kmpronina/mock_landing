import { yourlogo } from "../assets";

const CompanyLogos = ({ className }) => {
  const arr = Array(5).fill(yourlogo);
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create great potentialities with
      </h5>
      <ul className="flex items-center justify-around">
        {arr.map((logo, index) => (
          <li key={index}>
            <img src={logo} width={134} height={28} alt="logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
