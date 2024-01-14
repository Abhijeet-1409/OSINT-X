import { Link } from 'react-router-dom';

function Feature({ feature }) {
  return (
    <li className='feature-item'>
      <Link to={`${feature.id}`}>
        
        <h3>{feature.name}</h3>
        <p>
          {feature.info}
        </p>
      </Link>
    </li>
  );
}

export default Feature;