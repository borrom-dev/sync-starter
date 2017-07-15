import {Routes} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {ClientComponent} from "./client/client.component";
export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    component: ClientComponent
  }
];
