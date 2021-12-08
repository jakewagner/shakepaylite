In respect of the time I am updating the README at the last min.

To improve:

- Transaction page obviously needs work, in retrospect redux was probably overkill for such a
  sample work as its overhead and boilerplate is a little excessive and prone to creating bugs
  on the fly.
- Styles need work, I selected styled-components as a library for that because i know i could do it
  quickly at the end if time permitted
- Pagination in the real world would be nice for transactions as it is just dumping a significant number
  into the app in one shot
- And last major point to improve would have been calculating the balances from the transactions even
  though that would have been a strange use of time and resources, I noticed there was no fake data

I didn't get to fix the build process from what i broke from Create react app, so it wont run as of the initial commit.
If desired:

1.  clone repo
2.  `npm i`
3.  `npm start`
