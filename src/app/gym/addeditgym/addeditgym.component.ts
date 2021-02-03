import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-addeditgym',
  templateUrl: './addeditgym.component.html',
  styleUrls: ['./addeditgym.component.css']
})
export class AddeditgymComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() 
  //Inizialize the variable
  
  GymFunctions:any; 
  Id=0;
  Name:string="";
  Adress:string="";
  Latitude:string="";
  Longitude:string="";
  Contact:string="";
  Email:string="";
  Facebook:string="";

  //First thing when add.edit html is render
  // its used in the Add/Update Method to fill the textbox
  ngOnInit(): void {
    this.Id = this.GymFunctions.id;
    this.Name = this.GymFunctions.name;
    this.Latitude = this.GymFunctions.latitude;
    this.Longitude = this.GymFunctions.longitude;
    this.Adress = this.GymFunctions.adress;
    this.Contact = this.GymFunctions.contact;
    this.Email = this.GymFunctions.email;
    this.Facebook = this.GymFunctions.facebook;
  }

  //When click in add button 
  Addgym(){
  let array = [{
    "id":0,
    "Name":this.Name,
    "Latitude":this.Latitude,
    "Longitude":this.Longitude,
    "Adress":this.Adress,
    "Contact":this.Contact,
    "Email":this.Email,
    "Facebook":this.Facebook
  }];
  let jsonToSend = {
    "AddGymList": array
  }
    this.service.AddGym(jsonToSend).subscribe(res=>
      alert(`O ginásio inserido ficou associado ao id: ${res}`)
      );
  }
//When click in Update button 
  Updategym(){
    let array = {
      "id":  this.Id,
      "Name":this.Name,
      "Latitude":this.Latitude,
      "Longitude":this.Longitude,
      "Adress":this.Adress,
      "Contact":this.Contact,
      "Email":this.Email,
      "Facebook":this.Facebook
    };
      this.service.UpdateGym(array).subscribe(res=>
        alert(`O ginásio foi atualizado com exito`)
        );
    }

}
