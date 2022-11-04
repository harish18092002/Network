import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagchipsComponent } from './tagchips.component';

describe('TagchipsComponent', () => {
  let component: TagchipsComponent;
  let fixture: ComponentFixture<TagchipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagchipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagchipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
