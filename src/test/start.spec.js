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
import { statement } from '../step24.js'

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