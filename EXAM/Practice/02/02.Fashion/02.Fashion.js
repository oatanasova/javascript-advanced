class FashionRetailInventory {
    constructor(storeHouse, location) {
        this.storeHouse = storeHouse
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        let foundProduct = this.productStock.find(name => name.productName === productName && name.size === size);

        if (!foundProduct) {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        } else {
            foundProduct.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        }
    }

    sendProduct(productName, size) {
        let foundProduct = this.productStock.find(name => name.productName === productName && name.size === size);

        if (!foundProduct) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
        let index = this.productStock.indexOf(foundProduct);
        this.productStock.splice(index, 1);
        return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }

    findProductsBySize(size) {
        let output = this.productStock.filter(product => product.size === size);
        if (output.length === 0) {
            return `There are no products available in that size`;
        } else {
            return output.map(product => `${product.productName}-${product.quantity} pieces`).join(', ');
        }
    }

    listProducts() {
        if(this.productStock.length === 0){
            return `${this.storeHouse} storehouse is empty`;
        } else{
            let output = `${this.storeHouse} storehouse in ${this.location} available products:\n`
            this.productStock.sort((a,b) => a.productName.localeCompare(b.productName));
            output += this.productStock.map((e) => `${e.productName}/Size:${e.size}/Quantity:${e.quantity}/Price:${e.price}$`).join('\n');
            return output;
        }
    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());