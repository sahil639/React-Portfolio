import { v4 as uuidv4 } from 'uuid';
import cronos from '../images/cronos.jpg';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'RSR Wildlife Fund',
    desc: 'A website made using Reactjs for collecting donations',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Techopedia 9.0',
    desc: "Main event and subevents poster made in blender and Photosop for IEEE SIESGST's Techopedia 9.0 Technical event",
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Green Cuisine Website',
    desc: 'Vegan Restaurant Management website with frontend using HTML, CSS, JS and Backend using Django',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Adyasha's Portfolio",
    desc: 'A portfolio for Adyasha Mishra. She is fullstack developer from Navi Mumbai. The portfolio was designed with figma and developed using.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Real Time Face Detection Using DNN',
    desc: 'Made a model for detecting faces using webcam or any other devices which displays the accuracy of detection with the help of depp neural networks.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Cronos - to do app',
    desc: 'A to do app mde in Android Studio using Kotlin programming Language.',
    img: cronos,
  },
];

export default projects;
