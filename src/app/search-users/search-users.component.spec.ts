import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUsersComponent } from './search-users.component';
import { SearchUsersService } from '../search-users.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MdInputModule, MdButtonModule, MdSnackBarModule } from '@angular/material';
import { MdSnackBar } from '@angular/material';

describe('SearchUsersComponent', () => {
  let component: SearchUsersComponent;
  let fixture: ComponentFixture<SearchUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchUsersComponent],
      imports: [
        BrowserAnimationsModule,
        HttpModule,
        MdInputModule,
        MdButtonModule,
        MdSnackBarModule
      ],
      providers: [SearchUsersService, MdSnackBar]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
