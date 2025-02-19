import { useState } from 'react';
import { TicketCounts } from '../types/index';
import { increment, decrement } from '../../../helpers/counterOperations';
import {UseTicketCountsReturn} from '../types/index'



const useTicketCounts = (): UseTicketCountsReturn => {
  const [counts, setCounts] = useState<TicketCounts>({
    general: 0,
    children: 0,
    seniors: 0,
  });

  const handleIncrement = ((type: keyof TicketCounts) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: increment(prevCounts[type]),
    }));
  });

  const handleDecrement = ((type: keyof TicketCounts) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: decrement(prevCounts[type]),
    }));
  });

  return { counts, handleIncrement, handleDecrement };
};

export default useTicketCounts;
