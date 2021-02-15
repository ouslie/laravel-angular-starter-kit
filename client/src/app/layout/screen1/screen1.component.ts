import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-hives',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {

  apiaries: any[];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
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

}
