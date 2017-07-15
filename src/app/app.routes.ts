import {Routes} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {ClientComponent} from "./client/client.component";
import {RailsComponent} from "./rails/rails.component";
import {AndroidsComponent} from "./androids/androids.component";
import {AngularsComponent} from "./angulars/angulars.component";
import {NotFoundComponent} from "./not-found/not-found.component";
export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'rail',
        component: RailsComponent
      },
      {
        path: 'android',
        component: AndroidsComponent
      },
      {
        path: 'angular',
        component: AngularsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];
