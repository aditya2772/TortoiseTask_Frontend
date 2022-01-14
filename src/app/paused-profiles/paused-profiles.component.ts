import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: 'app-paused-profiles',
  templateUrl: './paused-profiles.component.html',
  styleUrls: ['./paused-profiles.component.css']
})
export class PausedProfilesComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  successMsg:any;

  ngOnInit(): void {
    this.getPausedData();
  }

  //get delete id for deleting the data using services
  deleteId(id:any)
  {
    console.log(id,"deletedid==>");
    this.service.deleteData(id).subscribe((res)=>{

      console.log("deleted data==> ",res);
      this.successMsg = res.message;

      //recalling getall data method to instant refresh
     this.getPausedData();


    });

  }

  //get paused data
  getPausedData(){
    this.service.getPausedProfilesData().subscribe((res)=>{
      console.log(res,"res=>");
      this.readData = res.data;

    })
  }

}
