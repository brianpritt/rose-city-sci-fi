import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'role',
  pure: false
})
export class RolePipe implements PipeTransform {
  transform(input: Member[], desiredRole) {
    var output: any[] =[];
    if (input != null){
      if (desiredRole === "member"){
        for (let i = 0; i < input.length; i++){
          if (input[i].role === "member") {
            output.push(input[i]);
          }
        }
        return output;
      }
      else if (desiredRole === "board"){
        for (let i = 0; i < input.length; i++){
          if (input[i].role === "board") {
            output.push(input[i]);
          }
        }
        return output;
      }
      else if (desiredRole === "president"){
        for (let i = 0; i < input.length; i++){
          if (input[i].role === "president") {
            output.push(input[i]);
          }
        }
        return output;
      }
      else {
        return input;
      }
    }
  }
}
