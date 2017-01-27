import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AdminComponent } from './admin/admin.component'

const appRoutes = [
{
  path: '',
  component: MainPageComponent
},
{
  path: 'members/:key',
  component: MemberDetailComponent
},
{
  path: 'add',
  component: AddMemberComponent
},
{
  path: 'admin',
  component: AdminComponent
}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
