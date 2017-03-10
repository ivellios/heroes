import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneto'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynamo'},
      {id: 18, name: 'Dr Strange'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Terrific'}
    ];
    return {heroes};
  }
}
