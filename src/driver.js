"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const shop = [
    new _1.Item('Product A', 10),
    new _1.Item('Product B', 15),
];
const user = new _1.User('aaa bbb');
function cart() { }
-Add(user, _1.User, item, _1.Item);
void {
    user, : .cart.push(item)
};
function printCart(user) {
    console.log(`User: ${user.name}`);
    console.log('Cart items:');
    for (const item of user.cart) {
        console.log(`- ${item.name} (${item.price})`);
    }
}
function remove(user, item) {
    user.cart.slice(item);
}
