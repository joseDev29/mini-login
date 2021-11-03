const { app } = require("./app");

app.listen(app.get("port") || 4356, () => {
  console.log(`Server running in port ${app.get("port")}`);
});
