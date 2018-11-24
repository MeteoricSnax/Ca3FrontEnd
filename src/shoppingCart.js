class ShoppingCart {

    constructor(){
        this.totalWeight = 0;
        this.cart = [];
    }
    getCart = () => {
        return this.cart;
    }
    getWeight = () => {
        return this.totalWeight;
    }
    getPrice = () => {
        return (this.totalWeight / 100) * 15;
    }
    addToCart = (id, name, weight) => {
        this.cart.push({id, name, weight});
        this.totalWeight += parseInt(weight);
        this.printCart();
    }
    updateItem = (id, weight) => {
        
    }
    removeItem = (id) => {
        for(let i = 0; i < this.cart.length; i++){
            if(this.cart[i].id === id){
                this.cart.splice(i);
                console.log("Item removed from cart: " + this.cart[i].id);
            }
        }
    }
    isEmpty = () => {
        if(this.cart.length === 0){
            return true;
        }
        else {
            return false;
        }
    }
    printCart = () => {
        console.log("Total weight: " + this.totalWeight);
        for(let i = 0; i < this.cart.length; i++){
            console.log("Cart Item: " + i + ", ID: " + this.cart[i].id + ", Name: " + this.cart[i].name + ", Weight: " + this.cart[i].weight);
        }
    }
}
const cart = new ShoppingCart();
export default cart;