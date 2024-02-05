import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-corso-20';

/*   numCourse = '20';
  disableBtn = false;
  username = '';

  triggerBtn = (event: any) => {
    console.log("🚀 ~ AppComponent ~ $event:", event);
    this.numCourse = '21';
    this.disableBtn = true;
  }
 */
  
  /* In Javascript
  <button id="test">Attiva e cambia</button>
    document.getElementById('test').addEventListener('onclick', () => {
      console.log('click);
    }) 
  */

/*   isLoggedIn = false;

  log = () => this.isLoggedIn = !this.isLoggedIn; */

  names = ['Tizio', 'Caio', 'Sempronio'];
}
