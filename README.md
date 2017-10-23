# Extended from the original Password Generator
I've extended the functionality of the original password generator to cater for passing the length of each rule set as agruments as well as providing the option to generate an 'easy to read' password.

Original README.md as follows...

# Password Generator
A javascript password generator with easy to define rules to suit any business case. The default rules will generate a 16 character password of 12 characters/numbers and 4 special characters.

DEMO - https://kekoapp.github.io/Password-Generator/index.html

## Adding rules to the generation
- Clone the repo / download the zip
- Open the password.js inside the /js/ folder
- Edit the 'rules' array by adding another object, by default there is 2 rules setup as examples
- If a callback function is set within the rule, the resulting string will be passed to the callback for further processing. As in the example rules, this is a good place to do any custom operations to the password, such as shuffling the final password string.
