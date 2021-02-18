import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import moment from "moment";
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

const INSPECTION = gql`
query inspection($id: Int!) {
    inspection(id: $id) {
        id
        date
        notes
        status
        need_attention
        agressive
        view_queen
        view_cell
        frame_brood
        frame_honey
        frame_pollen
  }
}`;


const CREATE = gql`
  mutation inspection_create($hive_id: Int! $inspection:inspectionInput) {
    inspection_create(hive_id: $hive_id inspection:$inspection) {
      id
    }
  }
`;


const UPDATE = gql`
  mutation inspection_update($id: Int! $inspection:inspectionInput) {
    inspection_update(id: $id inspection:$inspection) {
      id
    }
  }
`;

@Component({
    selector: 'app-inspection',
    templateUrl: './inspection.component.html',
    styleUrls: ['./inspection.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class InspectionComponent implements OnInit {
    module = {
        color: '#43a047'
    };

    hive_id:number;
    inspection_id:number;
    inspection:any;
    mode:string;

    constructor(
        private fb: FormBuilder,
        private Apollo: Apollo,
        private Route: ActivatedRoute,
        private _snackBar: MatSnackBar,
        ) {
            this.Route.params.subscribe(params => this.hive_id = parseInt(params.hive_id));
            this.Route.params.subscribe(params => this.inspection_id = parseInt(params.inspection_id));

    }

    inspectionForm = this.fb.group({
            need_attention: [''],
            notes:  [''],
            status: [''],
            date:   [''],
            agressive:  [''],
            view_queen:[''],
            view_cell:[''],
            frame_brood:[''],
            frame_honey:[''],
            frame_pollen:[''],
            // honey:[''],
            // pollen:[''],
            // stock:[''],
      });

    ngOnInit() {
        if(this.hive_id) {
            this.mode = "CREATE";
        }
        if(this.inspection_id) {
            this.mode = "VIEW";
            this.load();
        }
        console.log(this.mode);
    }

    setMode(mode) {
        this.mode = mode;
        if('UPDATE' === mode)  { this.inspectionForm.enable();}
    }

    load() {
        this.Apollo.watchQuery({
            query: INSPECTION,
            variables: {
                id: this.inspection_id
            },
        })
        .valueChanges.subscribe((result: any) => {
            this.inspection = result.data.inspection;
            this.initForm();
        });
    }

    initForm() {
        this.inspectionForm.patchValue(this.inspection);
        this.inspectionForm.disable();
      }


    save() {
        var params;
        if(this.mode == 'UPDATE'){
            params = {id: this.inspection_id}
        } else {
            params = {hive_id: this.hive_id}
        }
        this.Apollo.mutate({
            mutation: (this.mode ==='UPDATE' ? UPDATE : (this.mode ==='CREATE' ? CREATE : null)),
            variables: {
                ...params,
                inspection: this.inspectionForm.value
            }
        }).subscribe(({ data }) => {
            this.inspectionForm.disable();
            this.mode = 'VIEW';
            this.openSnackBar();
        },(error) => {
            console.log('there was an error sending the query', error);
        });
    }

    openSnackBar() {
        this._snackBar.open('Enregistré', null, {
          duration: 1500,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
    }
}
