### Token System Explanation

In created my different variables in Figma, I wanted them to have a numbered system where 0 equals the lightest or white while 100 (or 90 in most cases) was the darkest version of that color or pretty close to black. 

I made sure to add the different branding colors, following closely with the example videos, as well as including all of the primitive colors even though none of them are used since it's good to have them.

In terms of spacing and sizing variables, I did most of them completely different from others so the sizing is a bit all over the place so I set a few values and had Copilot help with the rest so that no tokens were missed.

### Design Decisions Worth Noting

While it seems like I created a simple inverse color, I tried to make visually pleasing decisions although it was difficult because some things I didn't think should change and in using the tokens, those colors shifted anyway. While I could go into it and either hardcode the color choice or create a specific variant for that color, I'm fine with leaving it for now so that it fits the requirements of the assignment and it gives me something to work on and shift later after I add other elements.

There is also an issue with the icons when the sight is in light mode which applies to the last paragraph, but that will be fixed by toggling those with white ones so they are visible later on.

### Citations

- Copilot
- ChatGPT

(both for questions and troubleshooting)



### Theme Dropdown Reflection

- Icon Design
I was really happy with the idea that I came up with for my icon svg designs. It was discussed in class that a sun and moon are very common and pretty overused so you would like if we came up with a new idea. Because my portfolio is design to look edgy and street, I thought making icons that were edgy as well would tie greatly into the theme. I created a bomb for my dark mode, a lit wick for my system settings, and an explosion for the light mode. For the dark mode, a bomb is black and has dark connotations surrounding it usually. For the light mode, an explosion causes a big flash of light which matches with the very bright white light mode I designed for the site. As for the system, it was a place in between the two, showing it could go either way according to the individual user's system preferences.

- System Logic
The code handles system differently because it goes into the user's actual system that they are using, in my case my laptop. If I were to click system on my portfolio, it would be dark mode because that is my computer's preference that I set. It is different than simply changing the theme from light and dark because it looks for those user preferences using the event listener.

- Unexpected Learning
As I was creating the SVG's in codepen, I didn't realize the graphing system very well but once I started playing with the different points, expecially using the polygon attribute, I figured out the graph more and made some really cool SVG's in the process which I didn't have too high of hopes for.