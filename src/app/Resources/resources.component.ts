import { Component, OnInit } from '@angular/core';
import { GitService } from '../Services/git.service';
import { DatePipe } from '@angular/common';
import { link } from 'fs';
@Component({
  selector: 'Resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  providers: [DatePipe]
})
export class ResourcesComponent implements OnInit {
  title = 'Resources';
  definitions: Record<string, any>[] = []; // For stricter checking definitions: { term: string; definition: string; link: string; updated?: string }[] = [];
  filePath = 'src/app/Resources/resources.component.ts';
  constructor(private gitService: GitService, private datePipe: DatePipe) {}

  getFormattedDate(date: string) {
    const dateFormat = this.datePipe.transform(date, 'MMM d');  // 'Feb 16'
    const timeFormat = this.datePipe.transform(date, 'h:mm a'); // '11:00'
    
    return `${dateFormat}, ${timeFormat}`;
  }
  
  ngOnInit(): void {


























    this.definitions = [
      {
        term: 'new array',
        definition: '',
        link,
        updated: 'Loading...',
      },
      {
        term: 'Assistive Technology',
        definition: 'Assistive technology is simply a piece of equipment or software that helps someone with a disability to do something that they would otherwise find difficult or impossible. Screen readers, magnifiers, and alternative keyboards are examples of assistive technology.',
        link: 'https://www.deque.com/blog/assistive-technology/#:~:text=Assistive%20technology%20is%20simply%20a,to%20name%20just%20a%20few.',
        updated: 'Loading...',
        startLine: 51,
        endLine: 59
      },
      {
        term: 'WebAIM',
        definition: 'WebAIM (Web Accessibility In Mind) is a non-profit organization based at the Center for Persons with Disabilities at Utah State University. WebAIM has provided comprehensive web accessibility solutions since 1999. These years of experience have made WebAIM one of the leading providers of web accessibility expertise internationally.',
        link: 'https://webaim.org/',
        updated: 'Loading...',
        startLine: 60,
        endLine: 68,
      },
      {
        term: 'Deque Systems',
        definition: 'Deque Systems is a company that specializes in digital accessibility. Deque provides software, training, and consulting services to help organizations meet their accessibility goals. Deque has been a leader in the field of digital accessibility since 1999.',
        link: 'https://www.deque.com/',
        updated: 'Loading...',
        startLine: 69,
        endLine: 77
      },
      {
        term: 'W3C',
        definition: " World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of the Web. W3C is made up of member organizations, full-time staff, and the public. W3C's mission is to lead the Web to its full potential by developing protocols and guidelines that ensure the long-term growth of the Web.",
        link: 'https://www.w3.org/',
        updated: 'Loading...',
        startLine: 78,
        endLine: 86
      },
    ];
      // Call API using async/await .subscribe() and Loop through each item and fetch its last updated time 
      this.definitions.forEach(definition => {
        this.gitService.getLastUpdated(this.filePath, definition.startLine, definition.endLine).subscribe(response => {
          definition.updated = this.getFormattedDate(response.updated); // Format the updated time using DatePipe
        });
      });
  }
}
