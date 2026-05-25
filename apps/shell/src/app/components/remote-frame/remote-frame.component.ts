/**
 * Temporary shell composition adapter.
 * Replace with Module Federation remote loading in Phase 9.
 */
import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'shell-remote-frame',
  templateUrl: './remote-frame.component.html',
  styleUrl: './remote-frame.component.scss',
})
export class RemoteFrameComponent {
  readonly url = input.required<string>();

  private readonly sanitizer = inject(DomSanitizer);

  readonly safeUrl = computed<SafeResourceUrl>(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url())
  );
}
