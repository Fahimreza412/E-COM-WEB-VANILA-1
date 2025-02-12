import './style.css'
import products from './API/Products.json';
console.log(products);
import { showProdcutContainer } from './homeProductCards';
// !Define a function named showProductContainer that takes an array of products as input.

showProductContainer(products)