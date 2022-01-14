import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiserviceService } from "../apiservice.service";
import { ActivatedRoute } from "@angular/router";

// import { MAT_DATE_FORMATS } from '@angular/material/core';

// export const MY_DATE_FORMATS = {
//     parse: {
//       dateInput: 'YYYY/MM/DD',
//     },
//     display: {
//       dateInput: 'YYYY/MM/DD',
//       monthYearLabel: 'MMMM YYYY',
//       dateA11yLabel: 'LL',
//       monthYearA11yLabel: 'MMMM YYYY'
//     },
// };

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  // providers: [
  //   { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  // ]
})
export class CreateComponent implements OnInit {
 @Input()
 status ='';

  constructor(private service:ApiserviceService, private router:ActivatedRoute, ) { }

  errMsg:any;
  successMsg:any;
  getparamId:any;



  ngOnInit(): void {
    this.getparamId= this.router.snapshot.paramMap.get('id');

    if (this.getparamId) {


      this.service.getSingleData(this.getparamId).subscribe((res)=>{
        this.profileForm.patchValue({
          name: res.data[0].name,
          birthdate: res.data[0].birthdate,
          status: res.data[0].status

        });
      });

    }


  }

  profileForm= new FormGroup({
    'name': new FormControl('',Validators.required),
    'birthdate': new FormControl('',Validators.required),
    'status' : new FormControl(this.status)

  });






  //create new student
  profileSubmit(){

    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      this.service.createData(this.profileForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.profileForm.reset();
        this.successMsg= res.message + " click on read to see the data";
        this.profileForm.reset();
      })

    } else {
      this.errMsg= 'All fields are required';

    }


  }

  //update student using id
  profileUpdate(){
    if (this.profileForm.valid) {
      this.service.updateData(this.profileForm.value,this.getparamId).subscribe((res)=>{
        console.log("response update as follows",res);
        this.successMsg = res.message+" click on read to check updated data";
        this.profileForm.reset();
      })
    } else {
      this.errMsg="all fields are required"
    }
  }
}


// studentRegNo
// studentName
// parentsName
// courseName
// collegeName
// studentRes
