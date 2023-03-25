import './styles.css';

import { SearchProps } from './types';

const Search: React.FC<SearchProps> = ({ onChange, input }) => {
  return (
    <div className='search-container'>
      <input
        value={input}
        type='text'
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder='Search'
      />
      <div className='search-bottom-border'></div>
    </div>
  );
};

export default Search;
