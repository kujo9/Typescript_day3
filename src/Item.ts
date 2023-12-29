import { v4 as uuidv4 } from 'uuid';

class Item {
  constructor(public name: string, public price: number) {
    this.id = uuidv4();
  }
}