import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { CartServices } from '../cart.service';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  products : Product;
  product_id : any;
  product_name :string;
  product_count :number;
  product_price : number;
  constructor( private route: ActivatedRoute,
    private router: Router,private http:HttpClient,private cartServi:CartServices) { }

    ngOnInit() {

      let id2 = this.route.snapshot.paramMap.get('id');

      

      this.http.get<{[key:string]:Product}>("http://localhost:3006/api/product/"+id2).subscribe(posts =>{
        console.log("array"+posts);
  
       //this.products = posts;

       
       
      


     })
   
    ;
     
    }

    addTocart()
    {
      cart :Cart;


  
    //  const cartItems = {
    //     product_id,
    //     product_name,
    //     product_count,
    //     product_price
    //   };
    //   console.log(cartItems);
     // this.cartServi.addCart(cartItems);
    }

}
