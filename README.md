# roids
## Readable ObjectIDs

[MongoDB](https://mongodb.com) makes extensive use of [ObjectIDs](https://docs.mongodb.com/manual/reference/method/ObjectId/), a 12-byte value created from `TIME_32` and some other numbers.
These values are generally rendered as a string of 24 hexadecimal digits.
This project is a translator between this format and other various, hopefully more readable, formats.

This project is probably not meant to be taken seriously.

There are two pieces to this project:

### roids.html

This is a JS/HTML converter between the hex string format and a few more readable formats. It also accomplishes translation back for one of these formats.

### roids.js

This is a JS script for converting ObjectIDs natively within the `mongo` shell to and from one of these formats.

## Credits
The word list I grabbed from [this Bitcoin BIPS file](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) and paired it down to 1/8th the original size.

MongoDB Inc., is my employer. Our internal hackathon, named Skunkworks, is where I did this work for in July, 2018.