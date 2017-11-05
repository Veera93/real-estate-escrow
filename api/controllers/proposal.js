/*
  controllers/proposal.js
  Descriptiion: Buyer sends Proposal to Seller's Email
*/

const classes = require('../classes')
const config = require('../config')

@// TODO: Get Information from Solidity Smart Contract Back End
module.exports = function(req, res) {
  mail = new classes.mail(
    config.constants.noReplyEmail,
    'charlie@charliecampanlla.com',
    'New Property Offer',
    'Are you willing to sell your property for '
   )
}
