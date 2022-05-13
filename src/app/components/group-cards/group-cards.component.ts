import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-cards',
  templateUrl: './group-cards.component.html',
  styleUrls: ['./group-cards.component.scss'],
})
export class GroupCardsComponent implements OnInit {
  @Input() text = ''; // decorate the property with @Input()
  @Input() isProgressBar = true;
  @Input() cardList: any;
  @Input() cardCol3 = true;

  getAhead = 'Get Ahead';

  constructor() {}

  ngOnInit(): void {}
}
