import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import packageInfo from '../../package.json';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarAction,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = `TUTORIAL PO-UI v${packageInfo.version}`;
  isDarkTheme = false; // Controle do tema

  actionsToolbar: Array<PoToolbarAction> = [
  
  ];

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home', shortLabel: 'home', icon: 'po-icon-home' },
    {
      label: 'Examples', shortLabel: 'examples', icon: 'po-icon-list', subItems: [
        { label: 'page', link: '/examples/example-page', shortLabel: 'example-page' },
        { label: 'Table Component', link: '/examples/example-table', shortLabel: 'example-table' },
      ]
    },
    {
      label: 'Projects', shortLabel: 'projects', icon: 'po-icon-folder', subItems: [
        { label: 'to-do list', link: '/projects/project-to-do-list', shortLabel: 'project-to-do-list' },
        { label: 'dashboard', link: '/projects/project-dashboard', shortLabel: 'project-dashboard' },
        { label: 'CRUD', link: '/projects/project-crud', shortLabel: 'project-crud' },
      ]
    },
    { label: 'FAQ', link: '/faq', shortLabel: 'faq', icon: 'po-icon-help' },
    { label: 'Settings', link: '/settings', shortLabel: 'settings', icon: 'po-icon-settings' },
    { label: 'Exit', link: '/exit', shortLabel: 'exit', icon: 'po-icon-exit', action: this.Exit.bind(this) },
  ];

  
  Exit(): void {
    alert('Exiting the application...');
    // Adicione lógica adicional, como redirecionamento ou logout
  }


}
