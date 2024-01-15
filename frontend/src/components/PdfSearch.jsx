import React from "react";

function PdfSearch({data}) {

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
            
            a {
              color: #007bff;
              text-decoration: none;
            }
            
            a:hover {
              text-decoration: underline;
            }
            
          `}
        </style>
        <div id="FormContainer" className="FormContainer">
          <p>
            <strong>PDF Information:</strong>
          </p>
          <p>
            <strong>PDF Author:</strong> {data.output.pdf["/Author"]}
          </p>
          <p>
            <strong>PDF Creator:</strong> {data.output.pdf["/Creator"]}
          </p>
          <p>
            <strong>Creation Date:</strong> {data.output.pdf["/CreationDate"]}
          </p>
          <p>
            <strong>Modification Date:</strong> {data.output.pdf["/ModDate"]}
          </p>
          <p>
            <strong>Producer:</strong> {data.output.pdf["/Producer"]}
          </p>
          <p>
            <strong>Total Pages:</strong> {data.output.pages}
          </p>
          <p>
            <strong>Download PDF:</strong>{" "}
            <a href={data.query_pdf} target="_blank" rel="noopener noreferrer">
              {data.query_pdf}
            </a>
          </p>
        </div>
      </div>
    )
  );
}

export default PdfSearch;

