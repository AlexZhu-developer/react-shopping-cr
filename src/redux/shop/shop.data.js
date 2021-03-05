const SHOP_DATA = {
  shoes: {
    id: 1,
    title: 'Shoes',
    routeName: 'shoes',
    items: [
      {
        id: 1,
        name: 'Red Brim',
        imageUrl: 'https://i.ibb.co/ypQ5DLG/photo-1581017316471-1f6ef7ce6fd3-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 325
      },
      {
        id: 2,
        name: 'Brown Beanie',
        imageUrl: 'https://i.ibb.co/72mjbYP/photo-1505233676147-accd9c73eb1b-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 188
      },
      {
        id: 3,
        name: 'Red playboy',
        imageUrl: 'https://i.ibb.co/Qn08LTT/photo-1525966222134-fcfa99b8ae77-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 335
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/R3FQQBw/photo-1491553895911-0055eca6402d-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 225
      },
      {
        id: 5,
        name: 'Newbee pink',
        imageUrl: 'https://i.ibb.co/9ykpP4p/photo-1551107696-a4b0c5a0d9a2-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb-1.jpg',
        price: 318
      },
      {
        id: 6,
        name: 'Blue Cap',
        imageUrl: 'https://i.ibb.co/RQrKWjS/photo-1515955656352-a1fa3ffcd111-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 114
      },
      {
        id: 7,
        name: 'Purple Beanie',
        imageUrl: 'https://i.ibb.co/Qk6Sr8S/photo-1465453869711-7e174808ace9-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 168
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/4KFBTvr/photo-1488931352846-7ccb8b2225b6-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 189
      },
      {
        id: 9,
        name: 'Green Snapback',
        imageUrl: 'https://i.ibb.co/M2FLXBQ/photo-1581292551310-d820f76a2f95-ixlib-rb-1-2.jpg',
        price: 285
      }
    ]
  },
  watches: {
    id: 2,
    title: 'Watches',
    routeName: 'watches',
    items: [
      {
        id: 10,
        name: 'warm white',
        imageUrl: 'https://i.ibb.co/JkW0PHF/photo-1524592094714-0f0654e20314-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 1220
      },
      {
        id: 11,
        name: 'Tissot 1853',
        imageUrl: 'https://i.ibb.co/hs0v4jQ/photo-1522312346375-d1a52e2b99b3-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 3280
      },
      {
        id: 12,
        name: 'Black C',
        imageUrl: 'https://i.ibb.co/wJ2mZKS/photo-1511370235399-1802cae1d32f-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 1710
      },
      {
        id: 13,
        name: 'MVMT',
        imageUrl: 'https://i.ibb.co/s6fhtt7/photo-1495857000853-fe46c8aefc30-ixlib-rb-1-2.jpg',
        price: 4160
      },
      {
        id: 14,
        name: 'BRAUN',
        imageUrl: 'https://i.ibb.co/vkcP9rS/photo-1434056886845-dac89ffe9b56-ixlib-rb-1-2.jpg',
        price: 4279
      },
      {
        id: 15,
        name: 'Toby Christopher',
        imageUrl: 'https://i.ibb.co/3YgdQ14/photo-1488132828189-4e416661b680-ixlib-rb-1-2.jpg',
        price: 1860
      },
      {
        id: 16,
        name: 'Fossil wood',
        imageUrl: 'https://i.ibb.co/yRkPGgm/photo-1525342306245-c6a1e32087ce-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 3210
      },
      {
        id: 17,
        name: 'CITIZEN',
        imageUrl: 'https://i.ibb.co/6tSWJRG/photo-1507428861205-e8aab693190e-ixlib-rb-1-2.jpg',
        price: 2900
      }
    ]
  },
  bags: {
    id: 3,
    title: 'Bags',
    routeName: 'bags',
    items: [
      {
        id: 18,
        name: 'Dark Bag',
        imageUrl: 'https://i.ibb.co/fpksC2Y/photo-1562869319-a1368ba7fe75-ixlib-rb-1-2.jpg',
        price: 625
      },
      {
        id: 19,
        name: 'Dark Green Jean',
        imageUrl: 'https://i.ibb.co/0BRYPZr/photo-1474376962954-d8a681cc53b2-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 690
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/CzYKLYZ/photo-1547949003-9792a18a2601-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb-1.jpg',
        price: 940
      },
      {
        id: 21,
        name: 'Brown Shearls',
        imageUrl: 'https://i.ibb.co/fpcNgvr/photo-1491637639811-60e2756cc1c7-ixlib-rb-1-2.jpg',
        price: 765
      },
      {
        id: 22,
        name: 'Tan Blue',
        imageUrl: 'https://i.ibb.co/wzM8m8V/photo-1553062407-98eeb64c6a62-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb-1.jpg',
        price: 585
      },
      {
        id: 23,
        name: 'Leather#1',
        imageUrl: 'https://i.ibb.co/F5NLQQf/photo-1597708724657-6b294dc5a3af-ixlib-rb-1-2.jpg',
        price: 645

      },
      {
        id: 24,
        name: 'Green Volunteer',
        imageUrl: 'https://i.ibb.co/KbZg7qb/photo-1588544621848-516bdaf00737-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 745

      },
      {
        id: 25,
        name: 'Skade',
        imageUrl: 'https://i.ibb.co/3B1LCYk/photo-1608731267464-c0c889c2ff92-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 628

      },
      {
        id: 26,
        name: 'Tan Gray',
        imageUrl: 'https://i.ibb.co/MfzfXMt/photo-1577733966973-d680bffd2e80-ixlib-rb-1-2.jpg',
        price: 983

      }

    ]
  },
  cameras: {
    id: 4,
    title: 'Cameras',
    routeName: 'cameras',
    items: [
      {
        id: 27,
        name: 'Nikon1',
        imageUrl: 'https://i.ibb.co/bJz9g1x/photo-1597713340876-caa6ca4da695-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 1225
      },
      {
        id: 28,
        name: 'FUJI1',
        imageUrl: 'https://i.ibb.co/jvjTkVt/photo-1560367918-bed51f9dff43-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb-1.jpg',
        price: 3120
      },
      {
        id: 29,
        name: 'OLYMPUS TRIP',
        imageUrl: 'https://i.ibb.co/4PLZGfZ/photo-1573365100826-82587cce4bfa-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg',
        price: 6180
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
