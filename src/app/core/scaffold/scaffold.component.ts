import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';

@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent implements OnInit {
  loading: boolean = false;
  MENU_ITEMS: NbMenuItem[] = [

    {
      title: "Menú",
      icon: "droplet-outline",
      link: "/pages/menu",
      pathMatch: "prefix"
    },
    {
      title: "Administrar",
      icon: "settings-outline",
      link: "/pages/settings",
      pathMatch: "prefix",
      children: [
        {
          title: "Sincronización",
          icon: "sync-outline",
          link: "/pages/settings/users",
          pathMatch: "prefix",
        },
        {
          title: "Otros",
          icon: "sync-outline",
          link: "/pages/settings/otros",
          pathMatch: "prefix",
        },
      ],
    },
    {
      title: "Atención",
      icon: "settings-outline",
      link: "/pages/attention",
      pathMatch: "prefix",
      children: [
        {
          title: "Clientes",
          icon: "sync-outline",
          link: "/pages/attention/clients",
          pathMatch: "prefix",
        },
      ],
    },
  ];
  constructor(private service: GeneralService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    const serviceName = 'logout';
    // this.loading = true;
    // this.service.addName$(serviceName).subscribe((res:any) => {
    //   if (res.success) {
    //     localStorage.removeItem('user');
    //     setTimeout(() => {
          this.router.navigate(['/login']);
    //     }, 100);
    //   }
    // }, () => this.loading = false, () => this.loading = false);
  }
}
