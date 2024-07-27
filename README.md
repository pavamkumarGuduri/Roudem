# Roudem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

let products=[
{name:'pen',price:20,rating:5},
{name:'choclet',price:60,rating:3},
{name:'pepsi',price:10,rating:4},
{name:'thumsup',price:100,rating:3},
{name:'x90',price:160,rating:5}
];

//filter
products=products.filter(product=> product.price<100)

//sort
products=products.sort((a,b)=>a.price-b.price);

//reduce
let totalPrice=products.reduce((sum,a)=>sum+a.price,0);

//map
let productprices=products.map(product=>product.price+5);
console.log(productprices);

products=products.map(product=>{
product.price=product.price+5;
return product;
})

console.log(products,totalPrice);

Form types:
--------------------------
1.FormGroup
2.Nested FormGroup
3.Dynamic Form
4.FormArray
validations
