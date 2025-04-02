import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { PoBreadcrumb, PoModule } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { ExamplePageService } from './example-page.service';

@Component({
  selector: 'app-example-page',
  imports: [PoModule, FormsModule],
  templateUrl: './example-page.component.html',
  styleUrl: './example-page.component.css'
})
export class ExamplePageComponent  implements OnInit {
  @ViewChild('formShare', { static: true })
  formShare!: NgForm;
  @ViewChild(PoModalComponent, { static: true })
  poModal!: PoModalComponent;

  title: string = 'Example Page';
  description: string = 'This is an example of a page component in Angular.';

  columns: Array<PoTableColumn> = new Array();
  email: string = "";
  isSubscribed: boolean = false;
  items: Array<object> = new Array();

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    { label: 'GitHub', url: 'https://github.com/po-ui/po-angular' },
    { label: 'Components', url: '/documentation' },
    { label: 'Disable notification', action: this.disableNotification.bind(this), disabled: () => this.isSubscribed },
    { label: 'Enable notification', action: this.enableNotification.bind(this), disabled: () => !this.isSubscribed }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  constructor(
    private poNotification: PoNotificationService,
    private examplePageService: ExamplePageService
  ) {}

  ngOnInit(): void {
    this.columns = this.examplePageService.getColumns();
    this.items = this.examplePageService.getItems();
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(`Webpage shared successfully to: ${this.email}.`);
    } else {
      this.poNotification.error(`Email invalid.`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }

  private enableNotification() {
    this.isSubscribed = false;
  }
}