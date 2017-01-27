import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const appRoutes = [
{
  path: '',
  component: MainPageComponent
},
{
  path: "members/:key",
  component: MemberDetailComponent
}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
