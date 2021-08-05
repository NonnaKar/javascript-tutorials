// **********          Regular Expressions: Using the Test Method


// Regular expressions are used in programming languages to match parts of strings.
// You create patterns to help you do that matching.

// If you want to find the word "the" in the string "The dog chased the cat", you could use the following regular 'expression': /the/.
// Notice that quote marks are not required within the regular expression.

// JavaScript has multiple ways to use regexes.
// One way to test a regex is using the '.test()' method. 
// The '.test()' method takes the regex, applies it to a string (which is placed inside the parentheses), and returns 'true' or 'false' if your pattern finds something or not.

// Example 1

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);

// Task:

let myString = "Hello, World!";
let myRegex = /Hello/;
let Result = myRegex.test(myString); 
console.log(Result);


// **********          Regular Expressions: Match a Literal String with Different Possibilities


// You can search for multiple patterns using the alternation or OR operator: |.

// This operator matches patterns either before or after it. 
// For example, if you wanted to match "yes" or "no", the regex you want is /yes|no/.

// You can also search for more than just two patterns. 
// You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

// Task:

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
console.log(result);


// **********          Regular Expressions: Ignore Case While Matching


// Up until now, you've looked at regexes to do literal matches of strings. 
// But sometimes, you might want to also match case differences.

// Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. 
// Examples of uppercase are "A", "B", and "C". 
// Examples of lowercase are "a", "b", and "c".

// You can match both cases using what is called a flag. 
// There are other flags but here you'll focus on the flag that ignores case - the 'i' flag. 
// You can use it by appending it to the regex. 
// An example of using this flag is '/ignorecase/i'. 
// This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".


// Task:

let mystring = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let resultOne = fccRegex.test(mystring);
console.log(resultOne);


// **********          Regular Expressions: Extract Matches


// So far, you have only been checking if a pattern exists or not within a string. 
// You can also extract the actual matches you found with the '.match()' method.

// To use the '.match()' method, apply the method on a string and pass in the regex inside the parentheses.

// Example 1

"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]

// Task:

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let resultTwo = extractStr.match(codingRegex);
console.log(resultTwo);


// **********          Regular Expressions: Find More Than the First Match


// To search or extract a pattern more than once, you can use the 'g flag'.

// Example 1

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]

// Task:

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; 
let resultThree = twinkleStar.match(starRegex);
console.log(resultThree);

// Note
// You can have multiple flags on your regex like /search/ig


// **********          Regular Expressions: Match Anything with Wildcard Period


// Sometimes you won't (or don't need to) know the exact characters in your patterns. 
// Thinking of all words that match, say, a misspelling would take a long time. 
// Luckily, you can save time using the wildcard character: '.'

// The wildcard character '.' will match any one character. 
// The wildcard is also called 'dot' and 'period'. 
// You can use the wildcard character just like any other character in the regex. 
// For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.

// Example 1

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
let result1 = huRegex.test(humStr); // Returns true
let result2 = huRegex.test(hugStr); // Returns true
console.log(result1);
console.log(result2);

// Task:

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let resulT = unRegex.test(exampleStr);
console.log(resulT);


// **********          Regular Expressions: Match Single Character with Multiple Possibilities


// You can search for a literal pattern with some flexibility with character classes. 
// Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

// For example, you want to match "bag", "big", and "bug" but not "bog". 
// You can create the regex /b[aiu]g/ to do this. 
// The [aiu] is the character class that will only match the characters "a", "i", or "u".

// Example 1

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bRegex = /b[aiu]g/;
bigStr.match(bRegex); // Returns ["big"]
bagStr.match(bRegex); // Returns ["bag"]
bugStr.match(bRegex); // Returns ["bug"]
bogStr.match(bRegex); // Returns null

// Task:

let quoteSample1 =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result3 = quoteSample1.match(vowelRegex);
console.log(result3);


// **********          Regular Expressions: Match Letters of the Alphabet


// You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). 
// Fortunately, there is a built-in feature that makes this short and simple.

