import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.getProductDetail('');
  }
  getProductDetail(product: any) {
    const url = 'http://localhost:8080/api/v1/products/product' + product.id + '/product';
    this.http.get<any>(url).subscribe(
      (res) => {
        console.log('Response:', res);
        if (res && res.data) {
          this.product = res.data;
        }else {
          this.product = null;
        }
      }
    )
  }
}
