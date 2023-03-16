import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit, OnDestroy {
  private operatorBasedObserverSubscription: Subscription;
  private customObservable;
  formattedValue;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /* 
    Operators are predefined functions which sits between observer and it's subscription.
    */
    this.customObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });
  }

  ngOnDestroy() {
    if (this.operatorBasedObserverSubscription) {
      this.operatorBasedObserverSubscription.unsubscribe();
    }
  }

  subscribeToObsWithOperators() {
    this.operatorBasedObserverSubscription = this.customObservable
      .pipe(
        filter((data: any) => {
          if (data == 0) {
            data = data.value;
          }
          return data > 0;
        }),
        map((data: number) => {
          return `Return ${data + 1}`;
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.formattedValue = data;
        },
        (error) => console.log('Error', error),
        (complete) => console.log('Completed')
      );
  }
}
