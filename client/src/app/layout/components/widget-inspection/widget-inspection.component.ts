import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Apollo, gql} from 'apollo-angular';

const INSPECTION = gql`
query inspections($colony_id: Int!) {
    inspections(colony_id: $colony_id) {
        id
        date
        status
        notes
  }
}
`;


@Component({
  selector: 'widget-inspection',
  templateUrl: './widget-inspection.component.html',
})

export class WidgetInspectionComponent implements OnInit {
    @Input() colony_id: number;

    widget = {
        color: '#43a047'
    };
    inspections = null;
    displayedColumns = ['date', 'status', 'actions'];

    constructor(private Apollo: Apollo, private Router: Router) { }

    ngOnInit() {
        this.Apollo.watchQuery({
            query: INSPECTION,
            variables: {
                colony_id: this.colony_id
            },
        })
        .valueChanges.subscribe((result: any) => {
            this.inspections = result.data.inspections;
        },(error) => {
            console.log('there was an error sending the query', error);
        });
    }

//   view(id) { this.Router.navigate(['/hives/' + id]); }

}
