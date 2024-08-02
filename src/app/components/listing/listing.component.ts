import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { Observable, Subscription } from 'rxjs';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
// export class ListingComponent implements OnInit, OnDestroy {
//   products: IProduct[] = [];

//   productSubscription?: Subscription;

//   constructor(private appService:ServicesService,    private cd: ChangeDetectorRef) { }

//   productObserver = {
//     next: (data: IProduct[]) => {
//        this.products = data; 
//       this.cd.markForCheck(); 
//     },
//     error: (error: any) => { console.log(error) },
//     complete: () => { console.log('product stream completed ') }
//   }
//   ngOnInit(): void {
//     this.productSubscription = this.appService.Products$.subscribe(this.productObserver)
//   }

//   ngOnDestroy(): void {
//     if (this.productSubscription) {
//       this.productSubscription.unsubscribe();
//     }
//   }
// }


export class ListingComponent implements OnInit {


 
  products?: Observable<IProduct[]>;
  constructor(private appService: ServicesService) {}
  ngOnInit(): void {
    this.products = this.appService.Products$;
  }
}
