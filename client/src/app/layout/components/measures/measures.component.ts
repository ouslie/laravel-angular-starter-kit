import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Apollo, gql} from 'apollo-angular';

// const INSPECTION = gql`
// query inspections($colony_id: Int!) {
//     inspections(colony_id: $colony_id) {
//         id
//         date
//         status
//         notes
//   }
// }
// `;


@Component({
  selector: 'widget-measures',
  templateUrl: './measures.component.html',
  styleUrls: ['./measures.component.scss'],

})

export class MeasuresInspectionComponent implements OnInit {
    @Input() colony_id: number;
    @Input() sensor: string;
    view: any[] = [700, 300];

    widget = {
        color: '#43a047'
    };
    // inspections = null;
    // displayedColumns = ['date', 'status', 'actions'];

    legend: boolean = true;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = 'Year';
    yAxisLabel: string = 'Population';
    timeline: boolean = true;

    colorScheme = {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };

    multi = [
        {
          "name": "Germany",
          "series": [
            {
              "name": "1990",
              "value": 62000000
            },
            {
              "name": "2010",
              "value": 73000000
            },
            {
              "name": "2011",
              "value": 89400000
            }
          ]
        },

        {
          "name": "USA",
          "series": [
            {
              "name": "1990",
              "value": 250000000
            },
            {
              "name": "2010",
              "value": 309000000
            },
            {
              "name": "2011",
              "value": 311000000
            }
          ]
        },

        {
          "name": "France",
          "series": [
            {
              "name": "1990",
              "value": 58000000
            },
            {
              "name": "2010",
              "value": 50000020
            },
            {
              "name": "2011",
              "value": 58000000
            }
          ]
        },
        {
          "name": "UK",
          "series": [
            {
              "name": "1990",
              "value": 57000000
            },
            {
              "name": "2010",
              "value": 62000000
            }
          ]
        }
      ];



    constructor(private Apollo: Apollo, private Router: Router) { }

    ngOnInit() {
        // this.Apollo.watchQuery({
        //     query: INSPECTION,
        //     variables: {
        //         colony_id: this.colony_id
        //     },
        // })
        // .valueChanges.subscribe((result: any) => {
        //     this.inspections = result.data.inspections;
        // },(error) => {
        //     console.log('there was an error sending the query', error);
        // });
    }

    onSelect(data): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
      }

      onActivate(data): void {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
      }

      onDeactivate(data): void {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
      }

//   view(id) { this.Router.navigate(['/hives/' + id]); }

}
