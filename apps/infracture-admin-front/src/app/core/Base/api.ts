import axios from 'axios';
import { ApiConfig } from './api-config.interface';
import { BaseRepositoryFactory } from './BaseRepositoryFactory';

const HOST_URL = 'localhost:3005';

export class BaseApi<T> extends BaseRepositoryFactory<T> {
  
  constructor(public config: ApiConfig) {
    super(config);
  }

  async get(): Promise<T[]> {
    try {
      const apiName = this.config.path;
      const response = await axios.get(`${HOST_URL}${apiName}`, {
        headers: {
          accept: '*/*',
        },
      });

      const list = response.data;
      return list;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}
