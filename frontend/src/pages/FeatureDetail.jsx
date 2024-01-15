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
  function handleSubmit() {
    var refQuery = inputRef.current.value;
    if (refQuery.length > 0) {
      setTimeout(() => {
        console.log('timeOut is stopped');
        setQuery(refQuery);
      }, 2000);
    }
  }


  return (
    <div>
      <h1 title='main-title' >{feature.name}</h1>
      {!isInputFileTypeNeeded ?  <input ref={inputRef} type="text" /> : <input type="file" />}
      <button onClick={handleSubmit}>submit</button>
      {query && <Output data={query} />}
    </div>
  );
}

export default FeatureDetail;

bha