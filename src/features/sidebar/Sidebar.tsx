import './styles.css';

import { AboutUsSVG, CryptosSVG } from '../../assets/icons';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Cryptos</Link>
        </li>
        <li>
          <Link to={`about-us`}>About us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
