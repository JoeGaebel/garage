module.exports = {
  apps : [{
    name   : "garage",
    script : "yarn",
    args: "start",
    interpreter : 'node@22.14.0',
    env: {
      "PASSWORD": "passwordgoeshere",
      "SECRET": "secretgoeshere"
    }
  }]
}
