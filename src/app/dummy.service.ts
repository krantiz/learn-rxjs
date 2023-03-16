import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DummyService {
  /*
  These are mainly used when we do cross-component communication via services. 
  Otherwise, for parent-child relationships, we have the @Input @Output decorator.
  */

  // This is part of angular
  activatedEmitter1 = new EventEmitter<boolean>();
  // This is part of rxJs
  activatedEmitter = new Subject<boolean>();
}
