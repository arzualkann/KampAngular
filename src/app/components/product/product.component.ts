import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../../models/productResponseModel';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  products:Product[]= [];
  apiUrl="https://localhost:44361/api/Products/getall";
  
  constructor(private httpClient:HttpClient) {}
  ngOnInit(): void {
    this.getProducts();
    
  }
  getProducts(){
  this.httpClient
  .get<ProductResponseModel>(this.apiUrl)
  .subscribe((response)=> {
    this.products=response.data
  });
  }

}
