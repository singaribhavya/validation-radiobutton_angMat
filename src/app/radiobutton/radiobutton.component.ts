import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {
  radio:FormGroup;
  pandetails:FormGroup;
  adhardetails:FormGroup;
  licencedetails:FormGroup;
  
  data=[{name:'',registraionNo:''}]
  constructor(private fg:FormBuilder) { 
    this.radio=this.fg.group({
    button:['']
    });
    this.pandetails=this.fg.group({
      name:['',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      panNo:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+$')]]
    });
     this.adhardetails=this.fg.group({
      adhrname:['',[Validators.required]],
      adhrNo:['',[Validators.required,Validators.pattern('^[0-9]+$')]]
     });
     this.licencedetails=this.fg.group({
      licencename:['',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      licenceNo:['',[Validators.required]],
      registraionNo:['',[Validators.required]]
     });
      
     

   
  }

  ngOnInit() {
  }

}
