import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [NgClass, TranslateModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',

})
export class TabComponent {
  public percentage: number = 300;
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  public arr: any = [
    {
      active: false,
      icon: 'leaf.png',
      text: 'slot',
    },
    {
      active: false,
      icon: 'cube.png',
      text: 'mini-games',
    },
    {
      active: false,
      icon: 'game.png',
      text: 'P2P',
    },
    {
      active: false,
      icon: 'roulette.png',
      text: 'casino',
    },
    {
      active: false,
      icon: 'poker.png',
      text: 'poker',
    },
  ];
  public progress: number[] = [50, 150, 300, 400, 500, 1000];
  public percent?: number = 0;
  public maxNumber: number = 0;
  public toggleVisible: boolean = false;
  constructor() {}

  public randomNumber() {
    const currentNumberIndex = Math.round(Math.random() * this.progress.length);

    //length = 6
    // index = 3
    // index = 2

    // percent = 50

    const percent = 100 / (this.progress.length / currentNumberIndex);
    this.percent = percent;
    console.log(currentNumberIndex);
    this.maxNumber = currentNumberIndex;
  }

  ngOnInit() {
    this.randomNumber();
    this.route.paramMap.subscribe((item: any) => {
      if (item.has('tab')) {
        let index = this.arr.findIndex(
          (tab: any) => tab.text === item.params.tab
        );
        this.arr.forEach((element: any) => {
          element.active = false;
        });
        this.randomNumber();
        this.arr[index].active = true;
      }
    });
  }
  changeTab(item: any) {
    this.router.navigate(['../' + item.text], { relativeTo: this.route });
  }
  toggleTooltip(): void {
    this.toggleVisible = !this.toggleVisible;
  }

  ngOnDestroy(): void {}
}
