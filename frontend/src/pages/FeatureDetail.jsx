import { useRef, useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from "../store/authContext";
import LinkOutput from '../components/LinkOutput';
import PhoneSearch from '../components/PhoneSearch';
import PdfSearch from '../components/PdfSearch';
import LinkSearch from '../components/LinkSearch';
import IpSearch from '../components/IpSearch';


function FeatureDetail({ }) {
  const inputRef = useRef();
  const { featureId } = useParams();
  const [error, setError] = useState(null);
  const { queryRequest } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [outputData, setOutputData] = useState(null);
  const features = JSON.parse(localStorage.getItem('features')) || [];
  const feature = features.find((f) => f.id == parseInt(featureId));
  const isInputFileTypeNeeded = feature.id == 6;

  useEffect(() => {
    if (outputData != null) {
      setLoading(true);
    }
    console.log("hello");
    console.log(outputData);
  }, [outputData]);
  
  async function handleSubmit() {
    let data = null;
    // setLoading(false);
    try {
      if (isInputFileTypeNeeded) {
        data = await queryRequest(feature.id, null, null, inputRef.current.value);
      }
      else {
        data = await queryRequest(feature.id, inputRef.current.value, null, null);
      }
      console.log(data);
      
      setOutputData(data);
      console.log(feature.id);
      console.log(outputData);
      console.log(Object.keys(outputData).length);
    } catch (error) {
      setError(error.message || 'An error occurred');
    } 
  
  }

   // Conditionally render different components based on feature
   const renderComponent = () => {
    switch (feature.id) {
      case 3:
        return <LinkOutput data={outputData} />;
      case 5:
        return <PhoneSearch data={outputData} />;
      case 6:
        return <PdfSearch data={outputData} />;
      case 7:
        return <LinkSearch data={outputData} />;
      case 8:
        return <IpSearch data={outputData} />;
      default:
        return null;
    }
  };


  return (
    <div>
      <h1 title='main-title'>{feature.name}</h1>
      {!isInputFileTypeNeeded ? <input ref={inputRef} type="text" /> : <input ref={inputRef} type="file" />}
      <button onClick={handleSubmit}>submit</button>
      {loading && outputData && renderComponent()}
      
    </div>
  );
}

export default FeatureDetail;

