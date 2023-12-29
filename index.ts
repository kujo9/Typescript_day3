


type Item = {
    id: string;
    name: string
    price: number;
    description: string
}
class Shopper {
    id: string;
    name: string;
    age: number;
    cart: Item[];
  

    constructor(name: string, age: number) {
        this.id = uuid.v4();
        this.name = name;
        this.age = age;tion
        this.cart = [];
}
function shopper(name: string, age: number): User {
    return new shopper(name, age);
}
function item_creation(name: string, price: number, description: string): Item {
    return Item
      id: uuid.v4(),
      name,
      price,
      description,
    };
  }
  function cart-Add(user: User, item: Item): void {
    user.cart.push(item);
  }
  
 
  function remove(user: User, item: Item): void {
    user.cart.slice(item);
  }
  function printCart(user: User): void {
    console.log(`User: ${user.name}`);
    console.log('Cart items:');
    for (const item of user.cart) {
      console.log(`- ${item.name} (${item.price})`);
    }
  }
  


