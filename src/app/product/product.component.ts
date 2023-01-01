import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

interface product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(private service: ProductService) {}

  Products: product[] = [];

  ngOnInit(): void {
    this.service.getProduct().subscribe((response: any) => {
      this.Products = response.products;
      console.log(this.Products);
    });
  }
}
