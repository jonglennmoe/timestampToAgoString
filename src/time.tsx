import { i18n } from "../src/i18n/en-GB";

export default function getCreatedAtString(milliseconds: number) {
    const now = Date.now();
    let createdAtValue: number = (now - milliseconds) / 1000;
    let createdAtString: string = i18n.time.created + ' ';
    let unit = i18n.time.second;

    if (createdAtValue >= (3599 * 24 * 365)) {
        unit = i18n.time.year;
        createdAtValue = createdAtValue / (3600 * 24 * 365);
    }

    if (createdAtValue > (3599 * 24 * 30)) {
        unit = i18n.time.month;
        createdAtValue = createdAtValue / (3600 * 24 * 30);
    }

    if (createdAtValue > (3599 * 24 * 7)) {
        unit = i18n.time.week;
        createdAtValue = createdAtValue / (3600 * 24 * 7);
    }

    if (createdAtValue > (3599 * 24)) {
        unit = i18n.time.day;
        createdAtValue = createdAtValue / (3600 * 24);
    }

    if (createdAtValue > 3599) {
        unit = i18n.time.hour;
        createdAtValue = createdAtValue / 3600;
    }

    if (createdAtValue > 59) {
        unit = i18n.time.minute;
        createdAtValue = createdAtValue / 59;
    }

    createdAtString += createdAtValue.toFixed(0) + " " + unit;
    createdAtString += createdAtValue > 2 ? i18n.time.plural : "";

    return createdAtString + " " + i18n.time.ago;
};