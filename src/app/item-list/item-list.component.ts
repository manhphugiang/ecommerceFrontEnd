import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number;
  name: string | null;
  brand: string | null;
  price: number | null;
  inventory: number;
  description: string | null;
  category: { id: number, name: string } | null;
  images: { id: number, fileName: string, downloadUrl: string }[];
}

interface ApiResponse {
  message: string;
  data: Product[]; // This refers to the products array structure
}

@Component({
  selector: 'app-category-select',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  category: any[] = [];  // Variable to hold the categories fetched from backend
  products: Product[] = [];
  all: string| "selectAllCategories" = "selectAllCategories";
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getLocal(); // Fetch categories when component is initialized
    this.getProducts('');
  }

  getLocal() {
    const url = 'http://localhost:8080/api/v1/categories/all';
    this.http.get<any>(url).subscribe((res) => {
      this.category = res.data;
    });
  }

  getProducts(pick: string) {
    console.log('Selected Category:', pick);
    if (pick != "selectAllCategories") {
      const url = `http://localhost:8080/api/v1/products/product/${pick}/all/products`;
      this.http.get<any>(url).subscribe(
        (res) => {
          console.log('Response:', res);  // Log the response from the backend
          if (res && res.data) {
            this.products = res.data;
          } else {
            this.products = [];
          }
        },
        (error) => {
          console.error('Error fetching products:', error);
          this.products = [];
        }
      );
    } else {
      const url = 'http://localhost:8080/api/v1/products/all';
      this.http.get<any>(url).subscribe(
        (res) => {
          console.log('Response:', res);  // Log the response from the backend
          if (res && res.data) {
            this.products = res.data;
          } else {
            this.products = [];
          }
        },
        (error) => {
          console.error('Error fetching products:', error);
          this.products = [];
        }
      );
    }
  }
}
