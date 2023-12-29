"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = (0, uuid_1.v4)();
    }
}
