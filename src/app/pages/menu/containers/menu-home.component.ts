import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent implements OnInit {
  catalogo:any=[];
  carrito:any=[];
  ngOnInit(): void {
    this.listarCatalogo();
  }
  listarCatalogo() {
    this.catalogo = [
      {
        nombre: 'ensalada cesar',
        img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
        precio: 10.00,
        valoracion: 5,
        color: '#e3f2fd'
      },
      {
        nombre: 'cake de naranja',
        img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
        precio: 5.00,
        valoracion: 5,
        color: '#fce4ec'
      },
      {
        nombre: 'Helado chocolate',
        img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
        precio: 2.00,
        valoracion: 3,
        color: '#e0f7fa'
      },
      {
        nombre: 'hamburguesa',
        img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
        precio: 10.00,
        valoracion: 5,
        color: '#f3e5f5'
      },
      {
        nombre: 'combo universitario',
        img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
        precio: 8.00,
        valoracion: 4,
        color: '#ffebee'
      },
      {
        nombre: 'combo universitario',
        img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
        precio: 8.00,
        valoracion: 4,
        color: '#ffebee'
      }
    ];
    console.log(this.catalogo, 'hola');
  }
  agregar(item:any){
    const vali = this.carrito.find((s:any) => s.nombre === item.nombre);
    if (!vali){
      item.cantidad = 1;
      item.total = Number(item.cantidad) * Number(item.precio);
      this.carrito.push(item);
    }else{
      this.carrito.map((a:any) => {
        if(item.nombre === a.nombre){
          a.cantidad = a.cantidad + 1;
          a.total = Number(a.cantidad) * Number(a.precio);
        }
      });
    }
  }
  restar(car:any){
    car.cantidad = car.cantidad - 1;
    car.total = Number(car.cantidad) * Number(car.precio);
  }
  sumar(car:any){
    car.cantidad = car.cantidad + 1;
    car.total = Number(car.cantidad) * Number(car.precio);
  }
  deleteCar(i:any){
    this.carrito.splice(i,1);
  }
  get sumarCarrito(){
    let sum = 0;
    if(this.carrito.length>0){
      this.carrito.map((a:any) => {
        sum = sum + a.total;
      });
    }
    return sum;
  }
}