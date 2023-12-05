import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
 
  constructor(private http: HttpClient) {}



  pagesurl = 'https://localhost:7016/api/Page/'

  private _refreshrequired = new Subject<void>();

  SavePage(inputdata: any) {
    return this.http.post(this.pagesurl, inputdata);
  }



  getAllPages() {
    return this.http.get<any>(this.pagesurl);
  }


  deletpage(id:number){

    return this.http.delete<any>(this.pagesurl+id)
  }


  GetPagebyId(code: any) {
    return this.http.get(this.pagesurl+ code);
  }


  updatePage(data:any, id:number)
  {
          return  this.http.put(this.pagesurl +id , data);
  }
  

}
