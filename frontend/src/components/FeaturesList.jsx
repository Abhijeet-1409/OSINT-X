import Feature from "./Feature";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/authContext";

function FeaturesList() {
  const { featuresList } = useContext(AuthContext);
  const [features, setFeatures] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await featuresList();
        setFeatures(data);
        localStorage.setItem('features',JSON.stringify(data));
      } catch (error) {
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [featuresList]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div >
      {loading ? (
        <p style={{border:"2px soild green"}}>Loading...</p>
      ) : features.length === 0 ? (
        <p>No features available</p>
      ) : (
        <ul className="features-list"style={{border:"2px soild green"}}>
          {features.map((feature) => (
            <Feature key={feature.id} feature={feature} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeaturesList;
