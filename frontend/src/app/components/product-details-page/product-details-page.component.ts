import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/shared/rest-api.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {
  
  id = this.actRoute.snapshot.params['id']
  productData: any = {};

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

}
