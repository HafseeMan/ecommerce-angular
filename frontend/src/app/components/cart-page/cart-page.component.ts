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
    this.calculateTotal()
  }

  //Calculate total
  calculateTotal(){
    let total = 0
    for(let i=0; i<this.Cart.length; i++){
      total =+ this.Cart[i].price
      console.log(this.Cart[i].price)
    }
    this.total = total
    console.log(this.total)
  }

  //Load Items to cart
  loadItems() {
    return this.restApi.loadCartItems().subscribe((data: {}) => {
      this.Cart = data;
    })
  }

  //Delete Item from Cart
  deleteItem(id: number) {
    return this.restApi.deleteCartItem(id).subscribe(data => {
      this.loadItems()
    })
  }


}
