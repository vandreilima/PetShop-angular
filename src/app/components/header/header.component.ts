import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() titulo1 = ""
  @Input() titulo2 = ""
  @Input() titulo3 = ""

  ngOnInit() {
  }

}
