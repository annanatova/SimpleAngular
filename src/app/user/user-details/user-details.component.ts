import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    // private userService: UserService,
    ) {
    console.log(this.activatedRoute.snapshot.data['user']); // poluchavame data #1 satatic way
    this.activatedRoute.params.subscribe((v) => console.log(v)); // poluchavame data #2 dynamic way
  }
  ngOnInit(): void {
    
  }
}
