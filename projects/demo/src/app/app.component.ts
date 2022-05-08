import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayVerticalScrollbar = true;
  displayHorizontalScrollbar = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  toggleVerticalScrolling() {
    this.displayVerticalScrollbar = !this.displayVerticalScrollbar;
    this.changeDetectorRef.detectChanges();
  }

  toggleHorizontalScrolling() {
    this.displayHorizontalScrollbar = !this.displayHorizontalScrollbar;
    this.changeDetectorRef.detectChanges();
  }
}
