import random from 'lodash/random'

// Array of available nodes to connect to
const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]

const getNodeUrl = () => {
  return "https://ancient-falling-log.matic.quiknode.pro/b19f0f2ba7f61ca711f2c77f8d966f2c798854ef";

  const randomIndex = random(0, nodes.length - 1)
  return nodes[randomIndex]
}

export default getNodeUrl
