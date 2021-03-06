//Object that contains all book titles and ISBNs
const bookInfo = {
  race: {
    noSelect: [],
    black: [
      {
        isbn: 9780385686150,
        title: "Homegoing",
        author: "Yaa Gyasi",
        otherCategories: ["female"]
      },
      {
        isbn: 9780399587689,
        title: "The Proposal",
        author: "Jasmine Guillory",
        otherCategories: ["female"]
      },
      {
        isbn: 9780385690324,
        title: "Black Leopard Red Wolf",
        author: "Marlon James"
      },
      {
        isbn: 9781501168000,
        title: "Heads of The Colored People",
        author: "Nafissa Thompson-Spires",
        otherCategories: ["female"]
      },
      {
        isbn: 9781443459587,
        title: "Washington Black",
        author: "Esi Edugyan",
        otherCategories: ["female"]
      },
      {
        isbn: 9780802128997,
        title: "Freshwater",
        author: "Akwaeke Emezi",
        otherCategories: ["female", "trans"]
      },
      {
        isbn: 9781555977856,
        title: "Don't Call Us Dead: Poems",
        author: "Danez Smith",
        otherCategories: ["nonBinary", "queer"]
      },
      {
        isbn: 9781617755880,
        title: "An Unkindness of Ghosts",
        author: "Rivers Solomon",
        otherCategories: ["nonBinary", "lesbian", "queer"]
      },
      {
        isbn: 9780062662835,
        title: "With the Fire On High",
        author: "Elizabeth Acevedo",
        otherCategories: ["Latinx", "Black"]
      },
    ],
    indigenous: [
      {
        isbn: 9780771073038,
        title: "There There",
        author: "Tommy Orange"
      },
      {
        isbn: 9780385691147,
        title: "Heart Berries",
        author: "Terese Marie Mailhot",
        otherCategories: ["female"]
      },
      {
        isbn: 9781443451352,
        title: "Birdie",
        author: "Tracey Lindberg",
        otherCategories: ["female"]
      },
      {
        isbn: 9780385692380,
        title: "A Mind Spread Out On The Ground",
        author: "Alicia Elliott",
        otherCategories: ["female"]
      },
      {
        isbn: 9781770414006,
        title: "Moon of the Crusted Snow",
        author: "Waubgeshig Rice"
      }
    ],
    asian: [
      {
        isbn: 9780804172707,
        title: "A Little Life",
        author: "Hanya Yanagihara",
        otherCategories: ["female"]
      },
      {
        isbn: 9780525432753,
        title: "The Clothing Of Books",
        author: "Jhumpa Lahiri",
        otherCategories: ["female"]
      },
      {
        isbn: 9780062428738,
        title: "Sick",
        author: "Porochista Khakpour",
        otherCategories: ["female"]
      },
      {
        isbn: 9780385693219,
        title: "The Farm",
        author: "Joanne Ramos",
        otherCategories: ["female"]
      },
      {
        isbn: 9780735223707,
        title: "Know My Name: A Memoir",
        author: "Chanel Miller",
        otherCategories: ["female"]
      }
    ],
    latinx: [
      {
        isbn: 9780525434313,
        title: "Fruit of the Drunken Tree",
        author: "Ingrid Rojas Contreras",
        otherCategories: ["female"]
      },
      {
        isbn: 9780735217737,
        title: "The Line Becomes a River",
        author: "Francisco Cantú"
      },
      {
        isbn: 9780525511298,
        title: "Sabrina & Corina",
        author: "Kali Fajardo-Anstine",
        otherCategories: ["female"]
      },
      {
        isbn: 9780062662835,
        title: "With the Fire On High",
        author: "Elizabeth Acevedo",
        otherCategories: ["female", "black"]
      },
      {
        isbn: 9780771094507,
        title: "In The Dream House: A Memoir",
        author: "Carmen Maria Machado",
        otherCategories: ["female"]
      }
    ]
  },
  gender: {
    noSelect: [],
    female: [
      {
        isbn: 9780385686150,
        title: "Homegoing",
        author: "Yaa Gyasi",
        otherCategories: ["black"]
      },
      {
        isbn: 9780399587689,
        title: "The Proposal",
        author: "Jasmine Guillory",
        otherCategories: ["black"]
      },
      {
        isbn: 9781501168000,
        title: "Heads of The Colored People",
        author: "Nafissa Thompson-Spires",
        otherCategories: ["female"]
      },
      {
        isbn: 9781443459587,
        title: "Washington Black",
        author: "Esi Edugyan",
        otherCategories: ["black"]
      },
      {
        isbn: 9780385691147,
        title: "Heart Berries",
        author: "Terese Marie Mailhot",
        otherCategories: ["indigenous"]
      },
      {
        isbn: 9781443451352,
        title: "Birdie",
        author: "Tracey Lindberg",
        otherCategories: ["indigenous"]
      },
      {
        isbn: 9780525434313,
        title: "Fruit of the Drunken Tree",
        author: "Ingrid Rojas Contreras",
        otherCategories: ["Latinx"]
      },
      {
        isbn: 9780525511298,
        title: "Sabrina & Corina",
        author: "Kali Fajardo-Anstine",
        otherCategories: ["Latinx"]
      },
      {
        isbn: 9780062662835,
        title: "With the Fire On High",
        author: "Elizabeth Acevedo",
        otherCategories: ["Latinx", "Black"]
      },
      {
        isbn: 9780771094507,
        title: "In The Dream House: A Memoir",
        author: "Carmen Maria Machado",
        otherCategories: ["Latinx"]
      },
      {
        isbn: 9780385692380,
        title: "A Mind Spread Out On The Ground",
        author: "Alicia Elliott"
      },
      {
        isbn: 9780804172707,
        title: "A Little Life",
        author: "Hanya Yanagihara"
      },
      {
        isbn: 9780525432753,
        title: "The Clothing Of Books",
        author: "Jhumpa Lahiri"
      },
      {
        isbn: 9780062428738,
        title: "Sick",
        author: "Porochista Khakpour"
      },
      {
        isbn: 9780385693219,
        title: "The Farm",
        author: "Joanne Ramos"
      },
      {
        isbn: 9780735223707,
        title: "Know My Name: A Memoir",
        author: "Chanel Miller"
      }
    ],
    nonBinary: [
      {
        isbn: 9781555977856,
        title: "Don't Call Us Dead: Poems",
        author: "Danez Smith",
        otherCategories: ["black"]
      },
      {
        isbn: 9781617755880,
        title: "An Unkindness of Ghosts",
        author: "Rivers Solomon",
        otherCategories: ["lesbian", "black"]
      }
    ],
    trans: [
      //in the future add to female as well
      {
        isbn: 9780802128997,
        title: "Freshwater",
        author: "Akwaeke Emezi",
        otherCategories: ["female"]
      },
      {
        isbn: 9781551527208,
        title: "Little Fish",
        author: "Casey Plett",
        otherCategories: ["female"]
      },
      {
        isbn: 9780735235939,
        title: "I'm Afraid of Men",
        author: "Vivek Shraya",
        otherCategories: ["female"]
      }
    ]
  }
};

export default bookInfo;