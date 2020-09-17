import React from 'react';
import './App.css';

/*id generator*/
import {generate as id} from 'shortid';
import Card from './components/Card.jsx';


const cards = [
  {
  id: id(),
  title: "Card 1",
  img: '/assets/wolf.jpg',
  author: 'Dorian',
  date: new Date().toLocaleDateString(),
  tags: ['animal', 'wolf', 'snow'],
  views: 23,
  description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
  },
  {
  id: id(),
  title: "Card 2",
  img: '/assets/wolf.jpg',
  author: 'Dorian',
  date: new Date().toLocaleDateString(),
  tags: ['animal', 'wolf', 'snow'],
  views: 24,
  description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
  },
  {
  id: id(),
  title: "Card 3",
  img: '/assets/wolf.jpg',
  author: 'Dorian',
  date: new Date().toLocaleDateString(),
  tags: ['animal', 'wolf', 'snow'],
  views: 25,
  description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
  }
]


function App() {

  return (

      <div key="cardsContainer" className="cards">
    
          {
            cards.map(
              data => ( <Card key={id()} info={data} /> )
            )
        }
      </div>  
  );

}

export default App;