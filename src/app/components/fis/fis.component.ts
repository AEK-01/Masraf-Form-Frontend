import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fis } from 'src/app/models/fis';
import { FisService } from 'src/app/services/fis.service';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { transition } from '@angular/animations';
import { delay } from 'rxjs';

@Component({
  selector: 'app-fis',
  templateUrl: './fis.component.html',
  styleUrls: ['./fis.component.css']
})
export class FisComponent implements OnInit {

  fisler: Fis[] = [];

  dataLoaded = false;
  filterText="";
  fisAddForm:FormGroup;


  constructor(private fisService:FisService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getFisler();
  }
  

  getFisler() {
    this.fisService.getFisler().subscribe((data)=>{
      this.fisler = data.data;
    }) 
  }


  add()
  {
    
  }
  delete(fis:Fis)
  {
    this.fisService.delete(fis).subscribe();
    this.toastrService.success("Fiş silindi")
  }
  reloadPage() {
    window.location.reload();
 }

 stringToImage(binCod:string):any
 {
  var container = document.querySelector('.server-online')
    var imaj = new Image(300,300);
    
    imaj.src = binCod;
    return imaj
 }
 getFisImage(fis:Fis)
 {
    return fis.fisImage;
 }
 reloadFisler()
 {
     setTimeout(() => {
      this.getFisler();
      }, 100);
 }
 
}
