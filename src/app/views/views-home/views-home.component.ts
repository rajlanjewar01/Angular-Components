import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22, label: 'Faves' },
    { value: 34, label: 'Views' },
    { value: 40, label: 'Members'}
  ];

  items = [
    {
      image: 'assets/images/casual-life-3d-likes.png',
      title: '3d likes',
      description: 'working on laptop'
    },
    {
      image: 'assets/images/casual-life-3d-young-man-working-on-laptop.png',
      title: 'man working on laptop',
      description: 'casual life 3d young man working on laptop'
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
