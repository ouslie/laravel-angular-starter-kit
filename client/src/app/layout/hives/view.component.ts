import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';
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
          icon: 'create'
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
      private fb: FormBuilder
      ) { }

      ColonyForm = this.fb.group({
        color: ['', Validators.required],
        birthdate_queen: ['', Validators.required],
        type:  ['', Validators.required]
      } );

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
        this.initForm();

    });
  }

  initForm() {
    this.ColonyForm.patchValue({
        birthdate_queen: moment(this.hive.colony.birthdate_queen).format('YYYY-MM-DD'),
        type: this.hive.colony.type,
        color: this.hive.colony.marqued
    });
    this.ColonyForm.disable();
  }

  edit() {
      this.editMode = true;
      this.ColonyForm.enable();
  }
  cancel() {
    this.editMode = false;
    this.initForm();
  }

  save() {
      this.apollo.mutate({
            mutation: UPDATE_COLONY,
            variables: {
                id: parseInt(this.hive.colony.id),
                type: this.ColonyForm.value.type,
                marqued: this.ColonyForm.value.color,
            }
        }).subscribe(({ data }) => {
            this.editMode = false;
            this.ColonyForm.disable();
        },(error) => {
            console.log('there was an error sending the query', error);
        });
  }

}
