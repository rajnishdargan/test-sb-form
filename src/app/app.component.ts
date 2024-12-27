import { Component } from '@angular/core';
import { timer } from './formConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-sb-form';
  config: any  = timer;

  output(event: any) {
    console.log('output event::', event);
  }

  valueChanges(event: any) {
    console.log('valueChanges event::', event);
  }

  statusChanges(event: any) {
    console.log('statusChanges event::', event);
  }
}
