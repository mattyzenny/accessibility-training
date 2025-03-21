import { Component, OnInit } from '@angular/core';
import { GitService } from '../../Services/GitService/git.service';
import { DatePipe } from '@angular/common';

type Resource = { startLine: number; endLine: number } & Record<string, any>;

@Component({
  selector: 'Resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  providers: [DatePipe],
})

export class ResourcesComponent implements OnInit {
  title = 'Resources';
  resources: Resource[] = [];
  searchList: Record<string, any>[] = [];
  filePath = 'contentBundle.json';

  constructor(private gitService: GitService, private datePipe: DatePipe) {}

  // Function that formats the date in MMM d, h:mm format
  getFormattedDate(date: string) {
    const dateFormat = this.datePipe.transform(date, 'MMM d'); // 'Feb 16'
    const timeFormat = this.datePipe.transform(date, 'h:mm a'); // '11:00'

    return `${dateFormat}, ${timeFormat}`;
  }

  //anchor link logic
  selectedResource(event: Event) {
    const currentElementParent = event.target as HTMLElement;
    const targetElement = currentElementParent.shadowRoot?.activeElement?.id;
    if (targetElement) {
      const element = document.getElementById(targetElement);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }


  ngOnInit(): void {
    this.resources = [
      {
        term: 'AT',
        definition:
          'Assistive Technology is equipment or software that helps someone with a disability to do something that they would otherwise find difficult or impossible. Screen readers, magnifiers, and alternative keyboards are examples of assistive technology.',
        link: 'https://www.deque.com/blog/assistive-technology/#:~:text=Assistive%20technology%20is%20simply%20a,to%20name%20just%20a%20few.',
        updated: 'Loading...',
        startLine: 41,
        endLine: 49,
      },
      {
        term: 'HAT',
        definition:
          'HAT represents Hidden Accessible Text. It is only announced to those users who use screen readers. They are often applied to give supplemental information that sighted users infer through the orientation of the page.',
        link: 'https://webaim.org/',
        updated: 'Loading...',
        startLine: 50,
        endLine: 58,
      },
      {
        term: 'Deque Systems',
        definition:
          'Deque Systems is a company that heads most of the software and tooling around accessibility. They closely align with the W3C and are a great resource for learning more about accessibility.',
        link: 'https://www.deque.com/',
        updated: 'Loading...',
        startLine: 59,
        endLine: 67,
      },
      {
        term: 'W3C',
        definition:
          'The World Wide Web Consortium (W3C) is an international community that develops open standards to ensure the long-term growth of the Web.',
        link: 'https://www.w3.org/',
        updated: 'Loading...',
        startLine: 68,
        endLine: 76,
      },
      {
        term: 'WCAG',
        definition:
          'The Web Content Accessibility Guidelines (WCAG) are part of a series of web accessibility guidelines published by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C), the main international standards organization for the Internet.',
        link: 'https://www.w3.org/WAI/WCAG22/Understanding/',
        updated: 'Loading...',
        startLine: 68,
        endLine: 76,
      },
      {
        term: 'ADA Component Checklist',
        definition:
          'A checklist that can be used to ensure that core components are accessible. This checklist is a great resource for designers when building components.',
        link: 'https://dequeuniversity.com/checklists/web/',
        updated: 'Loading...',
        startLine: 86,
        endLine: 94,
      },
      {
        term: 'Bootstrap',
        definition:
          'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first, front-end web development. It was leveraged alongside cel-components styles to build this training.',
        link: 'https://getbootstrap.com/',
        updated: 'Loading...',
        startLine: 99,
        endLine: 107,
      },
      {
        term: 'Landmarks',
        definition: 'Landmarks are a way to identify the different sections of a page. They are used by screen readers to help users navigate the page.',
        link: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/general-principles.html',
        updated: 'Loading...',
        startLine: 108,
        endLine: 115,
      },
      {
        term: 'MDN',
        definition:
          'Mozilla Developer Network (MDN) is a resource for developers, maintained by the community of developers and technical writers and hosting documentation for web technologies, including HTML, CSS, and JavaScript.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility',
        updated: 'Loading...',
        startLine: 116,
        endLine: 124,
      }
    ];
      
    // Fetch the full content bundle in one API call
    this.gitService.getLastUpdated(this.filePath).subscribe(
      (response) => {
        this.resources = response.Resources.map(
          (resource: { term: any; updated: string }) => ({
            ...resource,
            updated: this.getFormattedDate(resource.updated), // to format in Feb 16, 11:00 format
            id: resource.term.replace(/\s+/g, '-').toLowerCase(), // Adds a new 'id' property for anchor links
          })
        );
    
        // Build searchList based on updated resources
        this.searchList = this.resources.map((resource) => ({
          id: resource.id,
          label: resource.term
        }));
      },
      (error) => {
        console.error('Failed to fetch content bundle:', error);
      }
    );  
  }
}
