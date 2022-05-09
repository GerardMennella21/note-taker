const express = require('express')

const PORT = process.env.PORT || 3001
const app = express()

// Require routes
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

// Express middleware
app.use(express.urlencoded({ extend: true}))
app.use(express.json())
app.use(express.static('public'))

// Route middleware
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})