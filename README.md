# roids
## Readable ObjectIDs

[MongoDB](https://mongodb.com) makes extensive use of [ObjectIDs](https://docs.mongodb.com/manual/reference/method/ObjectId/), a 12-byte value created from `TIME_32` and some other numbers.
These values are generally rendered as a string of 24 hexadecimal digits.
This project is a translator between this format and other various, hopefully more readable, formats.

This project is probably not meant to be taken seriously.

There are two pieces to this project:

### roids.html

<img src="https://i.imgur.com/0KfgJti.png" width="60%">

This is a JS/HTML converter between the hex string format and a few more readable formats. It also accomplishes translation back for one of these formats.

### roids.js

<img src="https://imgur.com/9Mpp50H.png" width="40%">

This is a JS script for converting ObjectIDs natively within the `mongo` shell to and from one of these formats.

## Credits
The word list I grabbed from [this Bitcoin BIPS file](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) and paired it down to 1/8th the original size.

MongoDB Inc., is my employer. Our internal hackathon, named Skunkworks in July 2018 is where I made this.

## Future work?

* Adding more emojis to the emoji mode to increase the bits per glyph
* Make words into sentences, like adjective noun verb (green bridge flies) to make things more memorable
* Increase bits per word to shorten things, maybe down to something like [what3words](https://what3words.com/)
* Color selectors? (How?)