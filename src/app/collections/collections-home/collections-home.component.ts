import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: 'John', age: 25, job: 'Developer' },
    { name: 'Steve', age: 28, job: 'Designer' },
    { name: 'Mark', age: 24, job: 'Engineer' },
    { name: 'Josh', age: 25, job: 'Engineer' }
  ];
//header configuration array
  headers = [
    {
      key:  'name',
      label: 'Name'
    },
    {
      key: 'age',
      label: 'Age'
    },
    {
      key: 'job',
      label: 'Job'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
