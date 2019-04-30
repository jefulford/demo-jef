const express = require("express"),
	app = express();

app.get("/", (req, res) => {
	res.send("it works");
});

app.listen("3000", () => {
	console.log("Server started.");
});