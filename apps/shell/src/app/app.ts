import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TsButton } from 'ts-design-system';

@Component({
  imports: [RouterModule, TsButton],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}