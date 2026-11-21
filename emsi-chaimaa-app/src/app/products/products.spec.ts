import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Produts } from './products';

describe('Produts', () => {
  let component: Produts;
  let fixture: ComponentFixture<Produts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Produts],
    }).compileComponents();

    fixture = TestBed.createComponent(Produts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
