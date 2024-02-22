import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from "@angular/material/button";
import { MatFormField, MatHint, MatInput, MatLabel } from "@angular/material/input";
import { CobaltConfig } from '@cobaltio/ngx-cobalt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // CommonModule,
    CobaltConfig,
    MatButton,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sample';
  token = '';
  ready = false;

  setToken(event: KeyboardEvent) {
    this.token = (event.target as HTMLInputElement).value;
  }

  saveToken() {
    if (this.ready) {
      this.token = "";
      this.ready = false;
    } else {
      this.ready = true;
    }
  }
}
