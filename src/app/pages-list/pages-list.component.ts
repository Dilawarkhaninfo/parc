import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.css'],
})
export class PagesListComponent {
  constructor(
    private builder: FormBuilder,
    private services: ApiService,
    private toaster:ToastrService,
    private spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer

  ) { }


  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
      this.LoadPages();


    }, 1000);
  }






  formmenu!: FormArray<any>;
  formsubmenu!: FormArray<any>;
  saveresponse: any;
  pagedata: any;

  pageform = this.builder.group({
    pageName: this.builder.control('', Validators.required),
    pageDescription: this.builder.control('', Validators.required),
    menus: this.builder.array([]),
    subMenus: this.builder.array([]),
  });



  LoadPages() {
    this.services.getAllPages().subscribe((resp) => {
      this.pagedata = resp;
      console.log(this.pagedata);
    });
  }


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

  //  ------------------------------
  SavePage() {
    console.log(this.pageform.value);

    if (this.pageform.valid) {
      this.spinner.show();

      this.services.SavePage(this.pageform.getRawValue()).subscribe(
        (item: any) => {
          this.saveresponse = item;
          console.log(this.saveresponse);

          setTimeout(() => {
            this.spinner.hide();
            this.toaster.success('New Page Added Successfully', 'Parc Portal Hub');
            this.pageform.reset();
            this.LoadPages();
          }, 1000);
        },
        (error) => {
          console.error('Error:', error);
          this.spinner.hide();
        }
      );
    }
    else {
      alert('please enter valid data');
    }
  }


  delete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.spinner.show();
      this.services.deletpage(id).subscribe({
        next: (res) => {
          setTimeout(() => {
            this.spinner.hide();
            this.toaster.error('Page has been deleted successfully', 'Parc Portal Hub');
            this.LoadPages();
          }, 1000);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  openSpinner()
  {
    this.spinner.show()
    setTimeout(() => {

      this.spinner.hide();

    }, 1000);
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
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],

  };

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
