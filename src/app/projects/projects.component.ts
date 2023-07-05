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
      technologies:'[YOLOv8], [CNN], [ResNet 50], [TensorFlow Keras], [Tkinter]',
      description: `I utilized a pretrained Image Classifier to classify dog breeds, enhancing it with additional layers and an image generator.
      To overcome misclassification caused by elements like snow, I cropped the dogs from the images.
      This allowed the model to focus on them and to multiply pictures. The model was deployed on a desktop app.`,
      links:[
        {
          label: 'Notebook',
          icon: '../../assets/icon-colab.png',
          url: 'https://colab.research.google.com/drive/1_FUts9YnuVnUn_6uI3_-Z4Wgex5PZ7Tm?usp=sharing'
        },
        {
          label: 'Dataset',
          icon: '../../assets/icon-dataset.png',
          url: 'http://vision.stanford.edu/aditya86/ImageNetDogs/'      
        },
        {
          label: 'Repository',
          icon: '../../assets/icon-github.png',
          url: 'https://github.com/jerem64/InterfaceDogBreedClassifier'
        }
      ]
    },
    {
      name: 'Chatbot using LLM over a document',
      thumbnail: '../../assets/ChatbotLLM.png',
      technologies:'[OpenAI], [LangChain], [Flask], [Google run], [Firebase], [Google cloud]',
      description: `On this website, you can find on the bottom right Adrew, my chatbot.
      It's using OpenAI Large Language Model and Langchain to load a document (my resume). The API is using Flask and is stored on hosted on Google Run.
      The chatbot is on an angular website hosted on Firebase.`,
      links:[
        {
          label: 'Website',
          icon: '../../assets/icon-github.png',
          url: 'https://github.com/jerem64/vitrine'
        },
        {
          label: 'API',
          icon: '../../assets/icon-github.png',
          url: 'https://github.com/jerem64/API_Flask_OpenAI_CV'
        }
      ]
    }
  ];

  openUrl(url: string) {
    // Open the Google Colaboratory notebook in a new tab
    window.open(url, '_blank');
  }
}
