import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { StoreModule } from '@ngrx/store';
import { cartReducer, metaReducerLocalStorage } from './store/reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './MyComponents/login-page/login-page.component';
import { RegisterPageComponent } from './MyComponents/register-page/register-page.component';
import { ResetPasswordPageComponent } from './MyComponents/reset-password-page/reset-password-page.component';
import { EventListingComponent } from './MyComponents/event-listing/event-listing.component';
import { EventDetailsComponent } from './MyComponents/event-listing/event-details/event-details.component';
import { TicketListingComponent } from './MyComponents/ticket-listing/ticket-listing.component';
import { TicketDetailsComponent } from './MyComponents/ticket-details/ticket-details.component';

import { AdminLoginComponent } from './MyComponents/admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartsModule } from 'ng2-charts';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { TicketBoardComponent } from './MyComponents/dashboard/ticket-board/ticket-board.component';
import { UserBoardComponent } from './MyComponents/dashboard/user-board/user-board.component';
import { AddUserComponent } from './MyComponents/dashboard/user-board/add-user/add-user.component';
import { AddEventComponent } from './MyComponents/dashboard/add-event/add-event.component';
import { AddTicketComponent } from './MyComponents/dashboard/ticket-board/add-ticket/add-ticket.component';
import { EditEventComponent } from './MyComponents/dashboard/edit-event/edit-event.component';
import { EditTicketComponent } from './MyComponents/dashboard/ticket-board/edit-ticket/edit-ticket.component';
import { EditUserComponent } from './MyComponents/dashboard/user-board/edit-user/edit-user.component';
import { TicketCategoryComponent } from './MyComponents/dashboard/ticket-board/ticket-category/ticket-category.component';
import { EditCatComponent } from './MyComponents/dashboard/ticket-board/ticket-category/edit-cat/edit-cat.component';
import { AddCatComponent } from './MyComponents/dashboard/ticket-board/ticket-category/add-cat/add-cat.component';
import { NavComponent } from './MyComponents/dashboard/nav/nav.component';
import { EventBoardComponent } from './MyComponents/dashboard/event-board/event-board.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { NgPopupsModule } from 'ng-popups';
import { CartComponent } from './MyComponents/cart/cart.component';
import { CheckoutComponent } from './MyComponents/checkout/checkout.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ResetPasswordPageComponent,
    EventListingComponent,
    EventDetailsComponent,
    TicketListingComponent,
    TicketDetailsComponent,
    AdminLoginComponent,
    DashboardComponent,
    NavbarComponent,
    TicketBoardComponent,
    UserBoardComponent,
    AddUserComponent,
    AddEventComponent,
    AddTicketComponent,
    EditEventComponent,
    EditTicketComponent,
    EditUserComponent,
    TicketCategoryComponent,
    EditCatComponent,
    AddCatComponent,
    NavComponent,
    EventBoardComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule,
    NgPopupsModule.forRoot(),
    StoreModule.forRoot({ cartEntries: cartReducer }, { metaReducers: [ metaReducerLocalStorage ] }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,

     useClass: HttpErrorInterceptor,

     multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
