import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyphotoEditComponent } from './myphoto-edit.component';

describe('MyphotoEditComponent', () => {
  let component: MyphotoEditComponent;
  let fixture: ComponentFixture<MyphotoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyphotoEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyphotoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
