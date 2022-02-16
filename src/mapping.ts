import {
  Transfer as TransferEvent,
  Coven as TokenContract
} from '../generated/Coven/Coven'
import { ipfs, json, JSONValue } from '@graphprotocol/graph-ts'

import {
Token, User
} from '../generated/schema'


const ipfshash = "QmZHKZDavkvNfA9gSAg7HALv8jF7BJaKjUc9U2LSuvUySB"

export function handleTransfer(event: TransferEvent): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    token = new Token(event.params.tokenId.toString());
    token.tokenID = event.params.tokenId;
    token.updatedAtTimestamp = event.block.timestamp;
 
    let tokenContract = TokenContract.bind(event.address);
    token.tokenURI = tokenContract.tokenURI(event.params.tokenId);

    let metadata = ipfs.cat(ipfshash + token.tokenURI);
    if (metadata) {
      const value = json.fromBytes(metadata).toObject()
      if (value) {
        const image = value.get('image')
        const name = value.get('name')
        const description = value.get('description')
        const externalURL = value.get('external_url')

        if (name && image && description && externalURL) {
          token.name = name.toString()
          token.image = image.toString()
          token.externalURL = externalURL.toString()
          token.description = description.toString()
        }
  
        const coven = value.get('coven')
        if (coven) {
          let covenData = coven.toObject()

          const type = covenData.get('type')
          if (type) {
            token.type = type.toString()
          }

          const backgroundColor = value.get('background_color')
          if (backgroundColor) {
            token.backgroundColor = backgroundColor.toString();
          }

          const birthChart = covenData.get('birthChart')
          if (birthChart) {
            const birthChartData = birthChart.toObject()
            const sun = birthChartData.get('sun')
            const moon = birthChartData.get('moon')
            const rising = birthChartData.get('rising')
            if (sun && moon && rising) {
              token.sunSign = sun.toString()
              token.moonSign = moon.toString()
              token.risingSign = rising.toString()
            }
          }

          const skills = covenData.get('skills')
          if (skills) {
            const skillsData = skills.toObject()
            const will = skillsData.get('will')
            const wisdom = skillsData.get('wisdom')
            const wonder = skillsData.get('wonder')
            const woe = skillsData.get('woe')
            const wiles = skillsData.get('wiles')
            if (will && wisdom && wonder && woe && wiles) {
              token.will = will.toBigInt();
              token.wisdom = wisdom.toBigInt();
              token.wonder = wonder.toBigInt();
              token.woe = woe.toBigInt();
              token.wiles = wiles.toBigInt();
            }
          }
        }
          
      }
    }
  }

  token.owner = event.params.to.toHexString();
  token.save();
 
  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
 }
 