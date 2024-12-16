export const formatDate = (date: string) => {
  const newDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return newDate;
};

export const formatTime = (time: string) => {
  const newTime = new Date(time).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  return newTime;
};
