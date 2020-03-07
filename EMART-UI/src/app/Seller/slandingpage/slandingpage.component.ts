import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slandingpage',
  templateUrl: './slandingpage.component.html',
  styleUrls: ['./slandingpage.component.css']
})
export class SlandingpageComponent implements OnInit {
  name:string;
  constructor( private route:Router) {
    if(sessionStorage.getItem("un"))
    {
    this.name=sessionStorage.getItem("un");
    console.log(this.name);
   }
  

}

  ngOnInit() {
  }
  public logout()
  {
    sessionStorage.clear();
    this.route.navigateByUrl("home/login")
    
  }

}
