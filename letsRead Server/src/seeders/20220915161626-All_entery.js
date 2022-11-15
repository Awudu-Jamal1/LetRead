'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Books', [
        {
          title: "AMERICAN VAMPIRE, VOL. 1",
          description: "This series, about a new species of vampire that does not have the traditional weakness, shifts to Las Vegas in the 1930's and a number of corpses that have turned up drained of blood.",
          contribution: "by Scott Snyder and Stephen King",
          author: " Stephen King",
           publisher: "DC Comics",
          isbns: "9781401229740",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389666348l/7619398.jpg",
          genre: "Horror",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:1
      },
      {
          title: "Bag of Bones",
          description: null,
          contribution: null,
          author: "Stephen King",
           publisher: null,
          isbns: "9781451678628",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1365592796l/10589.jpg",
          genre: "Horror",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:1
          
      },
      {
          title: "BILLY SUMMERS",
          description: "A killer for hire who only takes out bad guys seeks redemption as he does one final job.",
          contribution: "by Stephen King",
          author: "Stephen King",
           publisher: "Scribner",
          isbns: "1982173610",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618151020l/56852407.jpg",
          genre: "Horror",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:1
      },
      {
          title: "ODD IS ON OUR SIDE",
          description: "Odd Thomas can communicate with the dead. In this Halloween adventure, he has his work cut out for him.",
          contribution: "by Fred Van Lente, Dean Koontz and Queenie Chan",
          author: "Fred Van Lente, Dean Koontz and Queenie Chan",
           publisher: "Del Rey",
          isbns: "0345515609",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320542133l/7573403.jpg",
          genre: "Horror",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:2
          
      },
      {
          title: "INTERVIEW WITH THE VAMPIRE: CLAUDIA'S STORY",
          description: "An adaptation of Ms. Rice's novel told from the perspective of Claudia, the young girl who, after being turned into a vampire by Lestat, is forever stuck in childhood.",
          contribution: "by Anne Rice and Ashley Marie Witter",
          author: "Anne Rice and Ashley Marie Witter",
           publisher: "Yen Press",
          isbns: "9780316176361",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1332307152l/13504055.jpg",
          genre: "Horror",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:3
      
      },
      {
          title: "ATOMIC HABITS",
          description: "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
          contribution: "by James Clear",
          author: "James Clear",
           publisher: "Avery",
          isbns: "0735211299",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655988385l/40121378.jpg",
          genre: "business",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:4
      },
      {
          title: "THE FRACKERS",
          description: "How experiments by wildcatters tapped into shale -- and environmental controversy.",
          contribution: "by Gregory Zuckerman",
          author: "Gregory Zuckerman",
           publisher: "Penguin",
          isbns: "1591846455",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372054121l/17707481.jpg",
          genre:"business",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:5
      },
      {
          title: "THE GREATEST TRADE EVER",
          description: "In 2006 hedge f",
           publisher: "Broadway",
          isbns: "0385529910",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320488806l/6986632.jpg",
          genre: "business",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:5
      },
      {
          title: "A WORLD WITHOUT EMAIL",
          description:"World Without Email will convince you that the time has come for bold  will walk you through exactly how to make them happen.",
          "contribution": "by Cal Newport",
          author: "Cal Newport",
           publisher: "Portfolio",
          isbns: "0525536558",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597016311l/54326146.jpg",
          genre: "business",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:6
      },
      {
          title: "DIGITAL MINIMALISM",
          description: "Minimalism is the art of knowing how much is just enough. Digital minimalism applies this idea to our personal technologyy" ,
          contribution: "by Cal Newport",
          author: "Cal Newport",
           publisher: "Portfolio/Penguin",
          isbns: "0525536515",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549433350l/40672036._SY475_.jpg",
          genre: "business",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:6
      },
      {
          title: "PARTY OF TWO",
          description: "Olivia Monroe’s past is uncovered when her relationship with a junior senator is made public.",
          contribution: "by Jasmine Guillory",
          author: "Jasmine Guillory",
           publisher: "Berkley",
          isbns: "0593100824",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580140214l/49099926._SY475_.jpg",
          genre: "romance",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:7
      },
      {
          title: "THE PROPOSAL",
          description: "After turning down a marriage proposal at a Dodgers game, a freelance writer has a fling with a doctor.",
          contribution: "by Jasmine Guillory",
          author: "Jasmine Guillory",
           publisher: "Berkley",
          isbns: "0399587683",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550603962l/37584991._SY475_.jpg",
          genre: "romance",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:7
      },
      {
          title: "I KISSED SHARA WHEELER",
          description: "Chloe Green seeks answers about the disappearance of Shara Wheeler.",
          contribution: "by Casey McQuiston",
          author: "Casey McQuiston",
           publisher: "Wednesday",
          isbns: "1250244455",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1644433190l/58756420._SY475_.jpg",
          genre: "romance",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:8
      },
      {
          title: "THE WEDDING PARTY",
          description: "Maddie and Theo's secret arrangement is unsettled when Alexa's wedding date is moved up.",
          contribution: "by Jasmine Guillory",
          author: "Jasmine Guillory",
           publisher: "Berkley",
          isbns: "1984802194",
          review: null,
          img_Url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544056270l/42455873._SY475_.jpg",
          genre: "romance",
          page: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          author_Id:7
      }
      
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
