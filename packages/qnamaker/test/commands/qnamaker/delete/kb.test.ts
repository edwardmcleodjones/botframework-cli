import {expect, test} from '@oclif/test'

import cli from 'cli-ux'
const nock = require('nock')
const fs = require('fs-extra')
import * as path from 'path'

describe('qnamaker:delete:kb', () => {

  before(async function() {
    let config = {
      subscriptionKey: "222222cccccctttttth223kk3k33",
      hostname: "https://somehost.net",
      endpointKey: "xxxxxxxxxxxxxxxxxxx",
      kbId: "xxxxxxxxxxxxxxxxxxxxxxx"
    }
    
    await fs.writeJson(path.join(process.cwd(), '.qnamakerrc'), config, {spaces: 2})
    // runs before all tests in this block
    nock('https://westus.api.cognitive.microsoft.com/qnamaker/v4.0')
    .delete('/knowledgebases/3bfa5f79-466e-460f-9261-106e26f2d3c7')
    .reply(204)


    nock('https://westus.api.cognitive.microsoft.com')
    .get('/qnamaker/v4.0/knowledgebases/3bfa5f79-466e-460f-9261-106e26f2d3c7')
    .reply(200,   
      {
        id: "3bfa5f79-466e-460f-9261-106e26f2d3c7",
        hostName: "https://some.hostname.net",
        lastAccessedTimestamp: "2019-08-06T18:00:50Z",
        lastChangedTimestamp: "2019-08-06T18:00:50Z",
        name: "QnA Maker FAQ",
        userId: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        urls: [],
        sources: [
          "Manual.pdf",
          "Custom Editorial"
        ],
        language: "English",
        enableHierarchicalExtraction: false,
        createdTimestamp: "2019-08-06T18:00:50Z"
      })

    });

    after(async function(){
      await fs.remove(path.join(process.cwd(), '.qnamakerrc'))
    })


  test
  .stub(cli, 'prompt', () => async () => 'n')
  .stdout()
  .command(['qnamaker:delete:kb', '--kbId', '3bfa5f79-466e-460f-9261-106e26f2d3c7'])
  .it('Promts the user to confirm the deletion', ctx => {
    expect(ctx.stdout).to.contain('operation canceled')
  })

  test
  .stdout()
  .command(['qnamaker:delete:kb', '--kbId', '3bfa5f79-466e-460f-9261-106e26f2d3c7', '--force'])
  .it('Deletes kb', ctx => {
    expect(ctx.stdout).to.empty
  })

})