// Inside a character set, you can define a range of characters to match using a hyphen character: -.

// Example 1

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

// Task:

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let letters = quoteSample.match(alphabetRegex); 
console.log(letters);


// **********          Regular Expressions: Match Numbers and Letters of the Alphabet


// Using the hyphen (-) to match a range of characters is not limited to letters. 
// It also works to match a range of numbers.
// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
// Also, it is possible to combine a range of letters and numbers in a single character set.

// Example 1

let jennyStr = "Jenny8675309";
let mRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(mRegex);

// Task:

let quotSample = "Blueberry 3.141592653s are delicious.";
let MyRegex = /[h-s2-6]/gi; 
let resultt = quotSample.match(MyRegex); 
console.log(resultt);


// **********          Regular Expressions: Match Single Characters Not Specified


// So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. 
// These types of character sets are called negated character sets.

// To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

// For example, /[^aeiou]/gi matches all characters that are not a vowel. 
// Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

// Task:

let quoteSamplePh = "3 blind mice.";
let theRegex = /[^aeiou^0-9]/gi; 
let check = quoteSamplePh.match(theRegex);
console.log(check);


// **********          Regular Expressions: Match Characters that Occur One or More Times


// Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. 
// This means it occurs at least once, and may be repeated.

// You can use the '+' character to check if that is the case. 

// For example, /a+/g would find one match in "abc" and return ["a"]. 
// Because of the +, it would also find a single match in "aabc" and return ["aa"].

// Task:

let difficultSpelling = "Mississippi";
let SRegex = /s+/ig; 
let result4 = difficultSpelling.match(SRegex);
console.log(result4);


// **********          Regular Expressions: Match Characters that Occur Zero or More Times


// The last challenge used the plus + sign to look for characters that occur one or more times. 
// There's also an option that matches characters that occur zero or more times.

// The character to do this is the asterisk or star: *.

// Example 1

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

// Task:
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let resultFour = chewieQuote.match(chewieRegex);
console.log(resultFour);


// **********          Regular Expressions: Find Characters with Lazy Matching


// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. 
// The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

// You can apply the regex /t[a-z]*i/ to the string "titanic". 
// This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

// Regular expressions are by default greedy, so the match would return ["titani"]. 
// It finds the largest sub-string possible to fit the pattern.

// However, you can use the ? character to change it to lazy matching. 
// "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

// Task:

let text = "<h1>Winter is coming</h1>";
let myRegexx = /<h1>?/;
let rslt = text.match(myRegexx);
console.log(rslt);


// **********          Regular Expressions: Match Beginning String Patterns


// Prior challenges showed that regular expressions can be used to look for a number of matches. 
// They are also used to search for patterns in specific positions in strings.

// In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. 
// Outside of a character set, the caret is used to search for patterns at the beginning of strings.

// Example 1

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false

// Task:

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result5 = calRegex.test(rickyAndCal);
console.log(result5);


// **********          Regular Expressions: Match Ending String Patterns


// You can search the end of strings using the dollar sign character $ at the end of the regex.

// Example 1

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false

// Task: 

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let ResulT = lastRegex.test(caboose);
console.log(ResulT);


// **********          Regular Expressions: Match All Letters and Numbers


// The closest character class in JavaScript to match the alphabet is \w. 
// This shortcut is equal to [A-Za-z0-9_]. 
// This character class matches upper and lowercase letters plus numbers. 
// Note, this character class also includes the underscore character (_).
// These shortcut character classes are also known as shorthand character classes.

// Example 1

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

// Task:

let quoteSample2 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let resulttt = quoteSample2.match(alphabetRegexV2).length;
console.log(resulttt);


// **********          Regular Expressions: Match Everything But Letters and Numbers


// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

// Example 1
let shortHand1 = /\W/;
let numbers1 = "42%";
let sentence = "Coding!";
numbers1.match(shortHand1); // Returns ["%"]
sentence.match(shortHand1); // Returns ["!"]

// Task:

let quoteSample3 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let Rresult = quoteSample3.match(nonAlphabetRegex).length;
console.log(Rresult); 


