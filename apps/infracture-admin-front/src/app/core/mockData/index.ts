import { ENTITIES_KEYS } from '../enums/entity-keys';
import mockSalaData from './data-salas';

export const dataMap: { [key: string]: () => unknown[] } = {
  [ENTITIES_KEYS.SALA]: mockSalaData,
};
