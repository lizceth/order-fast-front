import { Component } from '@angular/core';

@Component({
  selector: 'app-clients-home',
  templateUrl: './clients-home.component.html',
  styleUrls: ['./clients-home.component.scss']
})
export class ClientsHomeComponent {
sumar:number = 0;
add(item:any){
  this.sumar=this.sumar + item;
}
}
