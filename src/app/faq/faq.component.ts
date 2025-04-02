import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { PoAccordionItemComponent, PoModule, PoTagType } from '@po-ui/ng-components';

@Component({
  selector: 'app-faq',
  imports: [PoModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements AfterContentInit {
  @ViewChild(PoAccordionItemComponent, { static: true })
  questionOne!: PoAccordionItemComponent;


  title: string = 'PO UI FAQ';
  description: string = 'Frequently Asked Questions about PO UI.';
  successTag: PoTagType = PoTagType.Success;
  warningTag: PoTagType = PoTagType.Warning;
  dangerTag: PoTagType = PoTagType.Danger;
  infoTag: PoTagType = PoTagType.Info;


  ngAfterContentInit() {
    this.questionOne.expand();
  }
}
