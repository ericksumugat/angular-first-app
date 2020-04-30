import { PrductDetailGuard } from './../products/prduct-detail.guard';
import { PrductDetailComponent } from './../products/prduct-detail.component';
import { ProductListComponent } from './list/product-list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../custom-pipe/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ProductListComponent,
        PrductDetailComponent,

        ConvertToSpacesPipe
    ],
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', canActivate: [PrductDetailGuard], component: PrductDetailComponent },
      
        ]),
        SharedModule
    ]
})
export class ProductModule {

}