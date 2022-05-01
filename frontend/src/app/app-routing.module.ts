import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { ResultsComponent } from './pages/results/results.component';
import { OrganicResultsComponent } from './pages/organic-results/organic-results.component';
import { InlineProductsComponent } from './pages/inline-products/inline-products.component';
import { InlineShoppingComponent } from './pages/inline-shopping/inline-shopping.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { LocalResultsComponent } from './pages/local-results/local-results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'results', component: ResultsComponent,
    children: [
      { path: 'organic-results', component: OrganicResultsComponent },
      { path: 'inline-products', component: InlineProductsComponent },
      { path: 'inline-shopping', component: InlineShoppingComponent },
      { path: 'shopping', component: ComprasComponent },
      { path: 'map', component: LocalResultsComponent },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
