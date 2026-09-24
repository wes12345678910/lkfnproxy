const express = require('express');
const Unblocker = require('unblocker');
const app = express();

const unblocker = Unblocker({ prefix: '/proxy/' });
app.use(unblocker);

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Web Proxy</title>
            <style>
                body { font-family: sans-serif; text-align: center; padding-top: 50px; background: #f4f4f9; }
                input { width: 320px; padding: 12px; font-size: 16px; border: 1px solid #ccc; border-radius: 6px; }
                button { padding: 12px 20px; font-size: 16px; background: #007bff; color: white; border: none; border-radius: 6px; cursor: pointer; margin-left: 8px; }
                button:hover { background: #0056b3; }
            </style>
        </head>
        <body>
            <h2>Web Proxy Server</h2>
            <form onsubmit="window.location.href='/proxy/' + document.getElementById('url').value; return false;">
                <input type="text" id="url" placeholder="https://example.com" required />
                <button type="submit">Go</button>
            </form>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
