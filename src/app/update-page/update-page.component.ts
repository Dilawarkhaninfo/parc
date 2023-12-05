import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngularEditorConfig } from '@kolkov/angular-editor/public-api';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent {


  constructor (private builder: FormBuilder, private services: ApiService,
     private activatedroute:ActivatedRoute, private router:Router,
     private notifcation:ToastrService,
     private spinner:NgxSpinnerService,
     ){}


  formmenu!: FormArray<any>;
  formsubmenu!: FormArray<any>;
  saveresponse: any;
  pagedata: any;
  dataid!:number;
  editdata: any;
  editproductcode: any;


  ngOnInit() : void
  {
    this.activatedroute.paramMap.subscribe((param:Params)=>{

      this.dataid=param['get']("pageId")
      console.log("data id is ", this.dataid)
    })

    if (this.dataid != null) {
      this.services.GetPagebyId(this.dataid).subscribe((item: any) => {
        this.editdata = item;
        console.log('Edit data:', this.editdata);
  
        if (this.editdata.menus) {
          this.editdata.menus.forEach((menu: any) => {
            this.AddMenus();
            const menuGroup = this.formmenu.at(this.formmenu.length - 1) as FormGroup;
            menuGroup.patchValue(menu);
          });
        }
  
        if (this.editdata.submenus) {
          this.editdata.submenus.forEach((submenu: any) => {
            this.AddSubMenus();
            const submenuGroup = this.formsubmenu.at(this.formsubmenu.length - 1) as FormGroup;
            submenuGroup.patchValue(submenu);
          });
        }
  
        this.pageform.setValue({
          pageName: this.editdata.pageName,
          pageDescription: this.editdata.pageDescription,
          menus: this.editdata.menus || [],
          subMenus: this.editdata.subMenus || [],
        });
  
        console.log('Updated pageform:', this.pageform.value);
      });
    }

    

  }



  pageform = this.builder.group({
    pageName: this.builder.control('', Validators.required),
    pageDescription: this.builder.control('', Validators.required),
    menus: this.builder.array([]),
    subMenus: this.builder.array([]),
  });


  // functions for menus
  AddMenus() {
    this.formmenu = this.pageform.get('menus') as FormArray;
    this.formmenu.push(this.Generaterowmenu());
  }

  Generaterowmenu() {
    return this.builder.group({
      // id: this.builder.control({ value: 0, disabled: true }),
      menuName: this.builder.control(''),
    });
  }

  get menus() {
    return this.pageform.get('menus') as FormArray;
  }

  RemoveMenus(index: any) {
    if (confirm('do you want to remove this submenu?')) {
      this.formmenu = this.pageform.get('menus') as FormArray;
      this.formmenu.removeAt(index);
    }
  }

  // -------------------------------------

  // funcitons for submenus
  AddSubMenus() {
    this.formsubmenu = this.pageform.get('subMenus') as FormArray;
    this.formsubmenu.push(this.Generaterowsubmenu());
  }
  Generaterowsubmenu() {
    return this.builder.group({
      // id: this.builder.control({ value: 0, disabled: true }),
      submenuName: this.builder.control(''),
    });
  }
  get subMenus() {
    return this.pageform.get('subMenus') as FormArray;
  }

  RemoveSubMenus(index: any) {
    if (confirm('do you want to remove this submenu?')) {
      this.formsubmenu = this.pageform.get('subMenus') as FormArray;
      this.formsubmenu.removeAt(index);
    }
  }

  updatePage() {
    console.log(this.pageform.value);

    if(this.pageform.valid)

    {
      this.spinner.show()
      this.services.updatePage(this.pageform.getRawValue(), this.dataid).subscribe({
        next:(res)=>{
          setTimeout(() => {
            this.spinner.hide()
            this.router.navigate(["/"])
            this.notifcation.info("Record Updated Successfuly","Parc Portal Hub")
          }, 1000);
        },
        error:(res)=>{

          console.log(res)
        }
      })
    }
    else
    {

    }


  }


  LoadPages() {
    this.services.getAllPages().subscribe((resp) => {
      this.pagedata = resp;
      console.log(this.pagedata);
    });

  }


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
   
  };



}
