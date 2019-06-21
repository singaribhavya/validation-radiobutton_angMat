import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-oneformradiobutton',
  templateUrl: './oneformradiobutton.component.html',
  styleUrls: ['./oneformradiobutton.component.css']
})
export class OneformradiobuttonComponent implements OnInit {
  radio:FormGroup;
  pan:boolean=false;
  adhar:boolean=false;
  licence:boolean=false;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  radioChange(value){
    if(value=='PanCard'){
      console.log('addressproof=>',value)
        this.pan=true;
        this.adhar=false;
        this.licence=false;
        this.radio.get('panname').setValidators([Validators.required,Validators.pattern('[a-zA-Z]+$')]);
        this.radio.get('panNo').setValidators([Validators.required,Validators.maxLength(10),Validators.pattern('[a-zA-Z0-9]+$')]);
        this.radio.get('adharname').setValue('');
        this.radio.get('adharname').clearValidators();
        this.radio.get('adharname').updateValueAndValidity();
        this.radio.get('adharNo').setValue('');
        this.radio.get('adharNo').clearValidators();
        this.radio.get('adharNo').updateValueAndValidity();
        this.radio.get('licencename').setValue('');
        this.radio.get('licencename').clearValidators();
        this.radio.get('licencename').updateValueAndValidity();
        this.radio.get('licenceNo').setValue('');
        this.radio.get('licenceNo').clearValidators();
        this.radio.get('licenceNo').updateValueAndValidity();
        this.radio.get('licenceExp').setValue('');
        this.radio.get('licenceExp').clearValidators();
        this.radio.get('licenceExp').updateValueAndValidity();
       }
    else if(value=='AdharCard'){console.log('addressproof=>',value)
      this.adhar=true;
        this.pan=false;
        this.licence=false;
        this.radio.get('adharname').setValidators([Validators.required,Validators.pattern('[a-zA-Z]+$')]);
        this.radio.get('adharname').updateValueAndValidity();
        this.radio.get('adharNo').setValidators([Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(16)]);
        this.radio.get('adharNo').updateValueAndValidity();  
        this.radio.get('panname').setValue('');
        this.radio.get('panname').clearValidators();
        this.radio.get('panname').updateValueAndValidity();
        this.radio.get('panNo').setValue('');
        this.radio.get('panNo').clearValidators();
        this.radio.get('panNo').updateValueAndValidity();
        this.radio.get('licencename').setValue('');
        this.radio.get('licencename').clearValidators();
        this.radio.get('licencename').updateValueAndValidity();
        this.radio.get('licenceNo').setValue('');
        this.radio.get('licenceNo').clearValidators();
        this.radio.get('licenceNo').updateValueAndValidity();
        this.radio.get('licenceExp').setValue('');
        this.radio.get('licenceExp').clearValidators();
        this.radio.get('licenceExp').updateValueAndValidity();
      }
    else {console.log('addressproof=>',value)
        
           this.licence=true;
          this.adhar=false;
          this.pan=false;
          this.radio.get('licencename').setValidators([Validators.required,Validators.pattern('[a-zA-Z]+$')]);
          this.radio.get('licencename').updateValueAndValidity();
          this.radio.get('licenceNo').setValidators([Validators.required,Validators.pattern('[a-zA-Z0-9]+$'),Validators.maxLength(10)]);
          this.radio.get('licenceNo').updateValueAndValidity();
          this.radio.get('licenceExp').setValidators(Validators.required);
          this.radio.get('licenceExp').updateValueAndValidity();
          this.radio.get('adharname').setValue('');
          this.radio.get('adharname').clearValidators();
          this.radio.get('adharname').updateValueAndValidity();
          this.radio.get('adharNo').setValue('');
          this.radio.get('adharNo').clearValidators();
          this.radio.get('adharNo').updateValueAndValidity();
          this.radio.get('panname').setValue('');
          this.radio.get('panname').clearValidators();
          this.radio.get('panname').updateValueAndValidity();
          this.radio.get('panNo').setValue('');
          this.radio.get('panNo').clearValidators();
          this.radio.get('panNo').updateValueAndValidity();
        }
  
       }

  constructor(private fg:FormBuilder) { 
    this.radio=this.fg.group({
      radiobutton:[''],
      panname:['',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      panNo:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+$'),Validators.maxLength(10)]],
      adharname:['',[Validators.required,,Validators.pattern('[a-zA-Z]+$')]],
      adharNo:['',[Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(16)]],
      licencename:['',[Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      licenceNo:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+$'),Validators.maxLength(10)]],
      licenceExp:['',[Validators.required]]
    })

  }

  ngOnInit() {
  }
  num;
  panno;
  adhrname;
  adhrnum;
  licencename;
  licencenum;
  licenceexp;
  submit(){
  this.num=this.radio.value.panname;
  this.panno=this.radio.value.panNo;
  console.log('name=>',this.num)
  console.log('number=>',this.panno)
  this.adhrname=this.radio.value.adharname;
  this.adhrnum=this.radio.value.adharNo;
  console.log('adharname=>',this.adhrname)
  console.log('adharnum=>',this.adhrnum)
  this.licencename=this.radio.value.licencename;
  this.licencenum=this.radio.value.licenceNo;
  this.licenceexp=this.radio.value.licenceExp;
  console.log('name=>',this.licencename)
  console.log('number=>',this.licencenum)
  console.log('exp=>',this.licenceexp)


 }
}
