export interface BlogPost {
    id:number;
    title:string;
    slug:string;
    subtitle?:string;
    image:string;
    content:string;
    creator:string;
    alt:string;
}

import post1 from './posts/post1.txt?raw';
import img1 from './produto1.jpg';
import post2 from './posts/post2.txt?raw';
import img2 from './produto7.jpg';
import post3 from './posts/post3.txt?raw';
import img3 from './produto4.jpg';
import post4 from './posts/post4.txt?raw';
import img4 from './produto8.jpg';
export const blogPosts :BlogPost[] = [
    {
        id:1,
        title:'Why We Only Do Bread and Sandwiches',
        slug: 'why-we-only-do-bread-and-sandwiches',
        subtitle:"And why that's a good thing",
        creator:'Some Guy',
        content: post1,
        image:img1,
        alt:"French Bread"
    },
    {
        id:2,
        title:'The Secret to a Perfect Crust',
        slug: 'the-secret-to-a-perfect-crust',
        creator:'Some Girl',
        content: post2,
        image:img2,
        alt:"Melted Cheese"
    },
    {
        id:3,
        title:'What Makes a Good Sandwich?',
        subtitle:"Hint: It's Not Just What's Inside",
        slug: 'what-makes-a-good-sandwich',
        creator:'Some Person',
        content: post3,
        image:img3,
        alt:"Onion Bread Buns"
    },
    {
        id:4,
        title:'Bread for the Day Ahead',
        subtitle:'How We Bake With Mornings in Mind',
        slug: 'bread-for-the-day-ahead',
        creator:'Some Individual',
        content: post4,
        image:img4,
        alt:'Grilled Cheese'
    },
]