// **********          Regular Expressions: Match All Numbers


// The shortcut to look for digit characters is \d, with a lowercase d. 
// This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

// Task:

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let resultName = movieName.match(numRegex).length;
console.log(resultName);


// **********          Regular Expressions: Match All Non-Numbers


// The last challenge showed how to search for digits using the shortcut \d with a lowercase d. 
// You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

// The shortcut to look for non-digit characters is \D. 
// This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

// Task:

let movieName1 = "2001: A Space Odyssey";
let noNumRegex1 = /\D/g;
let resultD = movieName1.match(noNumRegex1).length;
console.log(resultD);


// **********          Regular Expressions: Restrict Possible Usernames


// You need to check all the usernames in a database. 
// Here are some simple rules that users have to follow when creating their username.

// 1) Usernames can only use alpha-numeric characters.

// 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

// 3) Username letters can be lowercase and uppercase.

// 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// Task:

let username1 = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
let resultUser = userCheck.test(username1);
console.log(resultUser);

// Code Explanation

// 1. ^ - start of input
// 2. [a-z] - first character is a letter
// 3. [0-9][0-9]+ - ends with two or more numbers
// 4. | - or
// 5. [a-z]+ - has one or more letters next
// 6. \d* - and ends with zero or more numbers
// 7. $ - end of input
// 8. i - ignore case of input


// **********          Regular Expressions: Match Whitespace


// You can also match the whitespace or spaces between letters.

// You can search for whitespace using \s, which is a lowercase s.
// This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. 
// You can think of it as similar to the character class [ \r\t\f\n\v].

// Example 1

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
let resultSpace = whiteSpace.match(spaceRegex);
console.log(resultSpace);
// Returns [" ", " "]

// Task:

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let resultS = sample.match(countWhiteSpace);
console.log(resultS);


// **********          Regular Expressions: Match Non-Whitespace Characters

// Search for non-whitespace using \S, which is an uppercase s. 
// This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. 
// You can think of it being similar to the character class [^ \r\t\f\n\v].

// Example 1

let whiteSpace1 = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace1.match(nonSpaceRegex).length; // Returns 32

// Task:

let sampleS = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; 
let resultSS = sampleS.match(countNonWhiteSpace);
console.log(resultSS);


// **********          Regular Expressions: Specify Upper and Lower Number of Matches


// You can specify the lower and upper number of patterns with quantity specifiers. 
// Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

// For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.

// Example 1

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

// Task:

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let Ohresult = ohRegex.test(ohStr);
console.log(Ohresult);


// **********          Regular Expressions: Specify Only the Lower Number of Matches


// You can specify the lower and upper number of patterns with quantity specifiers using curly brackets.
// Sometimes you only want to specify the lower number of patterns with no upper limit.

// To only specify the lower number of patterns, keep the first number followed by a comma.

// For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

// Example 1

let A5 = "haaaaah";
let A1 = "hah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleAA = /ha{3,}h/;
multipleAA.test(A5); // Returns true
multipleAA.test(A1); // Returns false
multipleAA.test(A100); // Returns true

// Task:

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let resultzz = haRegex.test(haStr);
console.log(resultzz);


// **********          Regular Expressions: Specify Exact Number of Matches


// To specify a certain number of patterns, just have that one number between the curly brackets.
// For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.

// Example 1

let A6 = "haaaaaah";
let A7 = "haaaaaaah";
let A101 = "h" + "a".repeat(101) + "h";
let multipleHA = /ha{7}h/;
console.log(multipleHA.test(A6)); // Returns false
console.log(multipleHA.test(A7)); // Returns true
console.log(multipleHA.test(A101)); // Returns false

// Task:

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let resultTim = timRegex.test(timStr);
console.log(resultTim);


// **********          Regular Expressions: Check for All or None


// Sometimes the patterns you want to search for may have parts of it that may or may not exist. 
// However, it may be important to check for them nonetheless.

