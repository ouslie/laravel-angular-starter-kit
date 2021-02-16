import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-hive',
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {

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
