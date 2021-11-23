import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BookRepository } from 'src/app/model/book.repository';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-book-table-edit',
  templateUrl: './book-table-edit.component.html',
  styleUrls: ['./book-table-edit.component.css']
})
export class BookTableEditComponent implements OnInit {

  constructor(private repository: BookRepository,
    private router: Router,
    public cart: Cart) { }

ngOnInit(): void {
}

getBooks(): Book[]
{
return this.repository.getBooks();
}

deleteBook(id: number): void
{
if(confirm("Are you sure?") && (id !== undefined))
{
this.repository.deleteBook(id);
}
else
{
window.location.reload(); //Refresh fix
this.router.navigateByUrl('/admin/main/books');
}
}

addBook(): void
{
//this.router.navigateByUrl('/admin/main/books/a/add');
}

editBook(id: number): void
{
  this.router.navigateByUrl('/admin/main/books/edit/' + id);
}

addBookToCart(book: Book): void
{
  //This should go back
this.cart.addLine(book);
//this.location.back(); // Cannot be this because when I add a book, it goes back to this page. 
//this.router.navigateByUrl('/admin/main/orders/add');
}

}
