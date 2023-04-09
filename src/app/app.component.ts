import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'paq';
  translations: any;

constructor(private dataService: DataService, private translateService: TranslateService,private http: HttpClient) {
 }


ngOnInit(): void {
  this.dataService.getTranslations().subscribe((translations) => {
    this.translations = translations;
  });
}



}
