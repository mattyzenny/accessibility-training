import { Component, OnInit } from '@angular/core';
import { GitService } from '../Services/git.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'Resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  providers: [DatePipe]
})
export class ResourcesComponent implements OnInit {
  title = 'Resources';
  resources: Record<string, any>[] = []; 
  filePath = 'contentBundle.json'; // Use this if using contentBundle.json directly

  constructor(private gitService: GitService, private datePipe: DatePipe) {}

  getFormattedDate(date: string) {
    const dateFormat = this.datePipe.transform(date, 'MMM d');  // 'Feb 16'
    const timeFormat = this.datePipe.transform(date, 'h:mm a'); // '11:00'
    
    return `${dateFormat}, ${timeFormat}`;
  }

  ngOnInit(): void {
    this.resources = [
      {
        term: 'AT',
        definition: 'Assistive Technology is simply a piece of equipment or software that helps someone with a disability to do something that they would otherwise find difficult or impossible. Screen readers, magnifiers, and alternative keyboards are examples of assistive technology.',
        link: 'https://www.deque.com/blog/assistive-technology/#:~:text=Assistive%20technology%20is%20simply%20a,to%20name%20just%20a%20few.',
        updated: 'Loading...',
        startLine: 26,
        endLine: 33
      },
      {
        term: 'HAT',
        definition: 'HAT stands for hidden accessible text. It is only announced to those users who use screen readers. They are often applied to give supplemental information that sighted users can see through the orientation of the page',
        link: 'https://webaim.org/',
        updated: 'Loading...',
        startLine: 34,
        endLine: 41
      },
      {
        term: 'Deque Systems',
        definition: 'Deque Systems is a company that specializes in digital accessibility. Deque provides software, training, and consulting services to help organizations meet their accessibility goals. Deque has been a leader in the field of digital accessibility since 1999.',
        link: 'https://www.deque.com/',
        updated: 'Loading...',
        startLine: 42,
        endLine: 49
      },
      {
        term: 'W3C',
        definition: "The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of the Web.",
        link: 'https://www.w3.org/',
        updated: 'Loading...',
        startLine: 50,
        endLine: 57
      }
    ];

    // Fetch the full content bundle in one API call
    this.gitService.getLastUpdated(this.filePath).subscribe({
      next: (response) => {
        console.log("Received contentBundle.json:", response);
        this.resources = response.Resources.map((resource: { updated: string; }) => ({
          ...resource,
          updated: resource.updated !== "Unknown" ? this.getFormattedDate(resource.updated) : "No Recent Updates"
        }));
      },
      error: (err) => {
        console.error("Failed to fetch content bundle:", err);
      }
    });
  }
}