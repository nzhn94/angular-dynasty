import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-layout',
  templateUrl: './body-layout.component.html',
  styleUrls: ['./body-layout.component.scss'],
})
export class BodyLayoutComponent implements OnInit {
  tournament = 'tournament';
  season = 'seasons';
  about = 'about';

  public tournaments = [
    {
      image: '../../../assets/images/image 219.png',
      iconImg: '../../../assets/images/image-uploader.png',
      title: 'Overwatch All-Stars 2022 Championships!!!',
      progressBar: 0,
    },
    {
      image: '../../../assets/images/image 219-1.png',
      iconImg: '../../../assets/images/image-uploader-1.png',
      title: 'Overwatch All-Stars 2022 Championships!!!',
      progressBar: 0,
    },
    {
      image: '../../../assets/images/image 219-2.png',
      iconImg: '../../../assets/images/image-uploader-2.png',
      title: 'Overwatch All-Stars 2022 Championships!!!',
      progressBar: 0,
    },
    {
      image: '../../../assets/images/image 219-3.png',
      iconImg: '../../../assets/images/image-uploader-3.png',
      title: 'Overwatch All-Stars 2022 Championships!!!',
      progressBar: 0,
    },
  ];
  public seasons = [
    {
      image: '../../../assets/images/image 220.png',
      iconImg: '../../../assets/images/image-uploader.png',
      title: 'Overwatch All-Stars 2022 Championships!!!',
      progressBar: 25,
    },
    {
      image: '../../../assets/images/image 220-1.png',
      iconImg: '../../../assets/images/image-uploader-1.png',
      title: 'Overwatch All-Stars 2022 Championships!!!',
      progressBar: 25,
    },
    {
      image: '../../../assets/images/image 220-2.png',
      iconImg: '../../../assets/images/image-uploader-2.png',
      title: 'Overwatch All-Stars 2022 Championships!!!',
      progressBar: 50,
    },
    {
      image: '../../../assets/images/image 220-3.png',
      iconImg: '../../../assets/images/image-uploader-3.png',
      title: 'Overwatch All-Stars 2022 Championships!!!',
      progressBar: 75,
    },
  ];
  public latestNews = [
    {
      image: '../../../assets/images/overlay-1.png',
      iconImg: '../../../assets/images/image-uploader.png',
      title: 'Overwatch All-Stars 2022 Championships!!!',
      progressBar: 25,
    },
    {
      image: '../../../assets/images/overlay-1.png',
      iconImg: '../../../assets/images/image-uploader-1.png',
      title: 'Overwatch All-Stars 2022 Championships!!!',
      progressBar: 25,
    },
    {
      image: '../../../assets/images/overlay-2.png',
      iconImg: '../../../assets/images/image-uploader-2.png',
      title: 'Overwatch All-Stars 2022 Championships!!!',
      progressBar: 50,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
