export const ellipsis = (text) => {
  return text.replace(/^"([\w\W]+)"$/, '$1').replace(/\\n/g, '').replace(/\\"/g, '').slice(0, 50).concat('...')
}
export const handleDateFormat = (date) => {
  const currentDatetime = new Date(date);
  const formattedDate = currentDatetime.toDateString();
  return formattedDate;
};
export const handleReadTime = (min) => {
  switch (min) {
    case 0:
      return 'Less than 1 min read';
    case 1:
      return '1 min read';
    default:
      return `${min} mins read`;
  }
}
export const twitterShare = (title, fileUrl) => {
  const url = encodeURI(`https://twitter.com/intent/tweet?text=${title}\n${fileUrl}`);
  return window.open(url, '_blank');
};

export const facebookShare = (title, fileUrl) => {
  const url = encodeURI(`https://www.facebook.com/sharer.php?href=${fileUrl}&quote=${title}`);
  return window.open(url, '_blank');
};
