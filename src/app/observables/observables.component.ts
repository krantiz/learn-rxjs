import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  private observerSubscription: Subscription;
  private customObserverSubscription: Subscription;
  private operatorBasedObserverSubscription: Subscription;
  private customObservable;
  urlValue: string = '';
  customSubscriptionValue: string = '0';
  rxJsSubscriptionValue: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // This is custom Observable creation
    this.customObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2) {
          // observer.error(new Error());
        }
        if (count == 2) {
          // observer.complete();
        }
        count++;
      }, 1000);
    });
  }

  ngOnDestroy() {
    if (this.observerSubscription) {
      this.observerSubscription.unsubscribe();
    }
    if (this.customObserverSubscription) {
      this.customObserverSubscription.unsubscribe();
    }
    if (this.operatorBasedObserverSubscription) {
      this.operatorBasedObserverSubscription.unsubscribe();
    }
  }

  subscribeToCustomObs() {
    /* 
    They are User defined observables. 
    Here we need to create them; 
    Subscription and Unsubscription to the observer needs to be handled by us.
    */
    if (!this.customObserverSubscription) {
      this.customObserverSubscription = this.customObservable.subscribe(
        (data) => {
          console.log(data);
          this.customSubscriptionValue = data;
        },
        (error) => console.log('Error', error),
        (complete) => console.log('Completed')
      );
    } else {
      console.log('Already subcribed!');
    }
  }

  subscribeToRxJsObs() {
    /* 
    They are RxJs defined observables (ie. interval). 
    We simply subscribe to them; 
    Subscription and Unsubscription to the observer needs to be handled by us.
    */

    this.observerSubscription = interval(1000).subscribe((count) => {
      console.log(count++);
      this.rxJsSubscriptionValue = count++;
    });
  }

  subscribeToAngularObs() {
    /* 
    They are Angular defined observables. 
    We simply subscribe to them; 
    Angular takes care of the creation & Destruction part internally.
    */
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.urlValue = params.value;
    });
  }
}
