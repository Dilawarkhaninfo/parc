import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal
import { ApiService } from '../api.service';
import { datamodel } from './mode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  employeeform!: FormGroup;
  data: undefined | datamodel[];

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    private toastr:ToastrService
   
  ) {}
  
 
 

  


}
