const INITIAL_STATE = {
  sections: [
    {
      title: 'shoes',
      imageUrl: 'https://i.ibb.co/ypQ5DLG/photo-1581017316471-1f6ef7ce6fd3-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
      id: 1,
      linkUrl: 'shop/shoes'
    },
    {
      title: 'watches',
      imageUrl: 'https://i.ibb.co/JkW0PHF/photo-1524592094714-0f0654e20314-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
      id: 2,
      linkUrl: 'shop/watches'
    },
    {
      title: 'bags',
      imageUrl: 'https://i.ibb.co/fpksC2Y/photo-1562869319-a1368ba7fe75-ixlib-rb-1-2.jpg',
      id: 3,
      linkUrl: 'shop/bags'
    },
    {
      title: ' cameras',
      imageUrl: 'https://i.ibb.co/bJz9g1x/photo-1597713340876-caa6ca4da695-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/cameras'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
