class Formatter {
  static capitalize(s) {
    return s[0].toUpperCase() + s.slice(1)
  }

  static sanitize(s) {
    return s.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(s) {
    let words = s.split(' ')
    for (let i=0; i<words.length; i++) {
      if (i===0) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
      } else if (!(words[i] === 'the' || words[i] === 'a' || words[i] === 'an' || words[i] === 'but' || words[i] === 'of' || words[i] === 'and' || words[i] === 'for' || words[i] === 'at' || words[i] === 'by' || words[i] === 'from')) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
      }
    }
    return words.join(' ')
  }
}
