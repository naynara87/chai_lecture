export const timeStamp = () => {
  const currentTime = new Date();
  return `${currentTime.getFullYear()}.${(currentTime.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${currentTime
    .getDate()
    .toString()
    .padStart(2, "0")} ${currentTime
    .getHours()
    .toString()
    .padStart(2, "0")}:${currentTime
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${currentTime.getSeconds().toString().padStart(2, "0")}`;
};
