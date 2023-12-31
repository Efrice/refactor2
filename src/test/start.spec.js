import { expect, test } from 'vitest'
import plays from '../data/plays.json'
import invoices from '../data/invoices.json'
// import { statement } from '../start.js'
// import { statement } from '../step1.js'
// import { statement } from '../step2.js'
// import { statement } from '../step3.js'
// import { statement } from '../step4.js'
// import { statement } from '../step5.js'
// import { statement } from '../step6.js'
// import { statement } from '../step7.js'
// import { statement } from '../step8.js'
// import { statement } from '../step9.js'
// import { statement } from '../step10.js'
// import { statement } from '../step11.js'
// import { statement } from '../step12.js'
// import { statement } from '../step13.js'
// import { statement } from '../step14.js'
// import { statement } from '../step15.js'
// import { statement } from '../step16.js'
// import { statement } from '../step17.js'
// import { statement } from '../step18.js'
// import { statement } from '../step19.js'
// import { statement } from '../step20.js'
// import { statement } from '../step21.js'
// import { statement } from '../step22.js'
// import { statement } from '../step23.js'
// import { statement } from '../step24.js'
// import { statement } from '../step25.js'
// import { statement } from '../step26.js'
// import { statement } from '../step27.js'
// import { statement } from '../step28/statement.js'
// import { statement } from '../step29/statement.js'
// import { statement } from '../step30/statement.js'
// import { statement } from '../step31/statement.js'
// import { statement } from '../step32/statement.js'
// import { statement } from '../step33/statement.js'
import { statement } from '../end/statement.js'
import { createStatementData } from '../end/createStatementData.js'

test('statement', () => {
  const result = statement(invoices[0], plays)
  expect(result).toMatchInlineSnapshot(`
    "Statement for BigCo
     Hamlet: $650.00 (55 seats)
     As You Like It: $580.00 (35 seats)
     Othello: $500.00 (40 seats)
    Amount owed is $1,730.00
    You earned 47 credits
    "
  `)
})

test('createStatementData', () => {
  const result = createStatementData(invoices[0], plays)
  expect(result).toMatchInlineSnapshot(`
    {
      "customer": "BigCo",
      "performances": [
        {
          "amount": 65000,
          "audience": 55,
          "play": {
            "name": "Hamlet",
            "type": "tragedy",
          },
          "playID": "hamlet",
          "volumeCredits": 25,
        },
        {
          "amount": 58000,
          "audience": 35,
          "play": {
            "name": "As You Like It",
            "type": "comedy",
          },
          "playID": "as-like",
          "volumeCredits": 12,
        },
        {
          "amount": 50000,
          "audience": 40,
          "play": {
            "name": "Othello",
            "type": "tragedy",
          },
          "playID": "othello",
          "volumeCredits": 10,
        },
      ],
      "totalAmount": 173000,
      "totalVolumeCredits": 47,
    }
  `)
})