import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandmilkeyaComponent } from './sandmilkeya.component';

describe('SandmilkeyaComponent', () => {
  let component: SandmilkeyaComponent;
  let fixture: ComponentFixture<SandmilkeyaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SandmilkeyaComponent]
    });
    fixture = TestBed.createComponent(SandmilkeyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
