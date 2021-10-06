import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { sideBarData } from 'src/app/models/sideBarData';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {

  title:string = '';
  sideBarData = sideBarData;

  constructor(private router:Router) {
    this.router.events.pipe(filter((event:any) => event instanceof NavigationEnd))
    .subscribe(() => {
      let endUrlPart = this.router.url.split('?')[0].split('/').pop();
      this.title = endUrlPart ? endUrlPart.replace(/-/g, ' ') : '';
    });
   }

  ngOnInit(): void {
  }

}
