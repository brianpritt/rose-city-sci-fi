import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css'],
  providers: [MemberService]
})
export class AddMemberComponent implements OnInit {
  constructor(private memberService: MemberService){}

  ngOnInit() {
  }
  submitForm(name: string, email: string, bio: string, favoriteAuthor: string, tagLine: string){
    var newMember: Member = new Member(name, email, bio, favoriteAuthor, tagLine);
    this.memberService.addMember(newMember);
  }

}
