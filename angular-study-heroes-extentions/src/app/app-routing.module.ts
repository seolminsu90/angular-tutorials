import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { FormTestComponent } from './form/form-test.component';
import { FormTestComponent as FormTestComponent2 } from './form2/form-test.component';
import { DirectiveTestComponent } from './directive/directive-test.component';
import { PipeTestComponent } from './pipe/pipe-test.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: DetailsComponent},
  { path: 'form', component: FormTestComponent},
  { path: 'form2', component: FormTestComponent2},
  { path: 'directive', component: DirectiveTestComponent},
  { path: 'pipe', component: PipeTestComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
