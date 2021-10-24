import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/shared/item-model';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {
  
  id = this.actRoute.snapshot.params['id']
  productData: any = {};
  cartStatus = this.productData.cart

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { } 

  ngOnInit(): void {
    this.restApi.getProduct(this.id).subscribe((data: {}) => {
      this.productData = data;
    })
  }

  updateCartStatus(){ /**Of original json object*/
  let newData = {id: this.productData.id,
    cart: true, /*Cart status changed */
    category: this.productData.category,
    details: this.productData.details,
    img: this.productData.img,
    name: this.productData.name,
    price: this.productData.price
  }

   this.restApi.updateCartStatus(this.productData.id, newData)
    .subscribe(data => {
      this.cartStatus = newData.cart
      console.log(this.cartStatus)
    })
  }

  addToCart(){
    let newCartItem:Item = {
      id: this.productData.id,
      name: this.productData.name,
      price: this.productData.price,
      img: this.productData.img,
      qnty: 1
    }

   this.restApi.addCartItem(newCartItem).subscribe((data: {}) => {
     this.updateCartStatus()

   }) 

  }


}
