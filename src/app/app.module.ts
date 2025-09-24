import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // 👈 Agora vai funcionar!
import { AppComponent } from './app.component';
import { HomeComponent } from './views/public/home/home.component';
import { LoginComponent } from './views/public/login/login.component';
import { NavbarComponent } from './templates/components/navbar/navbar.component';
import { CardImovelComponent } from './templates/components/card-imovel/card-imovel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './templates/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    CardImovelComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }