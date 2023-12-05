import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent {

  constructor(private services: ApiService, private activatedroute:ActivatedRoute, private router:Router,
    private spinner:NgxSpinnerService,
    private sanitizer: DomSanitizer

    ){}

  pagedata:any;
  pageid!:number;


  ngOnInit():void
  {

    this.activatedroute.paramMap.subscribe((param:Params)=>{

      this.pageid=param['get']("pageId")
      console.log("data id is ", this.pageid)
    })
    this.services.GetPagebyId(this.pageid).subscribe((data:any)=>{
      this.spinner.show()
      setTimeout(() => {
        this.spinner.hide()
        this.pagedata=data;
        console.log(this.pagedata)
        
      }, 1000);
     

    })



  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
