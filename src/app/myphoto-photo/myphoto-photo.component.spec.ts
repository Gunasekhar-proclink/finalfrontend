import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyphotoPhotoComponent } from './myphoto-photo.component';

describe('MyphotoPhotoComponent', () => {
  let component: MyphotoPhotoComponent;
  let fixture: ComponentFixture<MyphotoPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyphotoPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyphotoPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
