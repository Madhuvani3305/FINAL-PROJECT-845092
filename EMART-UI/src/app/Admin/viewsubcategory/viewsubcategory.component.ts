import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Subcategory} from 'src/app/Models/subcategory';
import { AdminService } from 'src/app/Services/admin.service';
@Component({
  selector: 'app-viewsubcategory',
  templateUrl: './viewsubcategory.component.html',
  styleUrls: ['./viewsubcategory.component.css']
})
export class ViewsubcategoryComponent implements OnInit {
  itemform:FormGroup;
  item:Subcategory;
  submitted:false;
  list:Subcategory;
  


    constructor(private builder:FormBuilder,private service:AdminService) {
      this.service.Getsubcategory().subscribe(res=>{
        this.list=res;
        console.log(this.list);
      },err=>{
  
      }
      )
     }
  
    ngOnInit() {
      this.itemform=this.builder.group({
        scid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
        sname:['',Validators.required],
        scdetails:['',Validators.required],
        gst:['',Validators.required],
        cid:['',Validators.required]
      })
    }
    Update(){
      this.list= new Subcategory();
      this.list.scid=this.itemform.value['scid']
      this.list.sname=this.itemform.value['sname']
      this.list.cid=this.itemform.value['cid']
      this.list.scdetails=this.itemform.value['scdetails']
      this.list.gst=this.itemform.value['gst']
      this.service.updatesubcategory(this.list).subscribe(res=>{
        console.log("updated successfully");
      })

    }

    get f() { return this.itemform.controls; }
  
    // onSubmit() {
    //   this.submitted=true;
    // }
    onReset() {
        this.submitted = false;
        this.itemform.reset();
    }
  
   Delete(scid:any)
   {
      
     this.service.DeletesubCategory(scid).subscribe(res=>{
       console.log('record deleted');
  
   },err=>{
      console.log(err);
   }
    )
   }
  }