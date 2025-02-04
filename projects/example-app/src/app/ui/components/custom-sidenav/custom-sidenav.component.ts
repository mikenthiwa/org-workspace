import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItems {
  icon: string;
  label: string;
  route: string;
  path: string;
  isFeatureEnabled: boolean;
}

@Component({
  selector: 'my-org-custom-sidenav',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSidenavComponent {
  currentRoute = input<string>('');
  isCollapsed = input<boolean>();
  menuItems: InputSignal<MenuItems[]> = input<MenuItems[]>([]);
  switchTab = output<string>();
}
