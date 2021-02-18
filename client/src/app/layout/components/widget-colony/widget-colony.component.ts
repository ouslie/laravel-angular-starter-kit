import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; // First, import Input
import moment from "moment";

import { Router } from '@angular/router';
import {Apollo, gql} from 'apollo-angular';

import { FormBuilder, Validators } from '@angular/forms';

const COLONY = gql`
query colony($colony_id: Int!) {
    colony(colony_id: $colony_id) {
        id
        birthdate_queen
        marqued
        type
        last_see
  }
}
`;

const UPDATE_COLONY = gql`
  mutation colony_update($id: Int! $colony: colonyInput) {
    colony_update(id: $id colony:$colony ) {
      id
    }
  }
`;

@Component({
  selector: 'widget-colony',
  templateUrl: './widget-colony.component.html',
  styleUrls: ['./widget-colony.component.scss']
})

export class WidgetColonyComponent implements OnInit {
    @Input() colony_id: number; // decorate the property with @Input()
    colony:any;

    editMode:boolean = false;

    constructor(
        private Apollo: Apollo,
        private Router: Router,
        private fb: FormBuilder,
        ) {
         }

    ColonyForm = this.fb.group({
        color: ['', Validators.required],
        birthdate_queen: ['', Validators.required],
        type:  ['', Validators.required]
      } );


      ngOnInit() {
        this.Apollo.watchQuery({
            query: COLONY,
            variables: {
                colony_id: this.colony_id
            },
        })
        .valueChanges.subscribe((result: any) => {
            this.colony = result.data.colony;
            this.initForm();
        });
    }

      initForm() {
        this.ColonyForm.patchValue({
            birthdate_queen: moment(this.colony.birthdate_queen).format('YYYY-MM-DD'),
            type: this.colony.type,
            color: this.colony.marqued
        });
        this.ColonyForm.disable();
      }

      edit() {
          this.editMode = true;
          this.ColonyForm.enable();
      }

      save() {
        this.Apollo.mutate({
              mutation: UPDATE_COLONY,
              variables: {
                  id: this.colony_id,
                  colony: this.ColonyForm.value,
              }
          }).subscribe(({ data }) => {
              this.editMode = false;
              this.ColonyForm.disable();
          },(error) => {
              console.log('there was an error sending the query', error);
          });
    }
      cancel() {
        this.editMode = false;
        this.initForm();
      }


//   view(id) { this.Router.navigate(['/hives/' + id]); }

}
