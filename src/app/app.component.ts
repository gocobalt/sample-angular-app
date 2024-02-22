import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CobaltConfig } from '@cobaltio/ngx-cobalt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CobaltConfig],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sample';
}
