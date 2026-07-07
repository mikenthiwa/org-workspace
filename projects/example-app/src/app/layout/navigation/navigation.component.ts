import { Component, inject, signal, WritableSignal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FeatureFlagService } from '../../core/feature-flag/feature-flag.service';

interface MenuItems {
  icon: string;
  label: string;
  route: string;
  path: string;
  isFeatureEnabled: boolean;
}

@Component({
  selector: 'my-org-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
  ],
})
export class NavigationComponent {
  private featureFlagService: FeatureFlagService = inject(FeatureFlagService);
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  menuItems: WritableSignal<MenuItems[]> = signal<MenuItems[]>([
    {
      icon: 'home',
      label: 'Home',
      route: '/',
      path: 'home',
      isFeatureEnabled: this.featureFlagService.isEnabled('home'),
    },
    {
      icon: 'explore',
      label: 'Explore',
      route: '/lifestyle',
      path: 'lifestyle',
      isFeatureEnabled: this.featureFlagService.isEnabled('lifestyle'),
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: '/settings',
      path: 'settings',
      isFeatureEnabled: this.featureFlagService.isEnabled('settings'),
    },
  ]);
}
