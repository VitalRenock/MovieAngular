import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listMenu: NbMenuItem[] = []

  constructor() { }

  ngOnInit(): void {

    // Liens pour le Menu
    this.listMenu = [
      {
        title: 'User', icon: 'people-outline', children: [
          { link: '/user/authentication', title: 'Authentication', icon: 'edit' },
          { link: '/user/register', title: 'Register', icon: 'save' }
        ]
      },
      { link: '/movie/list', title: 'Movie', icon: 'film-outline' }
    ]
  }

}
