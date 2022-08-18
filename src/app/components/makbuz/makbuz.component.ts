import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { HttpClient } from '@angular/common/http';
import { transition } from '@angular/animations';
import { delay } from 'rxjs';
import { Makbuz } from 'src/app/models/makbuz';
import { MakbuzService } from 'src/app/services/makbuz.service';

@Component({
  selector: 'app-makbuz',
  templateUrl: './makbuz.component.html',
  styleUrls: ['./makbuz.component.css']
})
export class MakbuzComponent implements OnInit {

  makbuzlar: Makbuz[] = [];

  dataLoaded = false;
  filterText="";


  constructor(private makbuzService:MakbuzService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getMakbuzlar();
  }
  

  getMakbuzlar() {
    this.makbuzService.getMakbuzlar().subscribe((data)=>{
      this.makbuzlar = data.data;
    }) 
  }


  add()
  {
    
  }

  delete(makbuz:Makbuz)
  {
    this.makbuzService.delete(makbuz).subscribe();
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
 getMakbuzImage(makbuz:Makbuz)
 {
    return makbuz.makbuzImage;
 }
 reloadMakbuzlar()
 {
     setTimeout(() => {
      this.getMakbuzlar();
      }, 100);
 }
 
}