import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCategoryFilterComponent } from './homepage-category-filter.component';

describe('HomepageCategoryFilterComponent', () => {
  let component: HomepageCategoryFilterComponent;
  let fixture: ComponentFixture<HomepageCategoryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageCategoryFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageCategoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
