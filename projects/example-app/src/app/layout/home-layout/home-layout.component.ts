import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
  ViewChild,
  OnInit,
  inject,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomSidenavComponent } from '../../ui/custom-sidenav/custom-sidenav.component';
import { FeatureFlagService } from '../../core/feature-flag/feature-flag.service';

interface MenuItems {
  icon: string;
  label: string;
  route: string;
  path: string;
  isFeatureEnabled: boolean;
}

@Component({
  selector: 'my-org-home-layout',
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    CustomSidenavComponent,
    FormsModule,
    NgClass,
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent implements OnInit {
  private featureFlagService: FeatureFlagService = inject(FeatureFlagService);
  currentRoute: WritableSignal<string> = signal<string>('');
  isCollapsed: WritableSignal<boolean> = signal<boolean>(false);
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isMobile: WritableSignal<boolean> = signal<boolean>(false);
  menuItems: WritableSignal<MenuItems[]> = signal<MenuItems[]>([
    {
      icon: 'home',
      label: 'Home',
      route: '/home',
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
      icon: 'analytics',
      label: 'Analytics',
      route: '/analytics',
      path: 'analytics',
      isFeatureEnabled: this.featureFlagService.isEnabled('analytics'),
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: '/settings',
      path: 'settings',
      isFeatureEnabled: this.featureFlagService.isEnabled('settings'),
    },
  ]);

  constructor(
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver
  ) {
    const [urlSegment] = this.route.snapshot.url;
    this.currentRoute.set(urlSegment?.path);
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((screenSize) => {
        if (screenSize.matches) {
          this.isMobile.set(true);
        } else {
          this.isMobile.set(false);
        }
      });
  }

  toggleSidenav(): void {
    if (this.isMobile()) {
      this.sidenav.toggle();
      this.isCollapsed.set(false);
    } else {
      this.isCollapsed.set(!this.isCollapsed());
    }
  }
}
