import './styles.css';

import { FiltersGroupProps } from './types';
import { useState } from 'react';

const FiltersGroup: React.FC<FiltersGroupProps> = ({
  sortArray,
  checkedCheckbox,
  setCheckBox,
}) => {
  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;

    if (checked) {
      // Check newly clicked checkbox
      setCheckBox(name);

      // Call the appropriate function based on the checkbox name
      switch (name) {
        case 'name':
          handleNameClick();
          break;
        case 'volume':
          handleVolumeClick();
          break;
        case 'marketcap':
          handleMarketCapClick();
          break;
        case 'last24':
          handleLast24Click();
          break;
        default:
          break;
      }
    } else {
      // Uncheck currently checked checkbox
      setCheckBox('');

      // Revert to original data
      sortArray();
    }
  };

  const handleNameClick = () => {
    // Do something when Name checkbox is checked
    sortArray('name');
  };

  const handleVolumeClick = () => {
    // Do something when Volume checkbox is checked
    sortArray('volume');
  };

  const handleMarketCapClick = () => {
    // Do something when Market Cap checkbox is checked
    sortArray('marketcap');
  };

  const handleLast24Click = () => {
    // Do something when Last 24 Hours checkbox is checked
    sortArray('last24');
  };

  return (
    <div className='filter-group-container'>
      <div className='filter-group'>
        <span className='filter-by-text'>Filter by</span>
        <div className='checkbox-group'>
          <label className='checkbox'>
            <input
              type='checkbox'
              className='checkbox-input'
              name='name'
              value='name'
              checked={checkedCheckbox === 'name'}
              onChange={handleCheckboxChange}
            />
            <span className='checkbox-label'>Name</span>
          </label>
          <label className='checkbox'>
            <input
              type='checkbox'
              className='checkbox-input'
              name='volume'
              value='volume'
              checked={checkedCheckbox === 'volume'}
              onChange={handleCheckboxChange}
            />
            <span className='checkbox-label'>Volume</span>
          </label>
          <label className='checkbox'>
            <input
              type='checkbox'
              className='checkbox-input'
              name='marketcap'
              value='marketcap'
              checked={checkedCheckbox === 'marketcap'}
              onChange={handleCheckboxChange}
            />
            <span className='checkbox-label'>Market Cap</span>
          </label>
          <label className='checkbox'>
            <input
              type='checkbox'
              className='checkbox-input'
              name='last24'
              value='last24'
              checked={checkedCheckbox === 'last24'}
              onChange={handleCheckboxChange}
            />
            <span className='checkbox-label'>Last 24 Hours</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FiltersGroup;
