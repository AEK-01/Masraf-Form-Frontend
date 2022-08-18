import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { MakbuzService } from 'src/app/services/makbuz.service';

@Component({
  selector: 'app-makbuz-add',
  templateUrl: './makbuz-add.component.html',
  styleUrls: ['./makbuz-add.component.css']
})
export class MakbuzAddComponent implements OnInit {

  makbuzAddForm : FormGroup;
  makbuzEklendiBool: boolean = false;
  constructor(private formBuilder:FormBuilder, 
    private makbuzService:MakbuzService, private toastrService:ToastrService, private http:HttpClient) { }

  ngOnInit(): void {
    this.createMakbuzAddForm();
    this.makbuzEklendiBool = false;
  }

  createMakbuzAddForm(){
     this.makbuzAddForm = this.formBuilder.group({
      date: ["",Validators.required],
      nameOfTheAuthor:["",Validators.required],
      company:["", Validators.required],
      address:["", Validators.required],
      description:[""],
      totalCost:[0,Validators.required],
      makbuzImage:[""]
     })
  }   

  add(){
    if(this.makbuzAddForm.valid){
      this.makbuzAddForm.patchValue({
        makbuzImage: this.fileBytes,
      });
      
      console.log(this.makbuzAddForm.value.makbuzImage)
      this.makbuzEklendiBool = true;
      let makbuzModel = Object.assign({},this.makbuzAddForm.value)
      
      this.makbuzService.add(makbuzModel).subscribe(response=>{
        this.toastrService.success(response.message,"Makbuz Eklendi")
      },responseError=>{
        this.toastrService.warning(responseError.error.Errors,"Makbuzu ekledik ama sıkıntı var haberin ola")
      })
    }  
    else{
      this.makbuzEklendiBool = false;
      this.toastrService.error("Formunuz eksik","Dikkat")
    }

    
  }

  isMakbuzAdded():String 
  {
    if(this.makbuzEklendiBool)
      return "makbuz";
    else
      return "makbuz/add";
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
