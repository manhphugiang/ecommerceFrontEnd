import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  product = {
    name: '',
    brand: '',
    price: null,
    inventory: null,
    description: '',
    category: {
      id: null,
      name: ''
    },
    images: null
  };

  constructor(private http: HttpClient) {
  }

  onSubmit() {
    const url = 'http://localhost:8080/api/v1/products/add';
    this.http.post(url, this.product).subscribe(
      response => {
        console.log('Product added successfully', response);
        window.location.reload();
      },
      error => {
        console.error('Error adding product', error);
      }
    );
  }

  ngOnInit(): void {
  }
}
