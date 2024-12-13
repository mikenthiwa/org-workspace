import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'my-org-access-layout',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './access-layout.component.html',
  styleUrl: './access-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessLayoutComponent {}
