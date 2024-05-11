export function localString2Timestamp(localeString: string) {
  const regex =
    /^(?<month>\d+)\/(?<day>\d+)\/(?<year>\d+), (?<hour>\d+):(?<minute>\d+):(?<second>\d+) /
  const match = localeString.match(regex)
  if (!match || !match.groups) return
  const { month, day, year, hour, minute, second } = match.groups
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )} ${String(hour).padStart(2, "0")}:${String(minute).padStart(
    2,
    "0"
  )}:${String(second).padStart(2, "0")}`
}

export function isTimeStamp(value: unknown) {
  const regex = /(\d+){4}-(\d+){2}-(\d+){2} (\d+){2}:(\d+){2}/
  return typeof value === "string" && !!value.match(regex)
}
