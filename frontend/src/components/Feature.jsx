import { Link } from "react-router-dom";

function Feature({ feature }) {
  // Function to truncate the description to 50 words
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  };

  return (
    <li className="feature-item">
      <Link to={`${feature.id}`}>
        <h3>{feature.name}</h3>
        <p>{truncateDescription(feature.description, 25)}</p>
        {/* <img
          src={feature.image}
          style={{ height: "100px", width: "100px" }}
          alt={feature.name}
        /> */}
        <button className="learn-more">Learn More</button>
      </Link>
    </li>
  );
}

export default Feature;
