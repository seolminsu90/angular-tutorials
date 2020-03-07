import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SubComponent } from './pages/sub/sub.component';

const routes: Routes = [
  { path: 'admin', component: MainComponent },
  { path: 'admin/sub', component: SubComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
