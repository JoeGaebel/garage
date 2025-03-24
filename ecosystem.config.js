module.exports = {
  apps : [{
    name   : "garage",
    script : "npm run start",
    env: {
      "PASSWORD": "passwordgoeshere",
      "SECRET": "secretgoeshere"
    }
  }]
}
