# DEMO DEPLOY

1/ Run `yarn build` to generate static files into `dist` folder

2/ Fix all references to assets in `dist/index.html` to reference the current folder.

example (take attention to the point `.` after `src=`)
- before: `<script src=/js/chunk-vendors.58f9f0c3.js></script>`
- after: `<script src=./js/chunk-vendors.58f9f0c3.js></script>`

3/ Upload files on a server! 
