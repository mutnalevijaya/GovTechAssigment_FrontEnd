import { Component, Input, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css'],
})
export class TutorialDetailsComponent {
  @Input() viewMode = true;

  @Input() currentTutorial: Tutorial = {
    name: ''
  };

  randomName = ''
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

      this.message = '';
      this.getRandom();
    
  }

  getRandom(): void {
    this.tutorialService.getRandom().subscribe({
      next: (data) => {
          this.randomName = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