// You can specify the possible existence of an element with a question mark, ?. 
// This checks for zero or one of the preceding element. 
// You can think of this symbol as saying the previous element is optional.

// Example 1

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true

// Task:

let favWord = "favorite";
let favRegex = /favou?rite/;
let resultFav = favRegex.test(favWord);
console.log(resultFav);


// **********          Regular Expressions: Positive and Negative Lookahead


// There are two kinds of lookaheads: positive lookahead and negative lookahead.

// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. 
// A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. 
// A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. 
// The rest of the pattern is returned if the negative lookahead part is not present. 

// Example 1

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

// Example 2

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

// Task:

let sampleWord = "astronaut";
let pwRegex = /^(?=\w{6})(?=\D+\d{2})/;
let resultPW = pwRegex.test(sampleWord);
console.log(resultPW);


// **********          Regular Expressions: Check For Mixed Grouping of Characters


// Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

// If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

// Then check whether the desired string groups are in the test string by using the test() method.

// Example 1

let testStR = "Pumpkin";
let testRegexX = /P(engu|umpk)in/;
console.log(testRegexX.test(testStR));
// Returns true

// Task:

let myStringRoo = "Eleanor Roosevelt";
let myRegexRoo = /(Franklin|Eleanor).*Roosevelt/;
let resultRoo = myRegexRoo.test(myStringRoo);
console.log(resultRoo);


// **********          Regular Expressions: Reuse Patterns Using Capture Groups


// You can search for repeat substrings using capture groups. 
// Parentheses, ( and ), are used to find repeat substrings. 
// You put the regex of the pattern that will repeat in between the parentheses.

// To specify where that repeat string will appear, you use a backslash (\) and then a number. 
// This number starts at 1 and increases with each additional capture group you use. 
// An example would be \1 to match the first group.

// Example 1

let repeatStr = "regex regex";
let repeatRegexOne = /(\w+)\s\1/;
let repeatResultOne = repeatRegexOne.test(repeatStr); // Returns true
let repeatResultTwo = repeatStr.match(repeatRegexOne); // Returns ["regex regex", "regex"]
console.log(repeatResultOne);
console.log(repeatResultTwo);

// Task:

let repeatNum = "42 42 42";
let reRegexNum = /^(\d+)\s\1\s\1$/;
let resultNum = reRegexNum.test(repeatNum);
console.log(repeatNum.match(reRegexNum));
console.log(resultNum);


// **********          Regular Expressions: Use Capture Groups to Search and Replace


// You can search and replace text in a string using .replace() on a string. 
// The inputs for .replace() is first the regex pattern you want to search for. 
// The second parameter is the string to replace the match or a function to do something.

// Example 1

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
let resultExample = wrongText.replace(silverRegex, "blue");  // Returns "The sky is blue."
console.log(resultExample);

// You can also access capture groups in the replacement string with dollar signs ($).

// Example 2

console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'));  // Returns "Camp Code"

// Task:

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1"; 
let resultFix = str.replace(fixRegex, replaceText);
console.log(resultFix);


// **********          Regular Expressions: Remove Whitespace from Start and End


// Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.

// Task:

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let resultSpaces = hello.replace(wsRegex, ""); // Change this line
console.log(resultSpaces);


// ***************          ***************


// .       - Any Character Except New Line
// \d      - Digit (0-9)
// \D      - Not a Digit (0-9)
// \w      - Word Character (a-z, A-Z, 0-9, _)
// \W      - Not a Word Character
// \s      - Whitespace (space, tab, newline)
// \S      - Not Whitespace (space, tab, newline)

// \b      - Word Boundary
// \B      - Not a Word Boundary
// ^       - Beginning of a String
// $       - End of a String

// []      - Matches Characters in brackets
// [^ ]    - Matches Characters NOT in brackets
// |       - Either Or
// ( )     - Group

// Quantifiers:
// *       - 0 or More
// +       - 1 or More
// ?       - 0 or One
// {3}     - Exact Number
// {3,4}   - Range of Numbers (Minimum, Maximum)


// #### Sample Regexs ####

// [a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+