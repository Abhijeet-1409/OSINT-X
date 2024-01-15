import React from 'react';


function LinkOutput({ data }) {
  if (!data || !data.output.socialmedialinks || !data.output.filelinklist) {
    return null;
  }

  return (
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

          h2 {
            margin-top: 15px;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            margin-bottom: 5px;
          }

          a {
            color: #007bff;
            text-decoration: none;
            word-wrap: break-word;
          }

          a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div>
        <h2>Social Media Links:</h2>
        <ul>
          {data.output.socialmedialinks.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <h2>File Link List:</h2>
        <ul>
          {data.output.filelinklist.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LinkOutput;



