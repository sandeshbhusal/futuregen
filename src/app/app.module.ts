import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Typed } from 'typed.js';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes:Routes = [
	{ path: '', redirectTo: 'menu', pathMatch: 'full'},
	{ path: 'home', redirectTo:'menu', pathMatch:'full' },
	{ path: 'contact-us', component: ContactUsComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'menu', component: MenuComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListHotelsComponent,
	ContactUsComponent,
	LoginComponent,
	HomeComponent,
	MenuComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes),
	BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
