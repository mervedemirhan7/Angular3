import { Component, OnInit} from '@angular/core';
import {data} from '../data';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  products = []
  selectedProduct;
  constructor() { }

  ngOnInit() {
    this.products=data;

  }
  setSelected(p){
    this.selectedProduct=p;
  }
}
