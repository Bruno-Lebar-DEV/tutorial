import { Component } from '@angular/core';
import { PoBreadcrumb, PoModule, PoNotificationService, PoTableAction } from '@po-ui/ng-components';
import { ExampleTableService } from './example-table.service';
import { PoLoadingModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-example-table',
  imports: [PoModule, PoLoadingModule],
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.css']
})
export class ExampleTableComponent {
  title: string = 'Table Component';
  description: string = 'This is an example of a table component in Angular.';
  loading = true;

  actions: Array<PoTableAction> = [
  ];

  itensTable: Array<any> = new Array();
  colunasTable: Array<any> = new Array();

  actionsTable: Array<PoTableAction> = [
    { action: this.openEvent.bind(this), icon: 'po-icon-plus', label: 'Details' }
  ];


  openEvent(row: any) {
    console.log('Open');
  }

  constructor(
    private exampleService: ExampleTableService,
    private poNotification: PoNotificationService
  ) { }

  ngOnInit(): void {
    this.colunasTable = this.exampleService.getTableColumns();
    this.itensTable = this.exampleService.getTableData();
    setTimeout(() => {
      this.poNotification.success('Table data loaded successfully!');
      this.loading = false;
    }, 500);

  }

}
