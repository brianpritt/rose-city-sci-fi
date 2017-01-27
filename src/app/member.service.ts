import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
 }
  getMembers(){
    return this.members;
  }
  getMemberByKey(key:string){
    return this.angularFire.database.object('members/' + key);
  }
  addMember(newMember: Member){
    this.members.push(newMember);
  }
  deleteMember(memberToDelete){
    var memberEntryInFirebase = this.getMemberByKey(memberToDelete.$key);
    memberEntryInFirebase.remove();
  }
  updateMember(memberProfile){
    var memberEntryInFirebase = this.getMemberByKey(memberProfile.$key);
    console.log(memberProfile);
    memberEntryInFirebase.update(
      {
        name: memberProfile.name,
        email: memberProfile.email,
        bio: memberProfile.bio,
        favoriteAuthor: memberProfile.favoriteAuthor,
        tagLine: memberProfile.tagLine
      });
  }
}
