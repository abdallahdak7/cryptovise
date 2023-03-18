import './styles.css';

import { formatCurrency, setClassColor } from '../../../../common/utils';

import { CryptoViewProps } from './types';

const CryptoView: React.FC<CryptoViewProps> = ({ symbol }) => {
  return (
    <tr>
      <td>
        <img src={symbol.image} alt={symbol.name} className='icon' />
      </td>
      <td>
        {symbol.id.charAt(0).toUpperCase() + symbol.id.slice(1)}{' '}
        <span>{symbol.symbol.toUpperCase()}</span>
      </td>
      <td>{formatCurrency(symbol.current_price)}</td>
      <td className={setClassColor(symbol.price_change_percentage_24h)}>
        {symbol.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>{formatCurrency(symbol.market_cap)}</td>
      <td>{formatCurrency(symbol.market_cap_change_24h)}</td>
    </tr>
  );
};

export default CryptoView;
