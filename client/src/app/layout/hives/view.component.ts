import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';

const HIVE = gql`
query hive($id: Int!) {
    hive(id: $id) {
        id
        name
  }
}
`;
@Component({
  selector: 'app-hive',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']

})
export class ViewComponent implements OnInit {

    hive: any;
    hive_id:number;

  constructor(
      private apollo: Apollo,
      private route: ActivatedRoute
      ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.hive_id = parseInt(params.id));


    this.apollo
    .watchQuery({
      query: HIVE,
      variables: {
          id: this.hive_id
      },
    })
    .valueChanges.subscribe((result: any) => {
        this.hive = result.data.hive;
    });
  }

}
