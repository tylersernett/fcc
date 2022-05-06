Created as part of freecodecamp's curriculum.

Made using: Javascript, React

live demo: https://tylersernett.github.io/fcc/front-end/projects/calculator/index.html

Ran into some bugs when developing keyboard input. Things learned:
* remove the event listener, or you'll get weird state bugs/slowdown where multiple old states are cycled through
* pass numberClickHandler as a dependency in the useEffect call -- otherwise, the display only shows the single most recent number