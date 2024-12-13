import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { LoginFormDetailModel } from '../model/login.model';

@Component({
  selector: 'my-org-login-page',
  imports: [LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  loginFormDetails: WritableSignal<LoginFormDetailModel> = signal({
    type: 'username',
    title: 'Enter your username to continue',
    label: 'username',
    button: 'continue',
  });
  username: WritableSignal<string> = signal('');
  password: WritableSignal<string> = signal('');

  submitForm(value: string): void {
    const { type } = this.loginFormDetails();
    if (type === 'username') {
      this.username.set(value);
      this.loginFormDetails.set({
        type: 'password',
        title: 'Enter your password to continue',
        label: 'password',
        button: 'login',
      });
    } else {
      this.password.set(value);
    }
  }
}
