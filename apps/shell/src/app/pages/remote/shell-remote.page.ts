import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { RemoteFrameComponent } from '../../components/remote-frame/remote-frame.component';

@Component({
  standalone: true,
  selector: 'shell-remote-page',
  imports: [RemoteFrameComponent],
  template: `<shell-remote-frame [url]="resolvedUrl()" />`,
})
export class ShellRemotePage {
  private readonly route = inject(ActivatedRoute);

  private readonly routeData = toSignal(this.route.data, { initialValue: {} as Record<string, string> });
  private readonly routeParams = toSignal(this.route.params, { initialValue: {} as Record<string, string> });

  readonly resolvedUrl = computed<string>(() => {
    const data = this.routeData();
    const params = this.routeParams();
    const remoteUrl: string = data['remoteUrl'] ?? '';
    const remoteBaseUrl: string = data['remoteBaseUrl'] ?? '';

    if (remoteBaseUrl) {
      const paramKey = Object.keys(params)[0];
      return paramKey ? `${remoteBaseUrl}/${params[paramKey]}` : remoteBaseUrl;
    }

    return remoteUrl;
  });
}
