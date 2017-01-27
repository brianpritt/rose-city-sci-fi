import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { MemberService} from '../member.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [MemberService]
})
export class MainPageComponent implements OnInit {
  @Output() editMemberToSend = new EventEmitter();
  filterByRoleValue: any = "All"
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private memberService: MemberService) { }
  ngOnInit() {
    this.members = this.memberService.getMembers();
  }
  viewMember(member){
    this.router.navigate(['members', member.$key]);
  }
  deleteSelectedMember(member){
    if(confirm("Are you sure?")){
    this.memberService.deleteMember(member);
    }
  }
  editMember(member){
    this.editMemberToSend.emit(member);
  }
  filterByRole(role) {
    this.filterByRoleValue = role;
    console.log(role);
}
}
