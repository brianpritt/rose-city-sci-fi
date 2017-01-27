import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
 }
  getProjects(){
    return this.members;
  }

}
