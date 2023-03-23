import './styles.css';

import { SearchProps } from './types';

const Search: React.FC<SearchProps> = ({ onChange }) => {
  return (
    <div className='search-container'>
      <input
        type='text'
        onChange={(e) => onChange(e.target.value)}
        placeholder='Search'
      />
      <div className='search-bottom-border'></div>
    </div>
  );
};

export default Search;
