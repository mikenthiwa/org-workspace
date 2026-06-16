import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef, signal,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { LoginFormDetailModel } from '../model/login.model';

@Component({
  selector: 'my-org-login-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  detail: InputSignal<LoginFormDetailModel> = input({
    type: 'username',
    title: 'Enter your username to continue',
    label: 'username',
    button: 'continue',
  });

  submitForm: OutputEmitterRef<string> = output<string>();
  formValue = signal('');

  onsubmit(): void {
    this.submitForm.emit(this.formValue());
    this.formValue.set('');
  }
}
