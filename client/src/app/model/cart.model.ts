import { Injectable } from "@angular/core";
import { Book } from "./book.model";

@Injectable()
export class Cart
{
    public lines: CartLine[] = [];
    public updatedQuantity = "";
    public cartPrice = 0;

    addLine(book: Book, quantity: string = ""):void
    {
        const line = this.lines.find(l => l.book._id === book._id);
        if(line !== undefined)
        {
            line.quantity = quantity;
        }
        else
        {
            this.lines.push(new CartLine(book, quantity));
        }
        //this.recalculate();
    }

    addUpdatedOrderLine(book: Book, quantity: string): void
    {
       
        const line = this.lines.find(l => l.book._id === book._id);
        if(line !== undefined)
        {
            line.quantity = quantity;
        }
        else
        {
            this.lines.push(new CartLine(book, quantity));
        }
    }

    updateQuantity(book: Book, quantity: string): void
    {
        const line = this.lines.find(l => l.book._id === book._id);
        if(line !== undefined)
        {
            line.quantity = String(quantity);
        }
        
        //this.recalculate();
    }

    removeLine(id: number): void
    {
        const index = this.lines.findIndex(l => l.book._id === id)
        this.lines.splice(index, 1);
        //this.recalculate();
    }

    clear():void
    {
        this.lines = [];
        //this.itemCount = 0;
        //this.cartPrice = 0;
    }

    private recalculate(): void
    {
        /*this.itemCount = 0;
        this.cartPrice = 0;*/
        this.lines.forEach(l => 
        {
            //this.itemCount += l.quantity;
            //this.cartPrice += (l.quantity *  l.book.price);
            //this.updatedQuantity += l.changedQuantity;
        });
    }
}

export class CartLine
{
    constructor(public book: Book,
                public quantity: string){  }

    /*get changedQuantity(): string
    {
        return this.quantity;
    }*/


    /*get lineTotal(): number{
        return this.quantity * this.book.price;
    }*/
}