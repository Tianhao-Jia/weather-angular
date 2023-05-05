import { Component,OnDestroy,OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'my-project';
  cities = ["London", "Paris", "Moscow", "New York", "Karachi", "Sydney"];
  
  cityControl!: FormControl;


  constructor(private router: Router) { }
  ngOnInit(): void {
    this.cityControl = new FormControl("");
    this.cityControl.valueChanges.subscribe((value) => {
      this.router.navigate([value]);
    });
  }
  ngOnDestroy(): void {
    
  }
}
