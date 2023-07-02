import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}

  projects = [
    {
      name: 'Project 1',
      thumbnail: 'path-to-thumbnail-image-1',
      description: 'Brief description of Project 1 Brief description of Project 1 Brief description of Project 1 Brief description of Project 1 Brief description of Project 1 Brief description of Project 1 Brief description of Project 1 Brief description of Project 1 Brief description of Project 1 Brief description of Project 1 Brief description of Project 1 Brief description of Project 1 Brief description of Project 1 ',
      notebookUrl: 'link-to-project-1-notebook'
    },
    {
      name: 'Project 2',
      thumbnail: 'path-to-thumbnail-image-2',
      description: 'Brief description of Project 2',
      notebookUrl: 'link-to-project-2-notebook'
    },
    {
      name: 'Project 3',
      thumbnail: 'path-to-thumbnail-image-2',
      description: 'Brief description of Project 2',
      notebookUrl: 'link-to-project-2-notebook'
    },
    {
      name: 'Project 4',
      thumbnail: 'path-to-thumbnail-image-2',
      description: 'Brief description of Project 2',
      notebookUrl: 'link-to-project-2-notebook'
    },
    {
      name: 'Project 5',
      thumbnail: 'path-to-thumbnail-image-2',
      description: 'Brief description of Project 2',
      notebookUrl: 'link-to-project-2-notebook'
    },
    {
      name: 'Project 6',
      thumbnail: 'path-to-thumbnail-image-2',
      description: 'Brief description of Project 2',
      notebookUrl: 'link-to-project-2-notebook'
    },
    {
      name: 'Project 7',
      thumbnail: 'path-to-thumbnail-image-2',
      description: 'Brief description of Project 2',
      notebookUrl: 'link-to-project-2-notebook'
    },
    {
      name: 'Project 8',
      thumbnail: 'path-to-thumbnail-image-2',
      description: 'Brief description of Project 2',
      notebookUrl: 'link-to-project-2-notebook'
    },
    {
      name: 'Project 9',
      thumbnail: 'path-to-thumbnail-image-2',
      description: 'Brief description of Project 2',
      notebookUrl: 'link-to-project-2-notebook'
    }
    // Add more projects as needed
  ];

  openNotebook(notebookUrl: string) {
    // Open the Google Colaboratory notebook in a new tab
    window.open(notebookUrl, '_blank');
  }
}
