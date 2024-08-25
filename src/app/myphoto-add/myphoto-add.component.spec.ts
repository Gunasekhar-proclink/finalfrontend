import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyphotoAddComponent } from './myphoto-add.component';

describe('MyphotoAddComponent', () => {
  let component: MyphotoAddComponent;
  let fixture: ComponentFixture<MyphotoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyphotoAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyphotoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
