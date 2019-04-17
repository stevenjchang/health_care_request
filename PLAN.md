1. setup image as background on website.

2. design front end data, what it looks like

> {
>   id,
>   x,
>   y,
>   height,
>   width,
>   label,
>   type,
>   text/content,
>   isRequired,
>   time?,
>   touched?,
>   fontSize?,
> }

3. create 1 input field
  - using passedProps

4. create multiple input field

5. hook up redux store
  - how does redux data look like for 2 TextInputs?

-----
> brainstorm

- What does the data look like that I send back to the server, after user has made edits?
- the simplest solution is actually to not use formik or redux-forms

- is there alternative to not storing form data in redux?
    - probably not in this use case
- formik can accept data from redux store... how hard would it be for it to then set the data to the redux store?
    - seems very do-able, but I'm not certain.

- what else do I have to implement after this? should I build dashboard?
    - looks like upload pdf is actually required feature
    - I have to be able to add new textbox. Is there a shortcut way to implement this, given that I didn't make boxes draggable?

-----
1. connect third party form library

2. save user input





-----

Things to skip
1. actually being able to choose which file.
   - reasons: well, for one thing, is this even a good idea? Isn't it better if each clickable page is associated with one pdf?