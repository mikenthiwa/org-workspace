import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { BusHeaderModel } from '../../../../../core/lifestyle/bus/model/bus-header.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'my-org-bus-header',
  imports: [MatDivider, TitleCasePipe],
  templateUrl: './bus-header.component.html',
  styleUrl: './bus-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusHeaderComponent {
  headerDetail: InputSignal<BusHeaderModel> = input.required<BusHeaderModel>();
}
