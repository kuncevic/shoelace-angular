import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppDrawerExampleComponent } from './app-drawer-example/app-drawer-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AppDrawerExampleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'shoelace-angular';
}
