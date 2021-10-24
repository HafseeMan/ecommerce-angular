import { getLocaleTimeFormat } from '@angular/common';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item-model';
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

  //Update Quantity
  updateItemQnty(id:number, value:number | any){
    let selectedItem:Item= {
      id: 0,
      name: '',
      price: 0,
      img: '',
      qnty: 0
    }
      
    this.restApi.getCartItem(id).subscribe((data: {}) => {
      console.log(data)
      console.log(value)
    })
/*
    let newData: Item = {
      id: selectedItem.id,
      qnty: value, /*Cart status changed 
      img: this.productData.img,
      name: this.productData.name,
      price: this.productData.price
    }
  
     this.restApi.updateCartStatus(this.productData.id, newData)
      .subscribe(data => {
        this.cartStatus = newData.cart
        console.log(this.cartStatus)
      })

      */
  }



}
