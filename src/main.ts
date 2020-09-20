import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';


import 'codemirror';
import 'codemirror/lib/codemirror'
import '../node_modules/codemirror/lib/codemirror.css';
import '../node_modules/codemirror/theme/mdn-like.css';

import 'codemirror/mode/clike/clike';
import 'codemirror/mode/javascript/javascript.js';
import '../node_modules/codemirror/mode/css/css.js';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
