import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})
export class MemberDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private location: Location, private router: Router, private memberService: MemberService) { }


  memberToDisplay: FirebaseObjectObservable<any>;
  memberKey: string = null;

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.memberKey = urlParameters['key']
      this.memberToDisplay = this.memberService.getMemberByKey(this.memberKey);
    
    });
  }
}
