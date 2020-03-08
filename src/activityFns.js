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
  // Manter aberto apos a primeiro execução
  if (document.querySelector('#authors').childElementCount == 0 && prefix(location, 'authors')) {
    return true
  } else if (document.querySelector('#authors').childElementCount >= 1) {
    return true
  }
}

export function posts(location) {
  // Adiciona mais 1 a 'posts' no localStorage
  if (prefix(location, 'posts')) {
    window.localStorage.setItem('posts', Number(window.localStorage.getItem('posts')) + 1)
    // Evento do storage só funciona em window diferente - Isso força o evento
    window.dispatchEvent(new window.StorageEvent('storage'))
  }

  // Manter aberto apos a primeiro execução
  if (document.querySelector('#posts').childElementCount == 0 && prefix(location, 'posts')) {
    return true
  } else if (document.querySelector('#posts').childElementCount >= 1) {
    return true
  }
}
