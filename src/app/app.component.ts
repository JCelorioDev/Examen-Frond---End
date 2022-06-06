import { Component } from '@angular/core';
import { PeliculaService } from './Servicios/pelicula.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Peliculas:any;
  Detalle:any;
  constructor(private peliculaService:PeliculaService){};
  ObtenerPeliculasPorNombre(Name:any){
    this.peliculaService.getNameForPelicula(Name.value).subscribe({
      next:(s)=>{
        this.Peliculas = s.results;
        debugger;
        this.ObtenerDetalleDePelicula(this.Peliculas[0].id);
        
      },
      error(e){
        debugger;
      }
    });
  }
  ObtenerDetalleDePelicula(Id:any){
    debugger;
    this.peliculaService.getDetalleForPelicula(Id).subscribe({
      next:(s)=>{
        this.Detalle = s;
        debugger;
      },
      error:(e)=>{
        debugger;
      }
    })
  }
}
