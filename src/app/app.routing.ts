import { Route, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';

const appRoutes:Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {
        path:'users',
        loadChildren: () => UserModule
    },
    {path:'**',component:NotFoundComponent}
];

export const AppRouting = RouterModule.forRoot(appRoutes,{
    useHash:true
});

