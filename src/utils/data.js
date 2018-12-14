const tweets = [
    { name: 'Tom Haverford',
    username: 'swagggg',
    avatar: 'https://pbs.twimg.com/profile_images/704118633719590912/znEiFQnf_400x400.jpg',
    text: 'Most people would say ‘the deets’, but I say ‘the tails’. Just another example of innovation.',
    date: "2018-12-11T23:29:53.256Z",
    replies: 2,
    retweets: 4,
    likes: 2
    },
    { name: 'Ron Swanson',
    username: 'dukesilva',
    avatar: 'https://66.media.tumblr.com/avatar_6ff6f3decc28_128.pnj',
    text: "There's only one thing I hate more than lying: skim milk. Which is water that is lying about being milk",
    date: "2018-12-11T22:57:23.256Z",
    replies: 1,
    retweets: 2,
    likes: 6,
    },
    { name: 'Ben Wyatt',
    username: 'tyrionlannister',
    avatar: 'https://68.media.tumblr.com/avatar_926b2466db16_128.png',
    text: 'No, that’s Buckingham Palace. Hogwarts is fictional. You do know that, don’t you?',
    date: "2018-12-11T21:32:33.256Z",
    replies: 0,
    retweets: 1,
    likes: 7,
    },
    { name: 'April Ludgate',
    username: 'neutralmilk',
    avatar: 'https://66.media.tumblr.com/avatar_ea0253e13e8f_128.pnj',
    text: 'I really only listen to, like, German death reggae, Halloween sound effects from the 1950s, and Bette Midler. Obviously.',
    date: "2018-12-11T23:07:59.256Z",
    replies: 2,
    retweets: 4,
    likes: 1
    },
    { name: 'Ann Perkins',
    username: 'annperkins',
    avatar: 'https://i.pinimg.com/originals/3f/3f/a1/3f3fa172b8b028efb69499e885433264.png',
    text: "Halloween's my favorite holiday, and I don't have to work. Hey teenage girls dressed as sexy kittens, pump your own stomachs!",
    date: "2018-12-11T20:57:53.256Z",
    replies: 2,
    retweets: 1,
    likes: 2,
    },
    { name: 'Andy Dwyer',
    username: 'mouserat',
    avatar: 'https://66.media.tumblr.com/avatar_abc1050c6e4c_128.pnj',
    text: 'When I get bummed out, I take my shirt off because the bad feelings make me feel sweaty',
    date: "2018-12-11T22:47:13.256Z",
    replies: 3,
    retweets: 7,
    likes: 1
    },
    { name: 'Leslie Knope', 
    username: 'leslieeeee',
    avatar: 'https://pbs.twimg.com/profile_images/587659659290415106/EzqOxcO2_400x400.jpg',
    text: "Calzones are pointless. They’re just pizza that’s harder to eat. No one likes them.",
    date: "2018-12-11T12:07:52.389Z",
    replies: 0,
    retweets: 5,
    likes: 4,
    tweets: 98,
    following: 476,
    followers: 687
    }
]

const peopleToFollow = [
    {name: 'Donna Meagle',
    username: 'treatyoself',
    avatar: 'https://pbs.twimg.com/profile_images/704120276745719809/8xihcioU_400x400.jpg'
    },
    {name: 'Jean-Ralphio',
    username: 'saberstein',
    avatar: 'https://pbs.twimg.com/profile_images/378800000158297258/6f536fd739753657d3dfb3d746ab2217.jpeg'
    },
    {name: 'Chris Traeger',
    username: 'runningisgreat',
    avatar: 'https://66.media.tumblr.com/avatar_5bbbf632f045_128.pnj'}
]

const trends = [
    {title: '#Perdverts', tweets: '4,472'},
    {title: 'Raccoons have taken over', tweets: '7,874'},
    {title: 'Snakejuice kills', tweets: '6,647'},
    {title: '#IceTown', tweets: '6,754'},
    {title: 'Mouse Rat hit number one', tweets: '7,348'},
    {title: 'Sweetums', tweets: '3,749'},
    {title: '#JonnyKarate', tweets: '3,628'},
    {title: 'Pawnee Beauty Pageant', tweets: '837'},
    {title: '#waffles', tweets: '382'},
    {title: 'Pawnee most Overweight city', tweets: '666'},
]

const data = {peopleToFollow, tweets, trends}

export default data;