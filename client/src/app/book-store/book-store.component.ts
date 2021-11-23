import { Component, Injectable } from '@angular/core';
import { Book } from '../model/book.model';
import { BookRepository } from '../model/book.repository';
import { Cart } from '../model/cart.model';
import {Router} from "@angular/router";
import { Location } from '@angular/common';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';


@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent
{
  public selectedName = null;
  public booksPerPage = 4;
  public selectedPage = 1;
  
  constructor(private repository: BookRepository,
              private orderRepository: OrderRepository,
              private cart: Cart,
              private router: Router,
              private location: Location) { }

  get orders(): Order[]
  {
    const pageIndex = (this.selectedPage - 1) * this.booksPerPage;
    return this.orderRepository.getOrdersByName(this.selectedName)
    .slice(pageIndex, pageIndex + this.booksPerPage);
  }

  get names(): string[]
  {
    return this.orderRepository.getNames();
  }
 
  changeName(newName?: string): void
  {
    this.selectedName = newName;
  }

  changePage(newPage: number) : void
  {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void
  {
    this.booksPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number
  {
    return Math.ceil(this.repository
      .getBooks(this.selectedName).length / this.booksPerPage);
  }

  addBookToCart(id: number): void
  {
    //this.cart.addLine(order);
    //this.location.back();
    this.router.navigateByUrl('/cart/' + id); //Need to change this
  }
}
