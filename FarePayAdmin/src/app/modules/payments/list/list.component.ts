import { Component, OnInit } from '@angular/core';
// import { ProductService } from 'app/data/service/product.service';
// import { IPayment } from 'app/data/inmemory_db/payments';
import { AuthService } from 'app/data/service/auth.service';
import { TripsService } from 'app/data/service/trips.service';
import { PaymentService } from 'app/data/service/payment.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  payments$;
  payments;

  constructor(
    // private productService: ProductService,
    private auth: AuthService,
    private tripsService: TripsService,
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.paymentService.paymentsList().subscribe(((res) => {
      console.log('Payments', res);
      this.payments = res;
    }));
    // this.auth.user.sacco;
    // this.tripsService.paymentsList().subscribe((res) => {
    //   console.log(res)
    //   // this.payments = res.filter(pay => pay.sacco === this.auth.user.sacco);
    // })
  }

}
