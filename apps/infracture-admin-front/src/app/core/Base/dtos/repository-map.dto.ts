import { RepositoryType } from '../enums/RepositoryType';
import { IRepository } from '../IRepository';

export type RepositoryMap<T> = Record<
  RepositoryType,
  () =>
    | IRepository<
        T & {
          id?: string;
        }
      >
    | undefined
>;
