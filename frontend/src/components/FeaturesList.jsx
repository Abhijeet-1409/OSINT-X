import Feature from "./Feature";
function FeaturesList({ }) {
  const features = JSON.parse(localStorage.getItem('features'));
  return (
    <ul className="features-list">
      {
       features.map((feature) => {
        return (<Feature key={feature.id} feature={feature} />);
         })
      }
    </ul>
  );

}

export default FeaturesList;