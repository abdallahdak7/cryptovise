import './styles.css';

import { CaretBottomSVG, CaretTopSVG } from '../../../assets/icons';

import { BaseCaretProps } from './types';

const BaseCaret: React.FC<BaseCaretProps> = ({ onCaretClick, caret }) => {
  return (
    <>
      {caret ? (
        <CaretTopSVG onClick={onCaretClick} fill='#0e8388' className='icon' />
      ) : (
        <CaretBottomSVG
          onClick={onCaretClick}
          fill='#0e8388'
          className='icon'
        />
      )}
    </>
  );
};

export default BaseCaret;
