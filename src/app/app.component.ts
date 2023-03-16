import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { DummyService } from './dummy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;

  constructor(
    private modalService: NgbModal,
    private dummyService: DummyService
  ) {}

  ngOnInit() {
    this.activatedSub = this.dummyService.activatedEmitter.subscribe(
      (didActiviated) => {
        this.userActivated = !this.userActivated;
      }
    );
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
