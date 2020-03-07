import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buyer-landingpage',
  templateUrl: './buyer-landingpage.component.html',
  styleUrls: ['./buyer-landingpage.component.css']
})
export class BuyerLandingpageComponent implements OnInit {
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
