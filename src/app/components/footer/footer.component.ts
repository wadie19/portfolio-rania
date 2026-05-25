import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  year = new Date().getFullYear();
  stars = [1, 2, 3, 4, 5];

  trackByStar(index: number, star: number): number {
    return star;
  }

}
