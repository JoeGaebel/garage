module.exports = {
  apps : [{
    name   : "garage",
    script : "npm run start",
    interpreter : 'node@22.14.0',
    env: {
      "PASSWORD": "passwordgoeshere",
      "SECRET": "secretgoeshere"
    }
  }]
}
