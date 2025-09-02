import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{

  ngOnInit(): void {
    //observabe
    // let obs = new Observable((observer)=>{
    //   observer.next(Math.random())
    // })

    // subject
    //const subject = new Subject()
    // subscriber 1
    // obs.subscribe((data)=>{
    //   console.log(data);
    // })

    // ////subscriber 2
    // obs.subscribe((data)=>{
    //   console.log(data);
    // })


    //Behaviour subject
    //const subject = new BehaviorSubject<number>(100);

    //replay subject
    const subject = new ReplaySubject();

    subject.next(100);
    subject.next(200);
    subject.next(300);

    subject.subscribe((data)=>{
      console.log(data);
    })

    ////subscriber 2
    subject.subscribe((data)=>{
      console.log(data);
    })

    subject.next(2020)

    subject.subscribe((data)=>{
      console.log(data);
    })

    subject.next(2023);

    subject.subscribe((data)=>{
      console.log(data);
    })
    // const subject = new Subject()
    // const data = ajax('https://randomuser.me/api/');

    // subject.subscribe((res)=>{
    //   console.log(res);
    // })

    // subject.subscribe((res)=>{
    //   console.log(res);
    // })

    // subject.subscribe((res)=>{
    //   console.log(res);
    // })

    // data.subscribe(subject);

  }

}
