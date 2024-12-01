import { BaseApi } from '../Base/api';
import { RepositoryType } from '../Base/enums/RepositoryType';
import { BaseRepositoryFactory } from '../Base/repository.abstract';
import { ENTITIES_KEYS } from '../enums/entity-keys';
import { mockSalaData } from '../mockData/data-salas';
import { Sala } from './sala';

/*class SalaApi extends BaseRepositoryFactory<Sala> {
  constructor() {
    super({ path: 'sala', type: RepositoryType.MOCK });
  }
}*/
export const salaRepository =  BaseRepositoryFactory.factoryRepository({ path: ENTITIES_KEYS.SALA, type: RepositoryType.MOCK });
