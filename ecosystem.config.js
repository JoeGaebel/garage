module.exports = {
  apps : [{
    name   : "garage",
    script : "npm run dev",
    env: {
      "PASSWORD": "passwordgoeshere",
      "SECRET": "secretgoeshere"
    }
  }]
}
