const http = require('http');

const student = {
    name: "Akanksha Nunakani",
    id: "s224599339",
    course: "Cloud Native Application Development",
    task: "2.1P",
};

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Details</title>
</head>
<body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
    <h1 style="color: blue;">Student Details</h1>
    <p><strong>Name:</strong> ${student.name}</p>
    <p><strong>ID:</strong> ${student.id}</p>
    <p><strong>Course:</strong> ${student.course}</p>
    <p><strong>Task:</strong> ${student.task}</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
