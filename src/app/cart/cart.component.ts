import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart.model';
import { CartServices } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartSer:CartServices) { }

  cart : Cart[] ;
  //=
  // [
  //     new Cart('T-shit','this is new t-shirt',100,200),  //object create
  //     new Cart('T-shit','this is new t-shirt',100,200),  //object create
  //     new Cart('T-shit','this is new t-shirt',100,200),  //object create

      
  // ];
  ngOnInit(): void {

   console.log( this.cartSer.getcart());
    this.cart = this.cartSer.getcart();

  }

}
