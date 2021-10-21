import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  Cart: any = []
  total = 0

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.loadItems()
  }

  //Calculate total
  /*
  for(i=0; i<Cart.length; i++){
    
  }
  */
 
  //Load Items to cart
  loadItems() {
    return this.restApi.loadCartItems().subscribe((data: {}) => {
      this.Cart = data;
    })
  }


}
