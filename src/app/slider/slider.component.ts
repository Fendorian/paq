import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {

  @ViewChild('sliderTrack') sliderTrack!: ElementRef;
  private currentIndex = 0;
  private slideWidth = 0;
  private totalSlides = 0;
  public slidesPerPage = 1;

  private autoplayInterval: any;

  ngAfterViewInit(): void {
    this.slideWidth = this.sliderTrack.nativeElement.children[0].clientWidth / this.slidesPerPage;
    this.totalSlides = this.sliderTrack.nativeElement.children.length;
    this.sliderTrack.nativeElement.style.width = `${this.totalSlides * this.slideWidth}px`;
    this.sliderTrack.nativeElement.style.transform = `translateX(${-this.currentIndex * this.slideWidth}px)`;

    this.autoplay();
  }

  autoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.onNextClick();
    }, 5000);
  }

  onPrevClick(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.sliderTrack.nativeElement.style.transform = `translateX(${-this.currentIndex * this.slideWidth}px)`;
    }
  }

  onNextClick(): void {
    if (this.currentIndex < this.totalSlides - this.slidesPerPage) {
      this.currentIndex++;
      this.sliderTrack.nativeElement.style.transform = `translateX(${-this.currentIndex * this.slideWidth}px)`;
    } else {
      this.currentIndex = 0;
      this.sliderTrack.nativeElement.style.transform = `translateX(0px)`;
    }
  }

}
