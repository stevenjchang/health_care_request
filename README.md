#### NOTE: the boilerplate for this project comes from https://github.com/stevenjchang/steves_boilerplate

#### NOTE: most of the planning/decision making done on PLAN.md, detail implementation steps done on TODO.md

to run project locally

`yarn install`

`yarn dev`

-----
because I did not implement a db, will not including .env file with elephantsql db login information with project
-----

Part of the reasoning of not building a backend early on was because I needed to be sure how to best to store the data on the front-end, which I wouldn't know until I started building.

Another part of the reasoning was because the backend was much more straighforward, meaning that most people would implement it in a similar way. The front-end decisions seems more open to interpretation, so I chose to tackle it.

Decision was made to prioritize an mvp (bare minimum) requirement for each aspect of the front end, in favor of backend implementations.

Shortcuts taken:
- not implementing draggable feature - I felt as if there was too much of a potential to get stuck here. I did not have time to research best method.
- not being able to upload pdf... felt like MVP only required working with 1 pdf. Also felt this implemenation was straightforward, so saved it for the end.
- not sending/sorting data to backend. But if I would have done so, the payload would have been the redux store, as is. This was part of my design process.
- not saving to database. Just didn't have the time. Also, I did not want to try to until I knew for certain what the data being sent looked like.
- adding new input field can be adjusted by string value (of positioning only). No choice for now, since I did not implement draggable setting. Probably could have made small improvement where values could increment/decrement using buttons, not just for the user to type a string.
- only one input type
- no input validation

Mistakes:
- wrong data schema of original redux store
- trying to use formik