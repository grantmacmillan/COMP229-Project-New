import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "./book.model";
import { Order } from "./order.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";


@Injectable()
export class OrderRepository
{
    private books: Book[] = [];
    private orders: Order[] = [];
    private loaded =  false;
    private names: string[] = [];

    constructor(private dataSource: RestDataSource)
    {
        dataSource.getOrders().subscribe(data => {
            this.orders = data;
            this.names = data.map(b => b.name).filter((n, index, array) => array.indexOf(n) === index).sort();
        })
    }

    loadOrders(): void
    {
        this.loaded = true;
        this.dataSource.getOrders().subscribe(orders => this.orders = orders);
    }

    getOrdersByName(name?: string): Order[]
    {
        return this.orders.filter(o => name == null || name === o.name);
    }

    getNames(): string[]
    {
        return this.names;
    }

    getOrders(): Order[]
    {
        if(!this.loaded)
        {
            this.loadOrders();
        }
        return this.orders;
    }

    //ADDED THIS
    getOrder(id: number): Order
    {
        return this.orders.find(o => o._id === id) as Order;
    }

    saveOrder(order: Order): Observable<Order>
    {
        return this.dataSource.saveOrder(order);
    }

    updateOrder(updatedOrder: Order): void
    {
        this.dataSource.updateOrder(updatedOrder).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => o._id === order._id), 1, order);
        })
    }

    deleteOrder(id: number): void
    {
        this.dataSource.deleteOrder(id).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => id === o._id), 1);
        });
    }

    getBook(id: number): Book
    {
        return this.books.find(b => b._id === id) as Book;
    }
}