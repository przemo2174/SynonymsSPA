import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SynonymsComponent } from './synonyms/synonyms.component';

const routes: Routes = [
  { path: '', redirectTo: 'synonyms', pathMatch: 'full' },
  { path: 'synonyms', component: SynonymsComponent }
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'match', loadChildren: './match-configuration/match-configuration.module#MatchConfigurationModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
