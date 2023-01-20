import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-one';
  ArrayOne=['Taimoor', 'Ali', 'Shahzad', 'Noman', 'Rehman'];
  
  ArrayTwo=[
    {name:'Taimoor'},
    {name:'Ali'},
    {name:'Shahzad'},
    {name:'Noman'},
    {name:'Rehman'}
  ];




  /*name = 'Taimoor';
  selectedName:any =[];

  onAdd(){
    this.selectedName.push(this.name);
  };

  onRemove(){
    this.selectedName.pop();
  };*/

  /*valOne:string = '';
  addVal(val:string){
    this.valOne=val;
    console.warn(val);
    this.ArrayOne.push(this.valOne);

  };
  valTwo:string ='';
  AddFuncTwo(val:string){
    this.valTwo=val;
    console.warn(val);
    this.ArrayTwo.push(this.valTwo);
  };*/

  SelectedNameTwo:any =[];
  AddFunctwo(){
    this.SelectedNameTwo.push(this.ArrayTwo.pop());
  };


  name = 'Taimoor';
  selectedName:any =[];

  AddFunc(){
    this.selectedName.push(this.ArrayOne.pop());
  };

  RemoveFunc(){
    this.selectedName.pop();
  };
/////////////////////////////////////////////////

  //feature = 'Feature 1'

  //selectedFeatures: any = [];

 // onAdd() {
   // this.selectedFeatures.push(this.feature);
  //}

  //onRemove(){
    //this.selectedFeatures.pop();
  //}




}
