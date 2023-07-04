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
      name: 'Image classifier performance improvement with data augmentation using Object detection',
      thumbnail: '../../assets/ResNetYOLOClassifier.png',
      technologies:'YOLOv8, CNN, ResNet 50, TensorFlow Keras, Tkinter',
      description: `I used a pretrained Image Classifer to classify dogs breeds, added few layers and gave it an image generator for training.
      Images were polluted by different elements like snow on Huskies pictures (another breed dog looking like a Husky in snow could be classifed as one) so I cropped the dogs for the model to focus on them.
      Doing so allowed me to multiply the images when there was multiple dogs on them.
      I served the model on a desktop app`,
      dataset:'Stanford dogs',
      datasetUrl:'http://vision.stanford.edu/aditya86/ImageNetDogs/',
      notebookUrl: 'https://colab.research.google.com/drive/1_FUts9YnuVnUn_6uI3_-Z4Wgex5PZ7Tm?usp=sharing',
      githubUrl: 'https://github.com/jerem64/InterfaceDogBreedClassifier'
    }
  ];

  openUrl(url: string) {
    // Open the Google Colaboratory notebook in a new tab
    window.open(url, '_blank');
  }
}
