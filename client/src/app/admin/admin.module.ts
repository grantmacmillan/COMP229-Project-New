import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { AdminComponent } from "./admin.component";
import { OrderTableComponent } from './order-table/order-table.component';
import { BookEditorComponent } from './book-editor/book-editor.component';
import { BookTableComponent } from './book-table/book-table.component';
import { OrderEditorComponent } from './order-editor/order-editor.component';
import { OrderAditorComponent } from './order-aditor/order-aditor.component';
import { BookTableEditComponent } from './book-table-edit/book-table-edit.component';
import { RegisterComponent } from './register/register.component';

const routing = RouterModule.forChild([
    { path: 'auth', component: AuthComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'main', component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: 'books/:mode/:id', component: BookEditorComponent, data: {title: 'Edit Book'}, canActivate: [AuthGuard]},
            { path: 'books/:mode', component: BookEditorComponent, data: {title: 'Add Book'}, canActivate: [AuthGuard]},
            { path: 'books', component: BookTableComponent, data: {title: 'Book Table'}, canActivate: [AuthGuard]},

            { path: 'page-edit/:mode/:id', component: BookTableEditComponent, data: {title: 'Edit Book'}, canActivate: [AuthGuard]},
            { path: 'page-edit/:mode', component: BookTableEditComponent, data: {title: 'Book Table'}, canActivate: [AuthGuard]},
            { path: 'page-edit', component: BookTableEditComponent, data: {title: 'Book Table'}, canActivate: [AuthGuard]},
           

            { path: 'orders', component: OrderTableComponent, data: {title: 'Order Table'}, canActivate: [AuthGuard]},
            { path: 'orders/:mode', component: OrderEditorComponent, data: {title: 'Add Order'}, canActivate: [AuthGuard]},
            { path: 'orders/:mode/:id', component: OrderAditorComponent, data: {title: 'Edit Order'}, canActivate: [AuthGuard]}, //need to have the auth guard
            { path: '**', redirectTo: 'book-list'}]
    },
    { path: '**', redirectTo: 'auth' },
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers:[AuthGuard],
    declarations: [AuthComponent, AdminComponent, OrderTableComponent, BookEditorComponent, BookTableComponent, OrderEditorComponent, OrderAditorComponent, BookTableEditComponent, RegisterComponent]
})
export class AdminModule {}