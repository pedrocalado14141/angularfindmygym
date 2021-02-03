import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Add routing to the components 
import { PersonaltrainerComponent } from "./personaltrainer/personaltrainer.component";
import { GymComponent } from "./gym/gym.component";

//Add the routes in the array to write in the Url after http://localhost:4200/...
const routes: Routes = [
{path:'personaltrainers', component:PersonaltrainerComponent},
{path:'gym', component:GymComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
