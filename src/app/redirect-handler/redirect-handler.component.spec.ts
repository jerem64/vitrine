import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectHandlerComponent } from './redirect-handler.component';

describe('RedirectHandlerComponent', () => {
  let component: RedirectHandlerComponent;
  let fixture: ComponentFixture<RedirectHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
