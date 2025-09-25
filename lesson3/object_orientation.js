function createTool(id, name, stock, price) {
  return {
    id, 
    name,
    stock,
    price,

    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log(`Can't set price to ${newPrice}. Price has to be greater than 0.`);
      } else {
        this.price = newPrice;
        console.log(`The new price for ${this.name} is ${newPrice}`);
      }
    },

    describeProduct() {
      let features = ["name", "id", "price", "stock"];
      console.log("\n")
      features.forEach(f => console.log(`=> ${f}: ${this[f]}`));
    },
  };
}

let scissors = createTool(0, 'Scissors', 8, 10);
let drill = createTool(1, 'Cordless Drill', 15, 45);
scissors.describeProduct();
drill.describeProduct();
drill.setPrice(-3);
drill.setPrice(42);