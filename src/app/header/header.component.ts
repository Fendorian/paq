// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   @Input() translations: any;
//   @Input() currentLanguage: string;
//   @Output() languageChange = new EventEmitter<string>();

//   onLanguageChange(language: string): void {
//     this.languageChange.emit(language);
//   }
  
// }
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private translateService: TranslateService) {}
  
}
