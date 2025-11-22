import timestampToAgoString from '../src/time';
import {expect, jest, test} from '@jest/globals';

const now = Date.now();
const seconds = 1000;
const minute = seconds * 60;

test('should return 1 second.', () => {
    expect(timestampToAgoString(now - seconds)).toEqual( "1 second ago");
});

test('should return 21 seconds', () => {
    expect(timestampToAgoString(now - (seconds * 21))).toEqual("21 seconds ago");
});

test('should return 1 minute', () => {
    expect(timestampToAgoString(now - (minute))).toEqual( "1 minute ago");
});

test('should return 52 minutes', () => {
    expect(timestampToAgoString(now - (minute * 52))).toEqual("53 minutes ago");
});

test('should return 1 hour ', () => {
    expect(timestampToAgoString(now - (minute * 61))).toEqual("1 hour ago");
});

test('should return 6 hours', () => {
    expect(timestampToAgoString(now - (minute * 400))).toEqual("7 hours ago");
});

test('should return 1 day', () => {
    expect(timestampToAgoString(now - (minute * 1441))).toEqual("1 day ago");
});

test('should return 5 days ', () =>  {
    expect(timestampToAgoString(now - ((minute * 1441) * 5))).toEqual("5 days ago");
});

test('should return 1 week', () =>  {
    expect(timestampToAgoString(now - (minute * 10081))).toEqual("1 week ago");
});

test('should return 4 weeks', () =>  {
    expect(timestampToAgoString(now - (minute * 10081 * 4))).toEqual("4 weeks ago");
});

test('should return 1 month', () =>  {
    expect(timestampToAgoString(now - (minute * 1440 * 31))).toEqual("1 month ago");
});

test('should return 3 months', () =>  {
    expect(timestampToAgoString(now - (minute * 1440 * 101))).toEqual("3 months ago");
});

test('should return 1 year', () =>  {
    expect(timestampToAgoString(now - (minute * 1440 * 365))).toEqual("1 year ago");
});

test('should return 4 years', () =>  {
    expect(timestampToAgoString(now - (minute * 1440 * 1500))).toEqual("4 years ago");
});
