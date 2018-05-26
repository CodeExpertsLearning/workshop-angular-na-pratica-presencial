import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopNewComponent } from './workshop-new.component';

describe('WorkshopNewComponent', () => {
  let component: WorkshopNewComponent;
  let fixture: ComponentFixture<WorkshopNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
