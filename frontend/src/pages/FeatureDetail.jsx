import { useRef, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from "../store/authContext";
import { LinkOutput } from '../components/Output';
function FeatureDetail({ }) {
  const inputRef = useRef();
  const { featureId } = useParams();
  const [error, setError] = useState(null);
  const { queryRequest } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [outputData, setOutputData] = useState();
  const features = JSON.parse(localStorage.getItem('features')) || [];
  const feature = features.find((f) => f.id == parseInt(featureId));
  const isInputFileTypeNeeded = feature.id == 6;
  async function handleSubmit() {
    let data = null;
    setLoading(true);
    try {
      if (isInputFileTypeNeeded) {
        data = await queryRequest(feature.id, null, null, inputRef.current.value);
      }
      else {
        data = await queryRequest(feature.id, inputRef.current.value, null, null);
      }
      setOutputData(data);
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
    console.log(data);
    console.log(outputData);
  }



  return (
    <div>
      <h1 title='main-title'>{feature.name}</h1>
      {!isInputFileTypeNeeded ? <input ref={inputRef} type="text" /> : <input ref={inputRef} type="file" />}
      <button onClick={handleSubmit}>submit</button>
      {outputData && <LinkOutput data={outputData} />}
    </div>
  );
}

export default FeatureDetail;

