import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { Cart } from 'src/app/model/cart.model';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';


//This should be the add route
@Component({
  selector: 'app-order-editor',
  templateUrl: './order-editor.component.html',
  styleUrls: ['./order-editor.component.css']
})
export class OrderEditorComponent implements OnInit {
  editing = false;
  submitted = false;
  orderSent = false;

  constructor(private router: Router,
              public order: Order,
              private repository: OrderRepository,
              public cart: Cart,
              private activeRoute: ActivatedRoute) 
              {
                this.editing = activeRoute.snapshot.params.mode === 'edit'; //IF this is in edit mode

    if(this.editing)
    {
      //Assigning the value of this.book to the one we will get from the repository
      Object.assign(this.order, repository.getOrder(activeRoute.snapshot.params.id)); //This is getting the specified order
    }
               }

  ngOnInit(): void {
  }

  //This is create an order
  submitOrder(form: NgForm): void
  {
    this.submitted = true;
    if(form.valid)
    {
        this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }

  addBook(): void //This should be on the next page
  {
    this.router.navigateByUrl('/admin/main/books');
  }

  //This is going back to the order list
  orderList(): void
  {
    this.router.navigate(['/admin/main/orders']).then(() => {window.location.reload()}); //Same fix as teacher 
  }

  cancel(): void
  {
    this.router.navigateByUrl('/admin/main/orders');
  }
}
