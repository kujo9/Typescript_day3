import { User, Item } from './'; 


const shop = [
  new Item('Product A', 10),
  new Item('Product B', 15),
 
];


const user = new User('aaa bbb');


function cart-Add(user: User, item: Item): void {
    user.cart.push(item);
  }


  function printCart(user: User): void {
    console.log(`User: ${user.name}`);
    console.log('Cart items:');
    for (const item of user.cart) {
      console.log(`- ${item.name} (${item.price})`);
    }
  }

  function remove(user: User, item: Item): void {
    user.cart.slice(item);
  }