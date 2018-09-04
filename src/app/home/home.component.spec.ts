import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: MyHomeComponent;
  let fixture: ComponentFixture<MyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
