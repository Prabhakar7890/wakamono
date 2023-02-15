import { Component, OnInit } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  request?:string;
  list:string[]=[
    "Nagaland","Mizoram","Pahad",
    "Nagasaki","Maharastra","Pajero",
    "Nizambad","Manipur","Panini"
  ]

}
