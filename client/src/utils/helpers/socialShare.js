export const twitterShare = (title, fileUrl) => {
  const url = encodeURI(`https://twitter.com/intent/tweet?text=${title}\n${fileUrl}`);
  return window.open(url, '_blank');
};

export const facebookShare = (title, fileUrl) => {
  const url = encodeURI(`https://www.facebook.com/sharer.php?href=${fileUrl}&quote=${title}`);
  return window.open(url, '_blank');
};
