import { Component, OnInit } from '@angular/core';  
import { products } from '../products';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    //subscribe to the parameters received which are received in the arrow function variable params..then in the expression of arrow variable, we get the value of the productId parameter, put it in the index of the products array, and assign the object to our product property. simple
    this.route.paramMap.subscribe(
      params => {this.product= products[params.get('productId')];}
    );
  }

}