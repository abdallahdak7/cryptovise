import './styles.css';

import { TableRowSkeletonProps } from './types';

const TableRowSkeleton: React.FC<TableRowSkeletonProps> = () => {
  return (
    <tr>
      <td>
        <div className='skeleton-cell'></div>
      </td>
      <td>
        <div className='skeleton-cell'></div>
      </td>
      <td>
        <div className='skeleton-cell'></div>
      </td>
      <td>
        <div className='skeleton-cell'></div>
      </td>
      <td>
        <div className='skeleton-cell'></div>
      </td>
      <td>
        <div className='skeleton-cell'></div>
      </td>
    </tr>
  );
};

export default TableRowSkeleton;
