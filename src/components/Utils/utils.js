export const timeConv = function (timestamp) {
  const timeInfo = new Date(timestamp);
  const timeDisplay = timeInfo.toLocaleDateString();
  return timeDisplay;
};
