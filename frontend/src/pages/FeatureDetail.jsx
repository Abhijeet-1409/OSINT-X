import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from "../store/authContext";
import Output from '../components/Output';
function FeatureDetail({ }) {
  const inputRef = useRef();
  const { featureId } = useParams();
  const [query, setQuery] = useState('');
  const features = JSON.parse(localStorage.getItem('features')) || [];
  const feature = features.find((f) => f.id == parseInt(featureId));
  const isInputFileTypeNeeded = feature.name == 'PDF meta data analysis' ;
  console.log(isInputFileTypeNeeded)
  console.log(feature)
  function handleSubmit() {
    var refQuery = inputRef.current.value;
    if (refQuery.length > 0) {
      setTimeout(() => {
        console.log('timeOut is stopped');
        setQuery(refQuery);
      }, 2000);
    }
  }
  
  // console.log({ feature.description });

  return (
    <div>
      <h1 className="main-title">{feature.name}</h1>
      <p>{feature.description}</p>
      {!isInputFileTypeNeeded ? (
        <input ref={inputRef} type="text" />
      ) : (
        <input type="file" />
      )}
      <br/>
      <button className="submit"onClick={handleSubmit} >Submit</button>
      {query && <Output data={query} />}
    </div>
  );
}

export default FeatureDetail;
