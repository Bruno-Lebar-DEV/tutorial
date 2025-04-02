import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoModule, PoPageAction, PoSwitchLabelPosition } from '@po-ui/ng-components';

@Component({
  selector: 'app-settings',
  imports: [PoModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  title: string = 'Settings';
  description: string = 'This is an example of a settings component in Angular.';

  theme: PoSwitchLabelPosition = PoSwitchLabelPosition.Right;
  language: string = 'en';

  actionsSettings: Array<PoPageAction> = [
    { label: 'Save', action: () => this.saveSettings() },
    { label: 'Cancel', action: () => this.cancelSettings() }
  ];

  languageOptions: Array<{ value: string, label: string }> = [
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'es', label: 'Spanish' }
  ];

  ngOnInit(): void {

    if (localStorage.getItem('theme') === 'dark') {
      alert('Dark mode is enabled');
      this.theme = PoSwitchLabelPosition.Left;
    } else {
      alert('Dark mode is disabled');
      this.theme = PoSwitchLabelPosition.Right;
    }

    this.language = localStorage.getItem('language') || 'en';
  }

  saveSettings(): void { }
  cancelSettings(): void { }
  toggleDarkMode(): void { }
  onLanguageChange(): void { }
}
