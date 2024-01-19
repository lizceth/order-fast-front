import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent implements OnInit {
  catalogo:any=[];
  carrito:any=[];
  selectCatalogo:any=[];
  recomendados:any=[];
  ngOnInit(): void {
    this.listarCatalogo();
    this.listRecomendados();
  
  }
  listarCatalogo() {
    this.catalogo = [
      {
        id_categoria: 1,
        nombre: 'Postres',
        children: [
          {
            nombre: 'cake de naranja',
            img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
            precio: 5.00,
            valoracion: 5,
            color: '#fce4ec',
            id_categoria: 1,
          }
        ]
      },
      {
        id_categoria: 2,
        nombre: 'Bebidas',
        children: [
          {
            nombre: 'Limonada',
            img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
            precio: 8.00,
            valoracion: 4,
            color: '#ffebee',
            id_categoria: 2,
          }
        ]
      },
      {
        id_categoria: 3,
        nombre: 'Comidas',
        children: [
          {
            nombre: 'ensalada cesar',
            img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
            precio: 10.00,
            valoracion: 5,
            color: '#e3f2fd',
            id_categoria: 3, 
          },
          {
            nombre: 'hamburguesa',
            img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
            precio: 10.00,
            valoracion: 5,
            color: '#f3e5f5',
            id_categoria: 3,
          },
          {
            nombre: 'combo universitario',
            img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
            precio: 8.00,
            valoracion: 4,
            color: '#ffebee',
            id_categoria: 3,
          },
          {
            nombre: 'combo universitario',
            img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
            precio: 8.00,
            valoracion: 4,
            color: '#ffebee',
            id_categoria: 3,
          },
        ]
      },
      {
        id_categoria: 4,
        nombre: 'Helados',
        children: [
          {
            nombre: 'Helado chocolate',
            img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
            precio: 2.00,
            valoracion: 3,
            color: '#e0f7fa',
            id_categoria: 4,
          },
        ]
      }
    ];
    console.log(this.catalogo, 'hola');
  }
  listRecomendados(){
    this.recomendados = [
      {
        nombre: 'Helado Fresa',
        img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
        precio: 2.00,
        valoracion: 3,
        color: '#e0f7fa',
        id_categoria: 4,
      },
      {
        nombre: 'Sandwich pollo',
        img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
        precio: 2.00,
        valoracion: 3,
        color: '#e0f7fa',
        id_categoria: 3,
      },
      {
        nombre: 'Broster',
        img: 'https://www.pngplay.com/wp-content/uploads/13/Dessert-Transparent-Images.png',
        precio: 2.00,
        valoracion: 3,
        color: '#e0f7fa',
        id_categoria: 3,
      },
    ] 
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
  changeCategory($event:any){
    console.log($event);
    this.listarCatalogo();
    this.selectCatalogo = this.catalogo.filter((r:any) => r.id_categoria === Number($event))[0].children;
    console.log(this.selectCatalogo);
    this.catalogo = this.catalogo.filter((r:any) => r.id_categoria !== Number($event));
   
  }
}