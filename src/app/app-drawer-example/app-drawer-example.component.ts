import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
//import '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/drawer/drawer';
import { SlDrawer } from '@shoelace-style/shoelace';

@Component({
  selector: 'app-drawer-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-drawer-example.component.html',
  styleUrls: ['./app-drawer-example.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppDrawerExampleComponent {
  @ViewChild('drawer')
  drawer?: ElementRef<SlDrawer>;
  showDrawer() {
    // use nativeElement to access Shoelace components
    this.drawer?.nativeElement.show();
  }
}
