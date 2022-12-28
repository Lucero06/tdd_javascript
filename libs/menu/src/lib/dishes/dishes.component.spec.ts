import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenusService } from '../data-access/menus.service';
import { DishesComponent } from './dishes.component';

const dish = {
  taste: 'spicy',
  name: 'ceviche',
  country: {
    name: 'Perú',
    language: 'Español'
  }
};

const menusServiceMocks = {
  availableDishes: () => [dish]
};

describe('DishesComponent', () => {
  let component: DishesComponent;
  let fixture: ComponentFixture<DishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishesComponent],
      providers: [
        {
          provide: MenusService,
          useValue: menusServiceMocks
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
