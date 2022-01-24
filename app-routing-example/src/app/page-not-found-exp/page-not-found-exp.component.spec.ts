import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundExpComponent } from './page-not-found-exp.component';

describe('PageNotFoundExpComponent', () => {
  let component: PageNotFoundExpComponent;
  let fixture: ComponentFixture<PageNotFoundExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
