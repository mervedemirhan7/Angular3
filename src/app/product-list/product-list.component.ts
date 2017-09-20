import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  @Input('productsInput') productsInput

  @Output() productEvent= new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }
  setSelected(p){
    this.productEvent.emit(p)
  }
}
