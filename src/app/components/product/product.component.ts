import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  product1={productId:1,productName:'Bardak',categoryId:4,unitPrice:5}
  product2={productId:2,productName:'Tel',categoryId:1,unitPrice:5}
  product3={productId:3,productName:'laptop',categoryId:2,unitPrice:5}
  product4={productId:4,productName:'top',categoryId:3,unitPrice:5}
  product5={productId:5,productName:'lolipop',categoryId:5,unitPrice:5}

  products= [this.product1,this.product2,this.product3,this.product4,this.product5]

}
