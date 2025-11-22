import { i18n } from "../src/i18n/en-GB";

export default function timestampToString(milliseconds: number) {
    const now = Date.now();
    let timestampAsSeonds: number = (now - milliseconds) / 1000;
    let unit = i18n.time.second;

    if (timestampAsSeonds >= (3599 * 24 * 365)) {
        unit = i18n.time.year;
        timestampAsSeonds = timestampAsSeonds / (3600 * 24 * 365);
    }

    if (timestampAsSeonds > (3599 * 24 * 30)) {
        unit = i18n.time.month;
        timestampAsSeonds = timestampAsSeonds / (3600 * 24 * 30);
    }

    if (timestampAsSeonds > (3599 * 24 * 7)) {
        unit = i18n.time.week;
        timestampAsSeonds = timestampAsSeonds / (3600 * 24 * 7);
    }

    if (timestampAsSeonds > (3599 * 24)) {
        unit = i18n.time.day;
        timestampAsSeonds = timestampAsSeonds / (3600 * 24);
    }

    if (timestampAsSeonds > 3599) {
        unit = i18n.time.hour;
        timestampAsSeonds = timestampAsSeonds / 3600;
    }

    if (timestampAsSeonds > 59) {
        unit = i18n.time.minute;
        timestampAsSeonds = timestampAsSeonds / 59;
    }

    let timeString = timestampAsSeonds.toFixed(0) + " " + unit;
    timeString += timestampAsSeonds > 2 ? i18n.time.plural : "";

    return timeString;
};