import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MunsterPage } from './munster.page';

describe('MunsterPage', () => {
  let component: MunsterPage;
  let fixture: ComponentFixture<MunsterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunsterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MunsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
