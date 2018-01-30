import { Component, OnInit, Input} from '@angular/core';
import { UserService } from './user.service';

import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  @Input() userMessage: string;
  @Input() newUserMessage: string;
  @Input() setUserStatus: string;

  constructor(private userService: UserService) { }

  getUserInfo(): void {
    this.userMessage = 'Getting...';
    this.userService.getUser().then((user : User) => {
      this.userMessage = user.message;
    });
  }

  setUserInfo(): void {
    this.setUserStatus = 'Posting...'
    this.userService.setUser(this.newUserMessage).then(() => {
      this.setUserStatus = 'Post Success!';
    });
  }

  ngOnInit() {
    this.userMessage = '...';
    this.setUserStatus = '...';
  }
}
