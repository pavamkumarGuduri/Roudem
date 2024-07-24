import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  public photos:any=[];

  constructor(private _photoService:PhotoService) { 
    _photoService.getPhotos().subscribe(
      (data:any)=>{
        this.photos=data.data.memes;
      },
      (err:any)=>{
        alert("internal server error...")
      }

    )
  }

  ngOnInit(): void {
  }

}
