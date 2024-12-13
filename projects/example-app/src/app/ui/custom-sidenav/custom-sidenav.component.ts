import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
  WritableSignal,
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
  menuItems: WritableSignal<MenuItems[]> = signal<MenuItems[]>([
    {
      icon: 'home',
      label: 'Home',
      route: '/home',
      path: 'home',
    },
    {
      icon: 'explore',
      label: 'Explore',
      route: '/lifestyle',
      path: 'lifestyle',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: '/analytics',
      path: 'analytics',
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: '/settings',
      path: 'settings',
    },
  ]);
  switchTab = output<string>();
}
