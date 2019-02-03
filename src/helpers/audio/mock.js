const audioContext = () => {
  return {
    destination: {},
    createAnalyser: () => {
      return {
        connect: () => { }
      }
    },
    createMediaElementSource: (element) => {
      return {
        connect: () => { }
      }
    }
  };
};

export { audioContext };
