import React from 'react';

interface TicketRowProps {
  ticketType: string;
  price: number;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

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
