const fs = require('fs')
const path = require('path')

fs.readdir(path.join(__dirname, 'public/html'), (err, files) => {
    if(err) throw err
    const dirs = []
    const purefiles = []
    files.map((file) => {
        if(file.indexOf('.') === -1) dirs.push(`${file}/index.html`)
        else purefiles.push(file)
    })
    const indexes = dirs.concat(purefiles)
    fs.writeFile(path.join(__dirname, 'public/data/indexes.json'), JSON.stringify(indexes, null, '    '), (err) => {
        if(err) throw err
        console.log('filed created')
    })
})