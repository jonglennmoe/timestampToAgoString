import getCreatedAtString from '../src/time';
import {expect, jest, test} from '@jest/globals';

const now = Date.now();
const seconds = 1000;
const minute = seconds * 60;

test('should return Created 1 second ago.', () => {
    expect(getCreatedAtString(now - seconds)).toEqual( "Created 1 second ago");
});

test('should return Created 21 seconds ago', () => {
    expect(getCreatedAtString(now - (seconds * 21))).toEqual("Created 21 seconds ago");
});

test('should return Created 1 minute', () => {
    expect(getCreatedAtString(now - (minute))).toEqual( "Created 1 minute ago");
});

test('should return Created 52 minutes', () => {
    expect(getCreatedAtString(now - (minute * 52))).toEqual("Created 53 minutes ago");
});

test('should return Created 1 hour ago ', () => {
    expect(getCreatedAtString(now - (minute * 61))).toEqual("Created 1 hour ago");
});

test('should return Created 6 hours ago', () => {
    expect(getCreatedAtString(now - (minute * 400))).toEqual("Created 7 hours ago");
});

test('should return Created 1 day ago', () => {
    expect(getCreatedAtString(now - (minute * 1441))).toEqual("Created 1 day ago");
});

test('should return Created 5 days ago1', () =>  {
    expect(getCreatedAtString(now - ((minute * 1441) * 5))).toEqual("Created 5 days ago");
});

test('should return Created 1 week ago', () =>  {
    expect(getCreatedAtString(now - (minute * 10081))).toEqual("Created 1 week ago");
});

test('should return Created 4 weeks ago', () =>  {
    expect(getCreatedAtString(now - (minute * 10081 * 4))).toEqual("Created 4 weeks ago");
});

test('should return Created 1 month ago', () =>  {
    expect(getCreatedAtString(now - (minute * 1440 * 31))).toEqual("Created 1 month ago");
});

test('should return Created 3 months ago', () =>  {
    expect(getCreatedAtString(now - (minute * 1440 * 101))).toEqual("Created 3 months ago");
});

test('should return Created 1 year ago', () =>  {
    expect(getCreatedAtString(now - (minute * 1440 * 365))).toEqual("Created 1 year ago");
});

test('should return Created 4 years ago', () =>  {
    expect(getCreatedAtString(now - (minute * 1440 * 1500))).toEqual("Created 4 years ago");
});
