import { Component, inject } from '@angular/core';
import { ThemeService } from 'app/services/theme.service';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent {
  public themeService = inject(ThemeService);

  toggleTheme():void {
    this.themeService.updateTheme();
  }
}
