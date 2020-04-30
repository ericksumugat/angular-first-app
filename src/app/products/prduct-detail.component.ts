import { Product } from './../product/product';
import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './prduct-detail.component.html',
  styleUrls: ['./prduct-detail.component.css']
})
export class PrductDetailComponent implements OnInit {

  pageTitle = "Detail"
  prouduct: Product

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')

    this.productService.getProduct(id)
    .subscribe({
      next: product => {
        console.log(product.productId + " " + product.productName)
      },
      error: err => {console.log(err.error.message)},
      complete: () => {}
    })
  }

  onBack() {
    this.router.navigate(['/products']);
  }

}
