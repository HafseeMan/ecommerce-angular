import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product-model';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  Products: any = []

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.displayProducts()
  }

  //Get products to display
  displayProducts(){
    return this.restApi.getProducts().subscribe((data: {}) => {
      this.Products = data;
    })
  }

}
