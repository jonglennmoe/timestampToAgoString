import timestampToString from '../src/time';
import {expect, jest, test} from '@jest/globals';

const now = Date.now();
const seconds = 1000;
const minute = seconds * 60;

test('should return 1 second.', () => {
    expect(timestampToString(now - seconds)).toEqual( "1 second");
});

test('should return 21 seconds', () => {
    expect(timestampToString(now - (seconds * 21))).toEqual("21 seconds");
});

test('should return 1 minute', () => {
    expect(timestampToString(now - (minute))).toEqual( "1 minute");
});

test('should return 52 minutes', () => {
    expect(timestampToString(now - (minute * 52))).toEqual("53 minutes");
});

test('should return 1 hour ', () => {
    expect(timestampToString(now - (minute * 61))).toEqual("1 hour");
});

test('should return 6 hours', () => {
    expect(timestampToString(now - (minute * 400))).toEqual("7 hours");
});

test('should return 1 day', () => {
    expect(timestampToString(now - (minute * 1441))).toEqual("1 day");
});

test('should return 5 days ', () =>  {
    expect(timestampToString(now - ((minute * 1441) * 5))).toEqual("5 days");
});

test('should return 1 week', () =>  {
    expect(timestampToString(now - (minute * 10081))).toEqual("1 week");
});

test('should return 4 weeks', () =>  {
    expect(timestampToString(now - (minute * 10081 * 4))).toEqual("4 weeks");
});

test('should return 1 month', () =>  {
    expect(timestampToString(now - (minute * 1440 * 31))).toEqual("1 month");
});

test('should return 3 months', () =>  {
    expect(timestampToString(now - (minute * 1440 * 101))).toEqual("3 months");
});

test('should return 1 year', () =>  {
    expect(timestampToString(now - (minute * 1440 * 365))).toEqual("1 year");
});

test('should return 4 years', () =>  {
    expect(timestampToString(now - (minute * 1440 * 1500))).toEqual("4 years");
});
