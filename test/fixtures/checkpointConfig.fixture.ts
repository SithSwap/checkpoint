export const validCheckpointConfig = {
  network_node_url: 'https://starknet-goerli.infura.io/v3/SOME_KEY',
  sources: [
    {
      contract: '0x0625dc1290b6e936be5f1a3e963cf629326b1f4dfd5a56738dea98e1ad31b7f3',
      tx_hash: '0x0182a63d2594cb192c3a8555af5a5dd4d0c4a9d627457158fe530e6b6accc69c',
      start: 112319,
      deploy_fn: 'handleDeploy',
      events: [
        {
          name: 'proposal_created',
          fn: 'handlePropose'
        },
        {
          name: 'vote_created',
          fn: 'handleVote'
        }
      ]
    }
  ]
};
