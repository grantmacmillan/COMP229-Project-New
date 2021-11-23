import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'app-order-aditor',
  templateUrl: './order-aditor.component.html',
  styleUrls: ['./order-aditor.component.css']
})
export class OrderAditorComponent implements OnInit {
  editing = false;
  submitted = false;
  orderSent = false;

  constructor(private router: Router,
              public order: Order,
              private repository: OrderRepository,
              public cart: Cart,
              private activeRoute: ActivatedRoute) 
  {
    this.editing = activeRoute.snapshot.params.mode === 'edit'; 

    //Assigning the value of this.book to the one we will get from the repository
    Object.assign(this.order, repository.getOrder(activeRoute.snapshot.params.id)); //This is getting the specified order

  }

  ngOnInit(): void {
  }

  //This is create an order
  updateOrder(form: NgForm): void
  {
    this.submitted = true;
    if(form.valid)
    {
        this.repository.updateOrder(this.order);
    }

    this.router.navigate(['/admin/main/orders']).then(() => {window.location.reload()}); //Same fix as teacher 
  }

  addBook(): void //This should be on the next page
  {
    this.router.navigateByUrl('/admin/main/page-edit');
  }

  //This is going back to the order list
  orderList(): void
  {
    this.router.navigateByUrl('/admin/main/orders'); //Same fix as teacher 
  }

}
