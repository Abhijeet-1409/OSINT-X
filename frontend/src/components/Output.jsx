import React from 'react';
export function Output({ data }) {
  return (
    <div>
      {data}
    </div>
  );
}


export function LinkOutput({ data }) {
  if (!data || !data.socialmedialinks || !data.filelinklist) {
    return null;
  }

  return (
    <div>
      <h2>Social Media Links:</h2>
      <ul>
        {data.socialmedialinks.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <h2>File Link List:</h2>
      <ul>
        {data.filelinklist.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


