import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { SharedModule } from '../modules/shared/shared.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [
    SharedModule
  ]
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, content: 'Hello, world!' },
          { title: 'Card 2', cols: 1, rows: 1, content: 'Welcome!' },
          { title: 'Card 3', cols: 1, rows: 1, content: 'Massachusetts!' },
          { title: 'Card 4', cols: 1, rows: 1, content: 'City of Boston!'}
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, content: 'Hello, world!' },
        { title: 'Card 2', cols: 1, rows: 1, content: 'Welcome!' },
        { title: 'Card 3', cols: 1, rows: 2, content: 'Massachusetts!'},
        { title: 'Card 4', cols: 1, rows: 1, content: 'City of Boston!' }
      ];
    })
  );
}
