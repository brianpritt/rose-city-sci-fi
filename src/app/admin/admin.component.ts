import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { AngularFire } from 'angularfire2';



@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {
  memberToEdit: Member = null;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }
  editMember(member){
    this.memberToEdit = member
    console.log(member)
  }
  doneEditing(){
    this.memberToEdit = null;
  }
  startUpdating(member){
    console.log(member)
    this.memberService.updateMember(member);
  }

}
