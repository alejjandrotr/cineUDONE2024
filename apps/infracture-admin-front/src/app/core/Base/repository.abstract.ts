import { BaseApi } from './api';
import { ApiConfig } from './api-config.interface';
import { MockRepository } from './mockRepository';
import { RepositoryType } from './enums/RepositoryType';
import { RepositoryMap } from './dtos/repository-map.dto';
import { IRepository } from './IRepository';

export abstract class BaseRepositoryFactory<T> {
  static factoryRepository<T>(config: ApiConfig): IRepository<T> {
    const repositoryBuilders: RepositoryMap<T> = {
      [RepositoryType.MOCK]: () =>
        new MockRepository<T & { id?: string }>(config),
      [RepositoryType.API]: () => undefined,
      [RepositoryType.LOCALSTORAGE]: () => undefined,
    };

    const builder = repositoryBuilders[config.type as RepositoryType];

    if (!builder) {
      throw new Error(`Invalid repository type: ${config.type}`);
    }

    const repository = builder();

    if (repository === undefined) {
      throw new Error('This API is not ready to use');
    }
    return repository;
  }
}
