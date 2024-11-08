import { BaseApi } from "../Base/api";
import { mockSalaData } from "../mockData/sala";
import { Sala } from "./sala";

class SalaApi extends BaseApi<Sala>{
  constructor(){
    super({path: 'sala'})
  }

  async get(){
    return mockSalaData()
  }
}

export const salaApi = new SalaApi();