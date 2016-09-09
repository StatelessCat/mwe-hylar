var H = require('hylar')

const mimeType = 'application/ld+json'

const janedoe = JSON.stringify({
  '@context': 'http://schema.org/',
  '@type': 'Person',
  'name': 'Jane Doe',
  'jobTitle': 'Professor',
  'telephone': '(425) 123-4567',
  'url': 'http://www.janedoe.com' })

const ok1 = JSON.stringify({
  '@id': 'http://adlnet.gov/expapi/verbs/experienced',
  'http://semweb.mmlab.be/ns/tincan2prov/display': {
    '@value': 'experienced',
    '@language': 'en-us'
  }
})

const ok2 = JSON.stringify({
  '@id': 'http://adlnet.gov/expapi/verbs/experienced',
  'http://semweb.mmlab.be/ns/tincan2prov/display': {
    '@value': 'experienced'
  }
})

const hylarLoadTest = function (jsonld) {
  var Hylar = new H()
  Hylar.load(jsonld, mimeType)
    .then(function (response) {
      return Hylar.getStorage()
    })
    .then(function (results) {
      const ntriples = results.replace(/,/g, '')
      console.log('#OK##########################################################')
      console.log(ntriples)
      console.log('=ENDOK=======================================================')
    })
    .catch(function (err) {
      console.log('#ERR##########################################################')
      console.log(jsonld)
      console.log('-----------------------------------------------------------')
      console.log(err)
      console.log('=ENDERR=======================================================')
    })
}

hylarLoadTest(janedoe)
hylarLoadTest(ok1)
hylarLoadTest(ok2)

