var H = require('hylar')
var Hylar = new H()

const mimeType = 'application/ld+json'

const janedoe = JSON.stringify({
  '@context': 'http://schema.org/',
  '@type': 'Person',
  'name': 'Jane Doe',
  'jobTitle': 'Professor',
  'telephone': '(425) 123-4567',
  'url': 'http://www.janedoe.com' })

const nok = JSON.stringify({
  '@id': 'http://adlnet.gov/expapi/verbs/experienced',
  'http://semweb.mmlab.be/ns/tincan2prov/display': [
    {
      '@value': 'experienced',
      '@language': 'en-us'
    }
  ]
})

Hylar.load(janedoe, mimeType)
  .then(function (response) {
    return Hylar.getStorage()
  })
  .then(function (results) {
    const ntriples = results.replace(/,/g, '')
    console.log(ntriples)
  })
  .catch(function (err) {
    console.log(err)
  })

var Hylar2 = new H()
Hylar2.load(nok, mimeType)
// SyntaxError: Expected [1] QueryUnit or [29] UpdateUnit but "I" found.
// at peg$buildStructuredError (/home/xxx/mwe-hylar/node_modules/rdfstore/src/parser.js:2760:14)
  .then(function (response) {
    return Hylar2.getStorage()
  })
  .then(function (results) {
    const ntriples = results.replace(/,/g, '')
    console.log(ntriples)
  })
  .catch(function (err) {
    console.log(err)
  })
