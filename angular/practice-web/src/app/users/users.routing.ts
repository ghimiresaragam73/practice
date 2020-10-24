import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProfileComponent } from './profile/profile.component';

const userRoutes: Routes = [
    {
        path: '',
        component: DashbordComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})

export class UserRoutingModule {

}