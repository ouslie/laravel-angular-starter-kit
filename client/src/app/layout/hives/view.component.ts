import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import moment from "moment";
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {MatFabMenu} from '@angular-material-extensions/fab-menu';

const HIVE = gql`
query hive($id: Int!) {
    hive(id: $id) {
        id
        name
        colony {
            id
            birthdate_queen
            type
            marqued
            last_see
            last_measures {
                created_at
                temperature
                humidity
                weight
            }
        }
  }
}
`;

const UPDATE_COLONY = gql`
  mutation colony_update($id: Int! $type: String $marqued: String) {
    colony_update(id: $id type:$type marqued:$marqued) {
      id
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
    editMode:boolean = false;

    fabButtonsRandom: MatFabMenu[] = [
        {
          id: 1,
          icon: 'create',
        },
        {
          id: 2,
          icon: 'mail'
        },
        {
          id: 3,
          icon: 'file_copy'
        },
        {
          id: 4,
          icon: 'phone'
        },
      ];
  constructor(
      private apollo: Apollo,
      private route: ActivatedRoute,
      private Router: Router
      ) { }



      displayedColumns = ['name'];

      fakeProducts = [
        {name: 'Hydrogen'},
        // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      ];
  ngOnInit() {
    this.route.params.subscribe(params => this.hive_id = parseInt(params.id));
    this.load();
  }

  load() {
    this.apollo.watchQuery({
      query: HIVE,
      variables: {
          id: this.hive_id
      },
    })
    .valueChanges.subscribe((result: any) => {
        this.hive = result.data.hive;
    });
  }


  selectedAction(event) {
      if(event = 1 ){
          this.Router.navigate(['/inspection/add/' + this.hive_id]);
      }
  }


}
