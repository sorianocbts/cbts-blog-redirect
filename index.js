const app = require('express')();

// The `res.redirect()` function sends back an HTTP 302 by default.
// When an HTTP client receives a response with status 302, it will send
// an HTTP request to the URL in the response, in this case `/to`
app.get('/', (req, res) => {
    console.log(req)
    res.redirect('https://cbtseminary.org/blog');
});


app.get('/*', (req, res) => {
    console.log(req.originalUrl)
    res.redirect(`https://cbtseminary.org/${req.originalUrl}`);
});

const port = 4000; process.env.PORT ||
    app.listen(port, () => console.log(`Server started on port ${port}`));