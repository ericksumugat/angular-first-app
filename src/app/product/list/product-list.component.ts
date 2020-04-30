import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  isImageVisible = false;

  private _listFilter: string = ''
  get listFilter(): string {
    return this._listFilter
  }

  set listFilter(value: string) {
    this._listFilter = value

    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: Product[];
  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    console.log('In OnInit')

    this.productService.getProducts()
      .subscribe({
        next: products => {
          this.products = products
          this.filteredProducts = this.performFilter(this._listFilter)
        },
        error: err => {console.log(err.error.message)},
        complete: () => {}
      })
  }

  getTitle(): string {
    return this.pageTitle
  }

  toggleImage(): void {
    this.isImageVisible = !this.isImageVisible;
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

  onRatingClicked(event: string) {
    this.pageTitle = event
  }
}