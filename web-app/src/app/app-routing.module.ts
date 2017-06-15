import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components being navigated to
import { HubComponent } from "./hub/index";


const routes: Routes = [
      { path: 'hub', component: HubComponent},
    ]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
export const routingComponents = [ HubComponent ]