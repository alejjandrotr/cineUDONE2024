import toast from 'react-hot-toast';
import { publish } from '../events';
import { dataMap } from '../mockData';
import { ApiConfig } from './api-config.interface';
import { IRepository } from './IRepository';

class NotFoundError extends Error {
  constructor(path: string, id: string) {
    super(`The ${path} with id ${id} not found.`);
    this.name = 'NotFoundError';
  }
}

export class MockRepository<T extends { id?: string }>
  implements IRepository<T>
{
  private data: T[] = []; // In-memory data storage

  constructor(private config: ApiConfig) {
    this.loadData(); 
  }
  
  publishUpdateEvent(data?:unknown): void {
    publish(this.config.path, data);
  }

  private async loadData(): Promise<void> {
    const fileName = this.config.path;
    try {
      if (dataMap[fileName] === undefined){
        this.data = [];
        return
      }
      const mockDataFunction: () => unknown[] = dataMap[fileName];
      this.data = mockDataFunction() as T[]; 
    } catch (error) {
      console.error('Error fetching initial data:', error);
      throw error;
    }
  }

  async get(): Promise<T[]> {
    return this.data; // Return the in-memory data
  }

  async getById(id: string): Promise<T | undefined> {
    return this.data.find((item) => item.id === id);
  }

  async add(newItem: T): Promise<T> {
    if (this.data.some((item) => item.id === newItem.id)) {
      throw new Error(`Item with id ${newItem.id} already exists.`);
    }
    this.data.push(newItem);
    this.publishUpdateEvent(this.data);
    return newItem;
  }

  async delete(id: string): Promise<T[]> {
    const itemToDelete = await this.getById(id);

    if (!itemToDelete) {
      throw new NotFoundError(this.config.path, id);
    }

    this.data = this.data.filter((item) => item.id !== id);
    this.publishUpdateEvent(this.data);
    toast.success('Se ha eliminado correctamente el elemento')
    return this.data;
  }

  async edit(
    id: string,
    updatedItem: Omit<T, 'id'> & { id: string }
  ): Promise<T> {
    const existingItem = await this.getById(id);

    if (!existingItem) {
      throw new NotFoundError(this.config.path, id);
    }

    const editedItem = { ...existingItem, ...updatedItem };
    const index = this.data.findIndex((item) => item.id === id);

    this.data[index] = editedItem;
    this.publishUpdateEvent(this.data);
    return editedItem;
  }
}
