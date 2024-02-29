import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserConfirmationComponent } from './edit-user-confirmation.component';

describe('EditUserConfirmationComponent', () => {
  let component: EditUserConfirmationComponent;
  let fixture: ComponentFixture<EditUserConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditUserConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
