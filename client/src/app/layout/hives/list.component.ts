import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-hives',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  apiaries: any[];

  constructor(
      private Apollo: Apollo,
      private Router: Router
    ) { }

  ngOnInit() {
    this.Apollo
    .watchQuery({
      query: gql`
        {
          apiaries{
              id
              name
              hives {
                  id
                  name
              }
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
        this.apiaries = result.data.apiaries;
    });
  }

  view(id) { this.Router.navigate(['/hives/' + id]); }

}
