import { Component } from '@angular/core';
import {SampleService} from './sample.service';
import {FormsModule} from '@angular/forms';
import { Sample } from "./sample";
//import {SampleComponent} from './sample.component';
@Component({
    selector: 'app-root1',
     templateUrl: './sample.component.html', 
     providers:[SampleService]
})

export class AppComponent {
  body: string="";
  userid: string="";
  id:string="";
  /* title = ' NTRUST ';
 */ title:string="";
  sa =new Sample();
   // name:string="";
     
constructor(private sampleservice : SampleService)
{

}
onLoad()
{
  this.sa.userid =this.userid;
  this.sa.id=this.id;
  //this.name=this.name;
  this.sa.title=this.title;
  this.sa.body=this.body;
  this.sampleservice.addSamples(this.sa)
  .subscribe(res => { });
}
  
  }






  











  
  


 
 