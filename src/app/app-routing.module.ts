import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './MyComponents/admin-login/admin-login.component';
import { CartComponent } from './MyComponents/cart/cart.component';
import { CheckoutComponent } from './MyComponents/checkout/checkout.component';
import { AddEventComponent } from './MyComponents/dashboard/add-event/add-event.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { EditEventComponent } from './MyComponents/dashboard/edit-event/edit-event.component';
import { EventBoardComponent } from './MyComponents/dashboard/event-board/event-board.component';
import { AddTicketComponent } from './MyComponents/dashboard/ticket-board/add-ticket/add-ticket.component';
import { EditTicketComponent } from './MyComponents/dashboard/ticket-board/edit-ticket/edit-ticket.component';
import { TicketBoardComponent } from './MyComponents/dashboard/ticket-board/ticket-board.component';
import { AddCatComponent } from './MyComponents/dashboard/ticket-board/ticket-category/add-cat/add-cat.component';
import { EditCatComponent } from './MyComponents/dashboard/ticket-board/ticket-category/edit-cat/edit-cat.component';
import { TicketCategoryComponent } from './MyComponents/dashboard/ticket-board/ticket-category/ticket-category.component';
import { AddUserComponent } from './MyComponents/dashboard/user-board/add-user/add-user.component';
import { EditUserComponent } from './MyComponents/dashboard/user-board/edit-user/edit-user.component';
import { UserBoardComponent } from './MyComponents/dashboard/user-board/user-board.component';
import { EventDetailsComponent } from './MyComponents/event-listing/event-details/event-details.component';
import { EventListingComponent } from './MyComponents/event-listing/event-listing.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginPageComponent } from './MyComponents/login-page/login-page.component';
import { RegisterPageComponent } from './MyComponents/register-page/register-page.component';
import { ResetPasswordPageComponent } from './MyComponents/reset-password-page/reset-password-page.component';
import { TicketDetailsComponent } from './MyComponents/ticket-details/ticket-details.component';


const routes: Routes = [
  { path: 'events', component: EventListingComponent},
  { path: '', component: HomeComponent},
  //{ path: 'events', component: EventListingComponent},
  { path: 'login-page', component: LoginPageComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'reset-password-page', component: ResetPasswordPageComponent },
  { path: 'event-details/:event-id', component: EventDetailsComponent},
  { path: 'ticket-details', component: TicketDetailsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'event-dashboard', component: EventBoardComponent},
  { path: 'ticket-dashboard', component: TicketBoardComponent},
  { path: 'user-dashboard', component: UserBoardComponent},
  { path: 'addUser', component: AddUserComponent},
  { path: 'addEvent', component: AddEventComponent},
  { path: 'addTicket', component: AddTicketComponent},
  { path: 'addTicketCat', component: AddCatComponent},
  { path: 'editEvent', component: EditEventComponent},
  { path: 'editTicket', component: EditTicketComponent},
  { path: 'editTicketCat', component: EditCatComponent},
  { path: 'editUser', component: EditUserComponent},
  { path: 'TicketCat', component: TicketCategoryComponent},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
