import { Component } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  imports: [PoModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string = 'Home Page';
  description: string = 'This is the home page of the application. You can navigate to different sections from here.';
}
