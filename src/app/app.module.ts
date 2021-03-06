import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule,
  MatCardModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatPaginatorModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SearchUsersService } from './search-users.service';
import { FooterComponent } from './footer/footer.component';
import { UserInfoComponent } from './user-info/user-info.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    FooterComponent,
    UserInfoComponent
  ],
  entryComponents: [
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatPaginatorModule
  ],
  providers: [SearchUsersService],
  bootstrap: [AppComponent]
})

export class AppModule { }
