import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const appRoutes = [
{
  path: '',
  component: MainPageComponent
}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
