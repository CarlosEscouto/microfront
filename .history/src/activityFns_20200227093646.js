export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => (
      location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    )
  )
}

// export function navbar(location) {
//   return true
// }

export function authors(location) {
  console.log((window.parametro !== undefined && window.parametro == 'authors'))
  // return (window.parametro !== undefined && window.parametro == 'authors')
  // return prefix(location, 'authors')
  return true
}

export function posts(location) {
  // return prefix(location, 'posts')
  return window.parametro !== undefined && window.parametro == 'posts'
}
