import React from "react";

function IpSearch({data}) {
  

  return (
    data &&
    data.output && (
      <div className="page-container">
        <style>
          {`
            .page-container {
              max-width: 600px;
              margin: 50px auto;
              padding: 20px;
              border: 2px solid #ccc;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            
            .FormContainer {
              font-family: Arial, sans-serif;
              color: #333;
            }
            
            p {
              margin: 10px 0;
            }
            
            strong {
              margin-right: 5px;
            }
            
          `}
        </style>
        <div id="FormContainer" className="FormContainer">
          <p>
            <strong>IP Information:</strong>
          </p>
          <p>
            <strong>Status:</strong> {data.output.info.status}
          </p>
          <p>
            <strong>Country:</strong> {data.output.info.country}
          </p>
          <p>
            <strong>Country Code:</strong> {data.output.info.countryCode}
          </p>
          <p>
            <strong>Region:</strong> {data.output.info.region}
          </p>
          <p>
            <strong>Region Name:</strong> {data.output.info.regionName}
          </p>
          <p>
            <strong>City:</strong> {data.output.info.city}
          </p>
          <p>
            <strong>ZIP Code:</strong> {data.output.info.zip}
          </p>
          <p>
            <strong>Latitude:</strong> {data.output.info.lat}
          </p>
          <p>
            <strong>Longitude:</strong> {data.output.info.lon}
          </p>
          <p>
            <strong>Timezone:</strong> {data.output.info.timezone}
          </p>
          <p>
            <strong>ISP:</strong> {data.output.info.isp}
          </p>
          <p>
            <strong>Organization:</strong> {data.output.info.org}
          </p>
          <p>
            <strong>AS Number:</strong> {data.output.info.as}
          </p>
          <p>
            <strong>Query IP:</strong> {data.output.info.query}
          </p>
        </div>
      </div>
    )
  );
}

export default IpSearch;
