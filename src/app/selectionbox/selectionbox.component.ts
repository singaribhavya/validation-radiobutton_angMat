import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-selectionbox',
  templateUrl: './selectionbox.component.html',
  styleUrls: ['./selectionbox.component.css']
})
export class SelectionboxComponent implements OnInit {
year:number;           
years:any[]=[{year:2015,},{year:2016},{year:2017},{year:2018},{year:2019} ];
monthsList=[];
Names={'monthwise':['jan','feb','mar','aprl','may','june','july','aug','sep','oct','novb','dec'],"quaterwise":['firstqtr','secondqtr','thirdqtr']};  
loginform:FormGroup;
  constructor(private fg:FormBuilder) { 
    this.loginform=this.fg.group({
      years:[''],
      months:['',[Validators.required]],
      names:['',[Validators.required]],
     fromDate:['',[Validators.required]],
     todate:['',[Validators.required]]
    });

 

  }

  ngOnInit() {
  }

}
