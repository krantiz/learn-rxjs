import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class SubjectsComponent implements OnInit {
  id: number;

  constructor(
    private route: ActivatedRoute,
    private dummyService: DummyService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate() {
    // Passive way: Wraps callback and events...
    this.dummyService.activatedEmitter1.emit(true);

    /*
    Active way: Can be triggered from code itself
    Because this is a special kind of observable 
    */
    this.dummyService.activatedEmitter.next(true);
  }
}
