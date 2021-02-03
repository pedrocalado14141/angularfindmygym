// getgym.component.html -> 
// addClick chama a modal de addeditgym.html e dps o botao Addgym() para chamar os metodos que chama os serviços 
// /deleteClick(ja chama o serviço)
// /updateClick chama a modal de addeditgym.html e dps o botao updategym() para chamar os metodos que chama os serviços 

import { Component, OnInit } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-getgym',
  templateUrl: './getgym.component.html',
  styleUrls: ['./getgym.component.css']
})
export class GetgymComponent implements OnInit {

  constructor(private service:SharedService) { }

  //Used in ngFor to populate the table
  GymList: any=[];
  itemtoUpdate: any=[];
  ActivateAddEditGym:boolean=false

  //AddUpdate info 
  GymFunctions:any=[];
  ModalTitle:string="";

  ngOnInit(): void { //first method
    console.log("ngOnInit -> this.refreshGymList()")
    this.refreshGymList();
  }

  refreshGymList(){
    this.service.GetGymList().subscribe(data => {
      this.GymList=data;
    })
  }

  //Open the Modal, set the variable to empty and id:0 to Add  new gym
  addClick(){
    console.log("addClick()")
    this.GymFunctions={
      id:0,
      name:"",
      adress:"",
      latitude:"",
      longitude:"",
      contact:"",
      email:"",
      facebook:""
    }
    this.ModalTitle="Adicionar Ginásio",
    this.ActivateAddEditGym=true;
  }

  //close the Modal
  closeClick(){
    this.ActivateAddEditGym = false,
    this.refreshGymList();
  }

  //populate this.GymFunctions with the itemtoUpdate from the *ngfor in the table 
  updateClick(itemtoUpdate: any){
    console.log("updateClick()")
    this.GymFunctions = itemtoUpdate
    this.ModalTitle="Update Ginásio",
    this.ActivateAddEditGym=true;
  }

  deleteClick(itemtoUpdate: any){
    this.service.DeleteGym(itemtoUpdate.id,"teste").subscribe(res=> 
      alert(res))
  }
}
