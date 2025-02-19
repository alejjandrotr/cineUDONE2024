import React from 'react';
import { TicketRowProps } from '../types/index';

const TicketRow: React.FC<TicketRowProps> = ({
  ticketType,
  price,
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <tr>
      <td>{ticketType}</td>
      <td>
        <div className="button">
          <button
            onClick={onIncrement}
            aria-label={`Incrementar ${ticketType}`}
          >
            +
          </button>
          <span>{count}</span>
          <button
            onClick={onDecrement}
            aria-label={`Decrementar ${ticketType}`}
          >
            -
          </button>
        </div>
      </td>
      <td className="price">${price}</td>
    </tr>
  );
};

export default TicketRow;
