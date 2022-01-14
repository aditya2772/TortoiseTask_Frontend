import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {



  constructor(private service:ApiserviceService) { }

  readData:any;
  successMsg:any;


  ngOnInit(): void {

     this.getAllData()


  }

  //get delete id for deleting the data using services
  deleteId(id:any)
  {
    console.log(id,"deletedid==>");
    this.service.deleteData(id).subscribe((res)=>{

      console.log("deleted data==> ",res);
      this.successMsg = res.message;

      //recalling getall data method to instant refresh
     this.getAllData();


    });

  }


  //get all data from backend
  getAllData(){
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res=>");
      this.readData= res.data;
    });
  }

}
