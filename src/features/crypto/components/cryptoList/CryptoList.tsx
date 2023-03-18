import './styles.css';

import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { CryptoListProps } from './types';
import CryptoView from '../cryptoView';
import FiltersGroup from '../filtersGroup';
import TableRowSkeleton from '../../../tableRowSkeleton';
import { getCryptos } from '../../../../common/axios';
import { mockData } from './consts';

const CryptoList: React.FC<CryptoListProps> = () => {
  // Access the client
  const queryClient = useQueryClient();
  // Queries
  let { data } = useQuery('getCryptos', getCryptos);

  const [state, setData] = useState(data);

  const sortArray = (column?: string) => {
    if (column == 'name') {
      setData((state) =>
        state.slice().sort((a, b) => a.name.localeCompare(b.name))
      );
    }

    if (column == 'volume') {
      setData((state) =>
        state
          .slice()
          .sort((a, b) => b.market_cap_change_24h - a.market_cap_change_24h)
      );
    }

    if (column == 'marketcap') {
      setData((state) =>
        state.slice().sort((a, b) => b.market_cap - a.market_cap)
      );
    }

    if (column == 'last24') {
      setData((state) =>
        state
          .slice()
          .sort(
            (a, b) =>
              b.price_change_percentage_24h - a.price_change_percentage_24h
          )
      );
    }

    if (!column) {
      setData(data);
    }
  };

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <div className={'table-container'}>
      <FiltersGroup sortArray={sortArray} />

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>24h % </th>
            <th>Market Cap </th>
            <th>Volume (24hr) </th>
          </tr>
        </thead>
        <tbody>
          {state?.length > 0 ? (
            state.map((symbol: any) => {
              return <CryptoView symbol={symbol} key={symbol.id} />;
            })
          ) : (
            <>
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
