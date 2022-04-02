import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'Mooncore',
  templateUrl: './Mooncore.component.html',
  styleUrls: [ './Mooncoree.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
