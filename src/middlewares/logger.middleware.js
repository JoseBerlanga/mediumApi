function logger(request, response, next){
    console.log(`${request.method} ${request.url} body: ${JSON.stringify(request.body)}`)
    next()
}

module.exports = logger