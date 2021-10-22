function getListTour() {

  let dummyData = [
    {
      title: "Malang",
      image: "https://images.unsplash.com/photo-1480044965905-02098d419e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      content: "Ullamco ea aute sint Lorem adipisicing nulla dolor do eiusmod commodo ipsum pariatur nostrud ad. Duis sint sint nulla minim aute esse quis ex dolor laborum."
    },
    {
      title: "Batu",
      image: "https://images.unsplash.com/photo-1485488001527-2e2259690bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content: "Ullamco ea aute sint Lorem adipisicing nulla dolor do eiusmod commodo ipsum pariatur nostrud ad. Duis sint sint nulla minim aute esse quis ex dolor laborum."
    },
    {
      title: "Singasari",
      image: "https://images.unsplash.com/photo-1526367389455-42582383196c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      content: "Ullamco ea aute sint Lorem adipisicing nulla dolor do eiusmod commodo ipsum pariatur nostrud ad. Duis sint sint nulla minim aute esse quis ex dolor laborum."
    },
  ];

  // const getData = async () => {
  //   try {
  //     const response = await fetch('');
  //     const getResponse = await response.json();
  //     return getResponse;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return dummyData;
}

function getListDayTour() {
  let dummyData = [
    {
      label: "Hari pertama",
      description: "Ullamco ea aute sint Lorem adipisicing nulla dolor do eiusmod commodo ipsum pariatur nostrud ad. Duis sint sint nulla minim aute esse quis ex dolor laborum."
    },
    {
      label: "Hari kedua",
      description: "Ullamco ea aute sint Lorem adipisicing nulla dolor do eiusmod commodo ipsum pariatur nostrud ad. Duis sint sint nulla minim aute esse quis ex dolor laborum."
    },
    {
      label: "Hari ketiga",
      description: "Ullamco ea aute sint Lorem adipisicing nulla dolor do eiusmod commodo ipsum pariatur nostrud ad. Duis sint sint nulla minim aute esse quis ex dolor laborum."
    },
    {
      label: "Hari keempat",
      description: "Ullamco ea aute sint Lorem adipisicing nulla dolor do eiusmod commodo ipsum pariatur nostrud ad. Duis sint sint nulla minim aute esse quis ex dolor laborum."
    },
    {
      label: "Hari kelima",
      description: "Ullamco ea aute sint Lorem adipisicing nulla dolor do eiusmod commodo ipsum pariatur nostrud ad. Duis sint sint nulla minim aute esse quis ex dolor laborum."
    },
    {
      label: "Hari keenam",
      description: "Ullamco ea aute sint Lorem adipisicing nulla dolor do eiusmod commodo ipsum pariatur nostrud ad. Duis sint sint nulla minim aute esse quis ex dolor laborum."
    },
    {
      label: "Hari ketujuh",
      description: "Ullamco ea aute sint Lorem adipisicing nulla dolor do eiusmod commodo ipsum pariatur nostrud ad. Duis sint sint nulla minim aute esse quis ex dolor laborum."
    }
  ];

  // const getData = async () => {
  //   try {
  //     const response = await fetch('');
  //     const getResponse = await response.json();
  //     return getResponse;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return dummyData;
}

export {
  getListTour,
  getListDayTour,
}