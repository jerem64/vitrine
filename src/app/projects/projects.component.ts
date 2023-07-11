import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  openChatbot(): void {
    this.sharedService.openChatbot();
  }

  ngOnInit(): void {}

  openUrl(url: string) {
    if(url!="chatbot") {
      window.open(url, '_blank');
    }
    else {
      { this.openChatbot(); }
    }
  }

  projects = [
    {
      name: 'Opensource LLM Dolly',
      thumbnail: '../../assets/Dolly-LLM.png',
      technologies:'[HuggingFace], [Databricks Dolly], [LangChain], [Google Drive]',
      description: `In this Notebook, I used the Databricks opensource LLM Dolly providing it PDF documents from a Google Drive folder. 
      I used the HuggingFace pipeline and the langChain Q&A over documents chain to address the LLM.`,
      
      links:[
        {
          label: 'Dolly',
          icon: '../../assets/hf-logo.png',
          url: 'https://huggingface.co/databricks/dolly-v2-3b'
        },
        {
          label: 'Notebook',
          icon: '../../assets/icon-colab.png',
          url: 'https://colab.research.google.com/drive/1B4HJUIR4mhQeCar_Fj6wPbAUjRX8LWq5#scrollTo=mzJIGtG1ZwF2'
        }
      ]
    },
    {
      name: 'Chatbot using LLM over a document',
      thumbnail: '../../assets/ChatbotLLM.png',
      technologies:'[OpenAI], [LangChain], [Flask], [Google run], [Firebase], [Google cloud]',
      description: `On this Angular website hosted on Firebase, you can find on the bottom right Adrew, my chatbot.
      It's using OpenAI Large Language Model and Langchain to load my resume. The Flask API is hosted on Google Run.`,
      links:[
        {
          label: 'Andrew',
          icon: '../../assets/icon-chatbot-dark.png',
          url: 'chatbot'
        },
        {
          label: 'API',
          icon: '../../assets/icon-github.png',
          url: 'https://github.com/jerem64/API_Flask_OpenAI_CV'
        }
      ]
    },
    {
      name: 'Enhanced classifier with object detection',
      thumbnail: '../../assets/ResNetYOLOClassifier.png',
      technologies:'[YOLOv8], [CNN], [ResNet 50], [TensorFlow Keras], [Tkinter]',
      description: `I utilized a pretrained Images Classifier to classify dog breeds, enhancing it with additional layers and an image generator.
      To overcome misclassification caused by elements like snow, I cropped the dogs from the images.
      This allowed the model to focus on them and to multiply pictures. The model was deployed on a desktop app.`,
      links:[
        {
          label: 'Dataset',
          icon: '../../assets/icon-dataset.png',
          url: 'http://vision.stanford.edu/aditya86/ImageNetDogs/'      
        },
        {
          label: 'Notebook',
          icon: '../../assets/icon-colab.png',
          url: 'https://colab.research.google.com/drive/1_FUts9YnuVnUn_6uI3_-Z4Wgex5PZ7Tm?usp=sharing'
        },
        {
          label: 'App',
          icon: '../../assets/icon-github.png',
          url: 'https://github.com/jerem64/InterfaceDogBreedClassifier'
        }
      ]
    },
    {
      name: 'Multi-label Stackoverflow posts classification',
      thumbnail: '../../assets/tags-classification.png',
      technologies:'[StackExchange], [SQL], [Streamlit], [Wordcloud], [Scikit Learn], [LDA], [TF-IDF], [BERT], [USE], [Doc2Vec], [OvR], [Random Forest], [XGBoost]',
      description: `The first notebook includes Stackoverflow post fetching with stack exchange, data cleaning and a brief EDA.
      The second notebook covers embedding creation, data dimensional reduction, training multiple classification models, and comparing their performance.
      The Streamlit App hosts the model with the optimal weight/performance ratio.`,
      links:[
        {
          label: 'Clean',
          icon: '../../assets/icon-colab.png',
          url: 'https://colab.research.google.com/drive/1RYyMrDfJmtI2z35st9nKdJd9yfuUyAPH?usp=sharing'
        },
        {
          label: 'Classify',
          icon: '../../assets/icon-colab.png',
          url: 'https://colab.research.google.com/drive/1KIeZkgy1RbAsl8WBs8SazKi7ys8xcxZP?usp=sharing'
        },
        {
          label: 'App',
          icon: '../../assets/streamlit-icon.png',
          url: 'https://jerem64-project-api-streamlitstackoverflow-streamlit-app-5tj1kk.streamlit.app/'
        }
      ]
    }
  ];
}
