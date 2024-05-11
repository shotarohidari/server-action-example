export function localString2Timestamp(localeString: string) {
  const regex =
    /^(?<month>\d+)\/(?<day>\d+)\/(?<year>\d+), (?<hour>\d+):(?<minute>\d+):(?<second>\d+) /
  const match = localeString.match(regex)
  if (!match || !match.groups) return
  const { month, day, year, hour, minute, second } = match.groups
  return `${year}/${month}/${day} ${hour}:${minute}:${second}`
}
