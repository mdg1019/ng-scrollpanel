import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nowrap = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  toggleHorizontalScrolling() {
    this.nowrap = !this.nowrap;
    this.changeDetectorRef.detectChanges();
  }
}
