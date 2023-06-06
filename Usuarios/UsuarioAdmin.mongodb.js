db.createUser({
    user: " MyTester",
    pwd: passwordPrompt(),
    roles: [
        { role: "readWrite", db: "test" },
        { role: "read", db: "reporting" },
    ],
});