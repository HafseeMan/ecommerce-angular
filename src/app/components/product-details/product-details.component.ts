import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit , OnDestroy{
  id!: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
