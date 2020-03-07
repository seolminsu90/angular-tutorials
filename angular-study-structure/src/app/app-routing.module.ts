import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './shared/components/main/main.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './shared/components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full' // 경로가 사용되지 않은 모든 URL
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
