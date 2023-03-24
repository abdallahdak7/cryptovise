import './styles.css';

import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { CryptoListProps } from './types';
import CryptoView from '../cryptoView';
import FiltersGroup from '../filtersGroup';
import Search from '../search';
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
      setData((state: any) =>
        state.slice().sort((a: any, b: any) => a.name.localeCompare(b.name))
      );
    }

    if (column == 'volume') {
      setData((state: any) =>
        state
          .slice()
          .sort(
            (a: any, b: any) =>
              b.market_cap_change_24h - a.market_cap_change_24h
          )
      );
    }

    if (column == 'marketcap') {
      setData((state: any) =>
        state.slice().sort((a: any, b: any) => b.market_cap - a.market_cap)
      );
    }

    if (column == 'last24') {
      setData((state: any) =>
        state
          .slice()
          .sort(
            (a: any, b: any) =>
              b.price_change_percentage_24h - a.price_change_percentage_24h
          )
      );
    }

    if (!column) {
      setData(data);
    }
  };

  const onSearch = (keyword: string) => {
    console.log(keyword);
    const cryptos = state
      .slice()
      .filter((x: any) => x.id.slice('').includes(keyword.toLowerCase()));

    if (cryptos.length > 0 && keyword) {
      setData(cryptos);
    } else setData(data);
  };

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <div className={'table-container'}>
      <FiltersGroup sortArray={sortArray} />
      <Search onChange={onSearch} />
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
