import { Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public translate: TranslateService = inject(TranslateService);
  public router: Router = inject(Router);
  public route: ActivatedRoute = inject(ActivatedRoute);
  headerClass: boolean = false;
  public currentTab: string | undefined | null;
  ngOnInit() {
    this.route.paramMap.subscribe((obs) => {
      console.log(obs.get('tab'));
      this.currentTab = obs.get('tab');
    });
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.router.navigate([lang,this.currentTab], { replaceUrl: true });
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.headerClass = window.scrollY > 0;
  }
}
