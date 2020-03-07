import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SubComponent } from './pages/sub/sub.component';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  { path: 'admin', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'admin/sub', component: SubComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
