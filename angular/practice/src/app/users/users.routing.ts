import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const userRoute: Routes = [{
    path: '',
    component: DashboardComponent
},
{
    path: 'profile',
    component: ProfileComponent
},
{
    path: 'change-password',
    component: ChangePasswordComponent
}
]

@NgModule({
    imports: [
        RouterModule.forChild(userRoute)
    ],
    exports: [RouterModule]
})

export class UserRoutingModule{ }