import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  translations: any;
  currentLanguage = 'en';

  constructor(private translateService: TranslateService,private http: HttpClient) {}
  ngOnInit(): void {
    this.loadTranslations();
  }

  loadTranslations(): void {
    this.http.get('assets/translations.json').subscribe((data: any) => {
      this.translations = data;
    });
  }
  changeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.currentLanguage = target.value;
  }
  
  
  
}
