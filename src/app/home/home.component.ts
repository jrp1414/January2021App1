import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
//import { Observable, Subscription } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // numSubs:Subscription;
  constructor() { }


  ngOnInit(): void {
    // let numObs = Observable.interval(2000);

    // this.numSubs = numObs.subscribe((num)=>{
    //   console.log(num);
    // });

    // let obs = new Observable((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next("First Data Sent");
    //   }, 1000);
    //   setTimeout(() => {
    //     observer.next("Second Data Sent");
    //   }, 3000);
    //   setTimeout(() => {
    //     observer.next("Third Data Sent");
    //   }, 5000);

    //   // setTimeout(() => {
    //   //   observer.error("Some Error occurred");
    //   // }, 6000);

    //   setTimeout(() => {
    //     observer.complete();
    //   }, 6000);

    //   setTimeout(() => {
    //     observer.next("Fourth Data Sent");
    //   }, 7000);
    // });


    // obs.subscribe((data) => {
    //   console.log(new Date().toTimeString() + " : " + data);
    // }, (error) => {
    //   console.error(error);
    // }, () => {
    //   console.info("Completed");
    // });

    // let sub = new Subject();
    // setTimeout(() => {
    //   sub.next("Started Sending");
    // }, 1000);

    // sub.subscribe((data) => {
    //   console.log(data);
    // });

    let ee = new EventEmitter();
    setTimeout(() => {
      ee.emit("Event Emitter Example");
    }, 2000);

    ee.subscribe((data) => {
      console.log(data);
    });

  }

  ngOnDestroy(): void {
    //this.numSubs.unsubscribe();
  }

}
