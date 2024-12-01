
export interface IRepository<T> {
  get(): Promise<T[]>;
  getById(id: string): Promise<T | undefined>;
  add(newItem: T): Promise<T>;
  delete(id: string): Promise<T[]>;
  edit(id: string, updatedItem: Omit<T, 'id'> & { id: string; }): Promise<T>;
  publishUpdateEvent(): void;
}
