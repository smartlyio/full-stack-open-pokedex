const axios = require('axios')

// eslint-disable-next-line no-undef
const deployURL = process.env.RENDER_COM_DEPLOY_WEBHOOK_URL
// eslint-disable-next-line no-console
console.log(deployURL)

const sendDeployAction = async () => {
  const response = await axios.get(deployURL)
  if (response.status !== 200) throw new Error('could not connect with render.com webhook')
  // eslint-disable-next-line no-console
  else console.log('ping successful!')
  // - This webhook URL triggers deploy to render.com
  // - render.com should work and auto-deploy without this, but I tried to follow all exercise steps as close to
  // - the requirements as I could using render.com
  // - BTW I tried github's webhook, but it always failed with "connection timeout"
  // - So I imagined this workaround with axios sending request from inside of an action
}

sendDeployAction()