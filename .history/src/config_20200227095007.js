import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication('navbar', () => SystemJS.import('@portal/navbar'), isActive.navbar)
singleSpa.registerApplication('authors', () => SystemJS.import('@portal/authors'), isActive.authors)
singleSpa.registerApplication('posts', () => SystemJS.import('@portal/posts'), isActive.posts)

singleSpa.start()
