import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';
import { UpdatedOrder } from 'src/app/model/updatedOrder.model';
import { UpdatedOrderRepository } from 'src/app/model/updatedOrder.repository';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  editing = false;

  constructor(public cart: Cart,
              public order: Order,
              private updatedOrder: UpdatedOrder,
              private repository: UpdatedOrderRepository,
              private activeRoute: ActivatedRoute) 
    
  {

      this.editing = activeRoute.snapshot.params.mode === 'cart'; 

      //Assigning the value of this.book to the one we will get from the repository
      Object.assign(this.order, repository.getOrder(activeRoute.snapshot.params.id)); //This is getting the specified order

  }

  ngOnInit(): void {
  }


  submitOrder(order: Order): void
  {
    this.updatedOrder = order;
    this.repository.saveOrder(this.updatedOrder).subscribe();
  }

}
