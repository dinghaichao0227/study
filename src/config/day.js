import dayjs from 'dayjs';

/**
 * 格式化时间
 * @param {date|string|timestamp} time 需要解析的时间
 * @param {string} format 时间格式。<https://dayjs.gitee.io/docs/zh-CN/display/format>
 */
export const formatTime = (time, format = 'YYYY-MM-DD') => {
  return dayjs(time).format(format);
};
