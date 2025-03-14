import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationDetailComponent } from './realisation-detail.component';

describe('RealisationDetailComponent', () => {
  let component: RealisationDetailComponent;
  let fixture: ComponentFixture<RealisationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealisationDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealisationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
