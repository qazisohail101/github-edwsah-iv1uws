import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
    
  }

  notifyMe(){
    window.alert("You will be notified about it");
  }

}