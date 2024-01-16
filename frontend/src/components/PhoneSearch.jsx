import React from "react";

function PhoneSearch({data}) {

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
              }`}
        </style>
        <div id="FormContainer" className="FormContainer">
          {/* Display the output */}
          <p>
            <strong>Query:</strong>{" "}
              {data.query}
          </p>
          <p>
            <strong>Phone Number:</strong>{" "}
            <span> {"+" + data.output?.number} </span>
          </p>
          <p>
            <strong>Line Type:</strong> <span> {data.output?.carrier} </span>
          </p>
          <p>
            <strong>Local Format:</strong>{" "}
            <span> {data.output?.local_format} </span>
          </p>
          <p>
            <strong>Country:</strong> <span> {data.output?.country_name} </span>
          </p>
          <p>
            <strong>Country Code:</strong>{" "}
            <span> {data.output?.country_code} </span>
          </p>
          <p>
            <strong>Prefix:</strong>{" "}
            <span> {data.output?.country_prefix} </span>
          </p>
          <p>
            <strong>Location:</strong> <span> {data.output?.location} </span>
          </p>
          <p>
            <strong>Carrier:</strong> <span> {data.output?.carrier} </span>
          </p>
        </div>
      </div>
    )
  );
}

export default PhoneSearch;
