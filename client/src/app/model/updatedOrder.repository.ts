import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "./book.model";
import { Order } from "./order.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";
import { UpdatedOrder } from "./updatedOrder.model";


@Injectable()
export class UpdatedOrderRepository
{
    private books: Book[] = [];
    private updatedOrders: UpdatedOrder[] = [];
    private loaded =  false;
    private names: string[] = [];

    constructor(private dataSource: RestDataSource)
    {
        dataSource.getOrders().subscribe(data => {
            this.updatedOrders = data;
            this.names = data.map(b => b.name).filter((n, index, array) => array.indexOf(n) === index).sort();
        })
    }

    loadOrders(): void
    {
        this.loaded = true;
        this.dataSource.getOrders().subscribe(updatedOrder => this.updatedOrders = updatedOrder);
    }

    getOrdersByName(name?: string): Order[]
    {
        return this.updatedOrders.filter(o => name == null || name === o.name);
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
        return this.updatedOrders;
    }

    //ADDED THIS
    getOrder(id: number): Order
    {
        return this.updatedOrders.find(o => o._id === id) as Order;
    }

    saveOrder(updatedOrder: UpdatedOrder): Observable<UpdatedOrder>
    {
        return this.dataSource.saveUpdatedOrder(updatedOrder);
    }

    updateOrder(updatedOrder: UpdatedOrder): void
    {
        this.dataSource.updateUpdatedOrder(updatedOrder).subscribe(order => {
            this.updatedOrders.splice(this.updatedOrders.findIndex(o => o._id === order._id), 1, order);
        })
    }

    deleteOrder(id: number): void
    {
        this.dataSource.deleteOrder(id).subscribe(order => {
            this.updatedOrders.splice(this.updatedOrders.findIndex(o => id === o._id), 1);
        });
    }

    getBook(id: number): Book
    {
        return this.books.find(b => b._id === id) as Book;
    }
}