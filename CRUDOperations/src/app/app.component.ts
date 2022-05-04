import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';
import { products, ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'CRUDOperations';
  products : products = {"id":3,"name":"pant","color":"darkblue"};
  message : string;
  subscription : Subscription;
  constructor(private productservice : ProductService, private messageService : MessageService){

  }
  ngOnInit(){
    //get all products
    // this.productservice.getAllProducts().subscribe(data=>{
    //      console.table(data);
    // });

    //create products
    // this.productservice.createProducts(this.products).subscribe(
    //    (response) =>{
    //         console.log('response received');
    //         console.table(response);
    //    },
    //    (error) => {
    //       console.log('error caught in component');
    //       throw error;
    //    }
    // )

    //update product
    // this.productservice.updateProducts(3).subscribe(

    //     (response) =>{
    //        console.log(response);
    //     },
    //     (error) =>{
    //       console.log('error caught in compoent');
    //       throw error;
    //     }
    // )

    //delee product
    //     this.productservice.deleteProducts(4).subscribe(

    //     (response) =>{
    //        console.log(response);
    //     },
    //     (error) =>{
    //       console.log('error caught in compoent');
    //       throw error;
    //     }
    // )

    //behavioural subject
     this.subscription = this.messageService.message.subscribe(
       (message)=>{
        this.message = message;
     });
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
}
