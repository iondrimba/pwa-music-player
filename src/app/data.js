const placeholderData = ()=> {
  return [...new Array(10)].map((index, i) => {
    return {
      id: i,
      title: 'loading...',
      artist:'loading...',
      artwork_url: 'https://picsum.photos/50/50/?blur',
    }
  });
}

export default [...placeholderData()];
