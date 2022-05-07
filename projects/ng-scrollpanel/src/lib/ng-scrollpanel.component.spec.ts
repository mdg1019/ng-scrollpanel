import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgScrollpanelComponent } from './ng-scrollpanel.component';

describe('NgScrollpanelComponent', () => {
  let component: NgScrollpanelComponent;
  let fixture: ComponentFixture<NgScrollpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgScrollpanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgScrollpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
