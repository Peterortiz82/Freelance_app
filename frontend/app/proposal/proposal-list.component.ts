import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(1, 'Abc Company one', 'http://google.com',
    'Ruby on Rails', 150, 120, 15, 'peterortiz@gmail.com')
  proposalTwo: Proposal = new Proposal(2, 'Xyz Company two', 'http://google.com',
    'Ruby on Rails', 150, 120, 15, 'peterortiz@gmail.com')
  proposalThree: Proposal = new Proposal(3, 'New Company', 'http://google.com',
    'Ruby on Rails', 150, 120, 15, 'peterortiz@gmail.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
