import { HttpClient } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { bindCallback } from 'rxjs';
import { FisService } from 'src/app/services/fis.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './fis-add.component.html',
  styleUrls: ['./fis-add.component.css']
})
export class FisAddComponent implements OnInit {

  
  fisAddForm : FormGroup;
  fisEklendiBool: boolean = false;
  constructor(private formBuilder:FormBuilder, 
    private fisService:FisService, private toastrService:ToastrService, private http:HttpClient) { }

  ngOnInit(): void {
    this.createFisAddForm();
    this.fisEklendiBool = false;
  }

  createFisAddForm(){
     this.fisAddForm = this.formBuilder.group({
      fisNo:["",Validators.required],
      date: ["",Validators.required],
      company:["", Validators.required],
      fisType:["",Validators.required],
      description:[""],
      vatValue:[0,Validators.required],
      totalCost:[0,Validators.required],
      fisImage:[""]
     })
  }

  add(){
    if(this.fisAddForm.valid){
      this.fisAddForm.patchValue({
        vatValue: parseFloat(this.fisAddForm.value.vatValue),
        fisImage: this.fileBytes,
      });
      
      console.log(this.fisAddForm.value.fisImage)
      this.fisEklendiBool = true;
      let fisModel = Object.assign({},this.fisAddForm.value)
      
      this.fisService.add(fisModel).subscribe(response=>{
        this.toastrService.success(response.message,"Fiş Eklendi")
      },responseError=>{
        this.toastrService.warning(responseError.error.Errors,"Fişi ekledik ama sıkıntı var haberin ola")
      })
    }  
    else{
      this.fisEklendiBool = false;
      this.toastrService.error("Formunuz eksik","Dikkat")
    }

    
  }

  isFisAdded():String 
  {
    if(this.fisEklendiBool)
      return "fis";
    else
      return "fis/add";
  }

  selectedFile:File = null;
  fileBytes:any

  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];

    var myReader:FileReader = new FileReader();
    var t:any;
    myReader.onload = (e) =>{
      // you can perform an action with readed data her
      this.fileBytes = myReader.result
      console.log(this.fileBytes);
    }
    myReader.readAsDataURL(this.selectedFile);
  }



}