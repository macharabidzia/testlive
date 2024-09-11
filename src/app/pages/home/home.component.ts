import { Component, DestroyRef, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { TabComponent } from '../../components/tab/tab.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ButtonComponent,
    CardComponent,
    TabComponent,
    CarouselComponent,
    TranslateModule,
    DialogModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private translateService: TranslateService = inject(TranslateService);
  lang?: string;
  private destroyRef: DestroyRef = inject(DestroyRef);
  private router:Router = inject(Router);
  private route:ActivatedRoute = inject(ActivatedRoute);
  public cards: any[] = [
    {
      heading: 'დარჩენილია 1/1',
      icon: 'bmw.png',
      image: 'car.png',
    },
    {
      leftHeading: 'გათამაშება დღეს 23:25-ზე',
      heading: 'დარჩენილია 1/1',
      price: '15 000',
    },
  ];
  dialog = inject(Dialog);

  constructor() {
    this.lang = this.translateService.defaultLang;
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang || 'en');
  }
  openDialog() {
    this.router.navigate(['dialog'], { relativeTo: this.route });
  }
  updateFont(lang: string) {
    const htmlElement = document.documentElement;
    if (lang === 'en') {
      htmlElement.style.fontFamily = 'Montserrat';
    } else if (lang === 'ge') {
      htmlElement.style.fontFamily = 'NotoSansGeorgian';
    }
  }
  ngOnInit() {
    this.translateService.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((observer) => {
        this.lang = observer.lang;
        this.updateFont(observer.lang);
      });
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((item) => {
        this.translateService.use(item.get('lang') || 'en');

        if (item.has('id')) {
          this.dialog.open(DialogComponent, {
            data: {
              animal: 'panda',
              lang: this.lang,
            },
          });
        }
      });
  }
}
