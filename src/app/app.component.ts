import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { from, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-observables';

  data: any[] = [];
  array1 = [1,3,5,7,9];
  array2 = ['A','B','C','D','E'];


  @ViewChild('createBtn')
  createBtn:ElementRef;
  createBtnObs;




  //1. create an observable

  //Observable
  // myObservable = new Observable((observer)=>{
  //   setTimeout(()=>{observer.next(1)},1000);
  //   setTimeout(()=>{observer.next(2)},2000);
  //   setTimeout(()=>{observer.next(3)},3000);
  //   //setTimeout(()=>{observer.error(new Error('Something went wrong, please try again later'))},3000);
  //   setTimeout(()=>{observer.next(4)},4000);
  //   setTimeout(()=>{observer.next(5)},5000);
  //   setTimeout(()=>{observer.complete()},6000);
  // });

  //of operator
  //myObservable = of(this.array1, this.array2, 'A', 10,'Hello');

  //from operator
  //myObservable = from(this.array1);
  //myObservable = from('asajds');

  //promise to observable
  promiseData = new Promise((resolve,reject)=>{
    resolve([10,20,30,40,50]);
  })
  //myObs = 2,4,6,8,10
  //result-> multiply each by 5 = 10,20,30,40,50
  myObservable = from([2,4,6,8,10]);

  transformedObs = this.myObservable.pipe(map((val)=>{
    return val*5;
  }))

  //subscriber - whenever the observable emits, the subscriber would get notified
  getAsyncData(){
    // this.myObservable.subscribe((val:any)=>{
    //   this.data.push(val);
    // },
    // (err) => {
    //   alert(err.message);
    // },
    // ()=>{
    //   alert('All the data is streamed');
    // });

    this.transformedObs.subscribe({
      next:(val:any)=>{
        this.data.push(val);
        console.log(val);      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('All data is streamed');
      }
    });
  }

  // buttonClicked(){
  //   let count = 0;
  //   this.createBtnObs = fromEvent(this.createBtn.nativeElement,'click')
  //                     .subscribe((data)=>{
  //                       console.log(data);
  //                       this.showItem(++count);
  //                     });

  // }

  ngAfterViewInit(){
    //this.buttonClicked();
  }

  // showItem(val){
  //   let div = document.createElement('div');
  //   div.innerHTML = 'Item '+ val;
  //   div.className = 'data-list'
  //   document.getElementById('container').appendChild(div);

  // }



}
