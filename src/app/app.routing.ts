import { Route, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes = [
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'home',component:HomeComponent}
];

export const AppRouting = RouterModule.forRoot(appRoutes,{
    useHash:true
});

