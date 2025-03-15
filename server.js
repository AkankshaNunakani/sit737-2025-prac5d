const http = require('http');

const student = {
    name: "Akanksha Nunakani",
    id: "s224599339",
    course: "Cloud Native Application Development",
    task: "2.1P",
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(student, null, 2));
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
