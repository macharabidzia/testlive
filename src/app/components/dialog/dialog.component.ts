import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  data = inject(DIALOG_DATA);
  constructor(
    public dialogRef: DialogRef<string>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
  ngOnDestroy() {
    this.router.navigate([''], { relativeTo: this.route });
  }
}
