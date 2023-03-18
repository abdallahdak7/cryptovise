import './styles.css';

import BaseCard from '../../common/components/baseCard';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={'header'}>
      <BaseCard />
      <BaseCard />
      <BaseCard />
    </div>
  );
};

export default Header;
