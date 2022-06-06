import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private httpClient:HttpClient) { }

  ApiUrl = "https://api.themoviedb.org/3/";
  getNameForPelicula(Name:string){
    return this.httpClient.get<any>(this.ApiUrl + "search/movie?api_key=435a680aac6331beaf591ad78cfc73f9&language=es-ES&query=" + Name +"&page=1&include_adult=false");
  }
  getDetalleForPelicula(Numero:Number){
    return this.httpClient.get<any>(this.ApiUrl + "movie/" + Numero + "?api_key=435a680aac6331beaf591ad78cfc73f9");
  }
  getPelisForAutor(Name:string){
    return this.httpClient.get<any>(this.ApiUrl + "search/person?api_key=435a680aac6331beaf591ad78cfc73f9&language=en-US&query=" + Name +"&page=1&include_adult=false");
  }
}
