import {
  Component,
} from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'my-org-dashboard-layout',
  imports: [
    NavigationComponent,
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export class DashboardLayout {
}
