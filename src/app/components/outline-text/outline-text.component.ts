import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-outline-text',
  templateUrl: './outline-text.component.html',
  styleUrls: ['./outline-text.component.scss'],
})
export class OutlineTextComponent implements OnInit {
  @Input() text = '';
  @Input() changeSize = true;

  constructor() {}

  ngOnInit(): void {}
}
