import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; //Necesario para usar formGroup y formControl
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './pages/results/results.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { OrganicResultsComponent } from './pages/organic-results/organic-results.component';
import { InlineProductsComponent } from './pages/inline-products/inline-products.component';
import { InlineShoppingComponent } from './pages/inline-shopping/inline-shopping.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { LocalResultsComponent } from './pages/local-results/local-results.component';
import { MapComponentComponent } from './components/map-component/map-component.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { GridComponent } from './components/grid/grid.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ResultsComponent,
    SideMenuComponent,
    OrganicResultsComponent,
    InlineProductsComponent,
    InlineShoppingComponent,
    ComprasComponent,
    LocalResultsComponent,
    MapComponentComponent,
    AcercaDeComponent,
    GridComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
