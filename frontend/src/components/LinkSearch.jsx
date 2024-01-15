import React from "react";

function App({data}) {
  
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
            
            .hidden-links {
              margin-top: 10px;
            }
            
            .hidden-links ul {
              list-style-type: none;
              padding: 0;
            }
            
            .hidden-links li {
              margin-bottom: 5px;
            }
            
            .hidden-links a {
              color: #007bff;
              text-decoration: none;
            }
            
            .hidden-links a:hover {
              text-decoration: underline;
            }
            
          `}
        </style>
        <div id="FormContainer" className="FormContainer">
          <p>
            <strong>Query:</strong>{" "}
            <a href={data.query} target="_blank" rel="noopener noreferrer">
              {data.query}
            </a>
          </p>
          <div className="hidden-links">
            <p>
              <strong>Hidden Links:</strong>
            </p>
            <ul>
              {data.output.hiddenLinks.map((link, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
}

export default App;
