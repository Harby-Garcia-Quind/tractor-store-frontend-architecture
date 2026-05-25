import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TsButton } from 'ts-design-system';

@Component({
  standalone: true,
  selector: 'shell-home-page',
  imports: [RouterLink, TsButton],
  templateUrl: './shell-home.page.html',
})
export class ShellHomePage {}
