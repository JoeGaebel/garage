module.exports = {
  apps : [{
    name   : "garage",
    script : "npm run serve",
    env: {
      "PASSWORD": "passwordgoeshere",
      "SECRET": "secretgoeshere"
    }
  }]
}
