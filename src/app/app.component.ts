import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '../../node_modules/@angular/forms';
import {map,startWith} from 'rxjs/operators'
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export  interface empDataL{
  empID:string;
  empName:string;
  gender :string;
  Lang:string;
}
export interface DialogData{
  animal:string;
  name:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  animal  : string;
  name    : string;
  empdata : empDataL[]=[];
  options :string[]= ['Mango','Grapes','Apple']
  filteredOptions : any;
  myControl =new FormControl();
constructor(private formBuilder: FormBuilder , public dialog : MatDialog) {  }

  public dynamicform: FormGroup;
  ngOnInit() {
     this.dynamicform= this.formBuilder.group({
        AddingMore: this.formBuilder.array([ ])
      });
      this.filteredOptions=this.myControl.valueChanges.pipe(startWith(''),map(value=> this.filterFruits(value)))
  }
  get AddingMore(): FormArray {
    return this.dynamicform.get('AddingMore') as FormArray;
  };

  addItem(): void {
  this.AddingMore.push(this.formBuilder.group({
    empID:'',
    empName:'',
    gender:'',Lang:""

  }));
this.empdata.push({
  empID:"",
  empName:"",
  gender:"",Lang:""
})
  }

  //Auto Complete
 filterFruits(value:string):string[]{
   const filterValue=value.toLocaleLowerCase();
  return this.options.filter(option=> option.toLocaleLowerCase().includes(filterValue))
 }

 // Dialog
 openDialog(): void {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '250px',
    data: {name: this.name, animal: this.animal}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');   
    this.animal = result;
  
  });
}

}

@Component({
selector: 'dialogoverviewex',
templateUrl: 'dialogoverviewex.html',
})
export class DialogOverviewExampleDialog {

constructor(
  public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

Exit() : void{
  console.log("..............."+this.data.name + this.data.animal)
  this.dialogRef.close();
}

}
