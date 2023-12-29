"use strict";
class Shopper {
    constructor(name, age) {
        this.id = uuid.v4();
        this.name = name;
        this.age = age;
        tion;
        this.cart = [];
    }
}
function shopper(name, age) {
    return new shopper(name, age);
}
function item_creation(name, price, description) {
    return Item;
    id: uuid.v4(),
        name,
        price,
        description,
    ;
}
;
function cart() { }
-Add(user, User, item, Item);
void {
    user, : .cart.push(item)
};
function remove(user, item) {
    user.cart.slice(item);
}
function printCart(user) {
    console.log(`User: ${user.name}`);
    console.log('Cart items:');
    for (const item of user.cart) {
        console.log(`- ${item.name} (${item.price})`);
    }
}
