import './styles.css';

import { SearchProps } from './types';

const Search: React.FC<SearchProps> = ({ onChange }) => {
  return (
    <div className='search-container'>
      <input
        type='search'
        onChange={(e) => onChange(e.target.value)}
        placeholder='Search'
      />
    </div>
  );
};

export default Search;
