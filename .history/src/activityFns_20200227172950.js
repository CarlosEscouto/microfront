export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => (
      location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    )
  )
}

export function navbar(location) {

  return true
}

export function authors(location) {
  if (document.querySelector('#authors').childElementCount == 0 && prefix(location, 'authors')) {
    return true
  } else if (document.querySelector('#authors').childElementCount >= 1) {
    return true
  }
  // return (window.parametro !== undefined && window.parametro == 'authors')
  // return true
}

export function posts(location) {

  return prefix(location, 'posts')
  // return window.parametro !== undefined && window.parametro == 'posts'
  // return true
}
