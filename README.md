# What is this?
Funny you should ask! It's a front-end app I built as a take-home assessment test I was asked to complete within 48 hours (really 24, unless I didn't sleep then it'll actually be 48.) It serves as a showcase of what I can build in that small time window. Here are the original requirements:

1. Write good quality code with mobile responsiveness.
2. Choose and complete at least one of the following animation-specific tasks (done all):
- Animate and fade in hero text
- Animate cards in the grid section on hover
- Animate and fade in cards in the equipment section, when in view.
3. Choose at least one of the following JavaScript-specific tasks. Prefer a custom solution for these tasks (also done all):
- Create a functioning reviews slider (repeating the reviews is acceptable)
- Set up the language picker in the footer to "select" different languages (display a list of languages and replace the label when clicked)
- Create a fixed header that hides once the user scrolls past the hero section
4. Use custom `Open Sans` font that was provided.


# Running the app
1. Clone it!
2. cd into the root directory of it.
3. Run `yarn`.
4. Copy `next.config.example.json` and rename your copy to `next.config.json`.
5. Copy `.example.env` and rename your copy to `.env`.
6. Run `yarn dev`.
7. Open Chrome on [Localhost](http://localhost:3333/).
8. Enjoy!


## Notes:
1. You might need to have `next.js` installed globally in order for the project ot work.
2. Apollo and GraphQl are setup and ready to be used.
3. Storybook is setup and ready to be used with `yarn storybook`.
4. Used Atomic Design. Tried to stick to its rules as much as the time span allowed.
5. Every text that's abbreviated with `[s]` when you switch the language is a placeholder for actual Spanish translation. 


# Things I Wanted to Show Case in This Project:
1. Ability to write a scalable code base from scratch.
2. Match a design as close to pixel-perfect as possible.
3. Good mobile responsiveness.
4. Reusability and structure of code.
5. Adapting to use new tools and libraries like `next.js`.
6. Making use of existing libraries like `Material UI`.
7. Have the basis for and implementing a design style-guide.
8. Good coding ethics and practices.
9. Nice-to-look-at animations.


## Given more time I would've addressed these issues:
1. Better infinite slider.
2. Tightened spacing and typography to be pixel-perfect with design and code cleanup.
3. Currently only the dev version works and only on Chrome as it does no transpiling. I would've loved to build and deploy it to address all cross-browser compatibility issues.
4. Better error handling.
5. Stories for all the components.