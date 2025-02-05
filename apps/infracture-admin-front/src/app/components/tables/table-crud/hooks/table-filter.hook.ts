import { useFilter } from '../../../../context/filter.context';

export const useFilteredData = (data: unknown[]) => {
  const { filter } = useFilter();

  return filter
    ? data.filter((item) => {
        return Object.values(item).some(value =>
          String(value).toLowerCase().includes(String(filter).toLowerCase())
        );
      })
    : data;
};