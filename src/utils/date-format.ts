import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUTCTime(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}

export function formatTimestamp(
  timestamp: number,
  format: string = DATE_TIME_FORMAT
) {
  const timestampStr = timestamp + ''
  const len = timestampStr.length
  if (len === 10) {
    return dayjs.unix(timestamp).format(format)
  } else if (len === 13) {
    return dayjs(timestamp).format(format)
  }
}
