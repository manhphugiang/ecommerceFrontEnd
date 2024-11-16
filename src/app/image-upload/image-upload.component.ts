import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css'
})
export class ImageUploadComponent implements OnInit {
  products: Product[] = [];
  selectedProductId: number | null = null;
  selectedFiles: File[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
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
        console.error('Error fetching products', error);
      }
    );
  }


  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  onUpload() {
    if (!this.selectedProductId || this.selectedFiles.length === 0) {
      alert('Please select a product and at least one file to upload.');
      return;
    }

    const formData = new FormData();
    this.selectedFiles.forEach(file => {
      formData.append('files', file);
    });

    const uploadUrl = `http://localhost:8080/api/v1/images/upload?productId=${this.selectedProductId}`;
    window.location.reload();

    this.http.post(uploadUrl, formData).subscribe(
      response => {
        console.log('Upload successful', response);
        alert('Images uploaded successfully!');
      },
      error => {
        console.error('Error uploading files', error);
      }
    );
  }
}
