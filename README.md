## Timestamp to ago string.

A small util for converting a timestamp to a string. Pass in a timestamp and get a string back that says how long ago it was.

n example could be, "interacted 5 seconds ago".

- "XX seconds ago"
- "XX minutes ago"
- "XX hours ago"
- "XX weeks ago"
- "XX months ago"
- "XX years ago"

Of course you can change the outcoming sting as you please in the end of the time.tsx file.

## Installation

```
npm install
```

## Run tests

```
npm test
```

Code coverage can be found in the coverage folder which is created once running the tests.

## Usage

```
import timestampToString from '../src/time';

timestampToString(milliseconds)
```



