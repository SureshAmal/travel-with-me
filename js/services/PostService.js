app.factory('PostService', function() {
    var posts = [
        {
            id: '1',
            title: 'Lost in the Magic of Kyoto',
            excerpt: 'Wandering through the bamboo forests of Arashiyama and discovering ancient shrines hidden in the vibrant autumn foliage.',
            content: '<p>Kyoto is a city where time seems to stand still. My journey began in the famed Arashiyama Bamboo Grove, where towering green stalks swayed gently in the wind, creating an otherworldly atmosphere.</p><h2>The Fushimi Inari Shrine</h2><p>No trip to Kyoto is complete without walking through the thousands of vermilion torii gates at Fushimi Inari. The hike up the mountain was taxing but the view of the city from the halfway point was entirely worth it. I highly suggest visiting early in the morning to avoid the massive crowds.</p><h2>Culinary Delights</h2><p>From rich matcha treats to traditional kaiseki dinners, the food in Kyoto is a delicate art form. I spent an evening in Pontocho Alley, dining on the finest sushi while overlooking the Kamo River. If you are a foodie, Kyoto will not disappoint.</p>',
            date: 'Oct 15, 2026',
            location: 'Kyoto, Japan',
            image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
            category: 'culture',
            tags: ['Japan', 'Temples', 'Food'],
            author: {
                name: 'Alex Wanderer',
                avatar: '<i class="fa-solid fa-user"></i>'
            }
        },
        {
            id: '2',
            title: 'A Week in the Swiss Alps',
            excerpt: 'Breathtaking views, crisp mountain air, and the thrill of hiking some of the most beautiful trails in Europe.',
            content: '<p>The Swiss Alps offer some of the most dramatic and picturesque landscapes in the world. Based in the small village of Zermatt, I spent a week exploring the shadow of the Matterhorn.</p><h2>The Five Lakes Walk</h2><p>One of the highlights was the Five Lakes Walk. The trail offers spectacular reflections of the Matterhorn in three of the pristine alpine lakes. The weather was perfect, and the crisp mountain air was incredibly refreshing.</p><h2>Glacier Paradise</h2><p>Taking the cable car up to the Matterhorn Glacier Paradise was an experience like no other. Standing at 3,883 meters above sea level, surrounded by eternal snow and ice, it truly felt like I was on top of the world.</p>',
            date: 'Sep 22, 2026',
            location: 'Zermatt, Switzerland',
            image: 'https://images.unsplash.com/photo-1527668752968-14ce70a6ddbc?q=80&w=2070&auto=format&fit=crop',
            category: 'nature',
            tags: ['Switzerland', 'Hiking', 'Mountains'],
            author: {
                name: 'Alex Wanderer',
                avatar: '<i class="fa-solid fa-user"></i>'
            }
        },
        {
            id: '3',
            title: 'Taste of Tuscany: A Culinary Journey',
            excerpt: 'Exploring the rolling hills, vineyards, and rustic kitchens of Italy’s most beloved region.',
            content: '<p>Tuscany is a feast for the senses. From the moment I arrived in Florence, I was captivated by the rich history, stunning art, and, of course, the incredible food.</p><h2>Cooking in Chianti</h2><p>I took a cooking class in a traditional farmhouse in the Chianti region. Learning to make fresh pasta from scratch with a local nonna was a humbling and delicious experience. The secret, she told me, is simply good olive oil and fresh ingredients.</p><h2>Wine Tasting in Montepulciano</h2><p>Driving through the Val d\'Orcia to Montepulciano, I was treated to the classic Tuscan landscape of rolling hills lined with cypress trees. The wine tasting in ancient underground cellars was phenomenal.</p>',
            date: 'Aug 05, 2026',
            location: 'Tuscany, Italy',
            image: 'https://images.unsplash.com/photo-1549646875-f860fb6ddc47?q=80&w=2070&auto=format&fit=crop',
            category: 'food',
            tags: ['Italy', 'Food', 'Wine'],
            author: {
                name: 'Alex Wanderer',
                avatar: '<i class="fa-solid fa-user"></i>'
            }
        },
        {
            id: '4',
            title: 'Midnight Sun in Iceland',
            excerpt: 'Chasing waterfalls and exploring volcanic landscapes under the endless summer days of the north.',
            content: '<p>Iceland is a country of extreme contrasts, and visiting during the summer means experiencing the phenomenon of the Midnight Sun. The days never truly end, giving you unlimited time to explore.</p><h2>The Golden Circle</h2><p>I started with the classic Golden Circle route, marveling at the powerful Gullfoss waterfall and the erupting Geysir. The surreal landscape of Thingvellir National Park, where the tectonic plates slowly drift apart, was fascinating.</p><h2>Black Sand Beaches</h2><p>Further south, the black sand beach of Reynisfjara with its basalt columns was striking. Standing there, listening to the roaring Atlantic waves, I felt a profound sense of isolation and wonder.</p>',
            date: 'Jul 12, 2026',
            location: 'Reykjavik, Iceland',
            image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2000&auto=format&fit=crop',
            category: 'adventure',
            tags: ['Iceland', 'Nature', 'Roadtrip'],
            author: {
                name: 'Alex Wanderer',
                avatar: '<i class="fa-solid fa-user"></i>'
            }
        },
        {
            id: '5',
            title: 'Neon Nights in Tokyo',
            excerpt: 'Diving into the bustling, futuristic metropolis where ancient traditions meet cutting-edge technology.',
            content: '<p>Tokyo is overwhelming, exhilarating, and absolutely unique. It is a city that never sleeps, vibrating with energy and flashing neon lights.</p><h2>Shibuya Crossing</h2><p>Experiencing the "scramble" at Shibuya Crossing is a must. Hundreds of people crossing from all directions, yet somehow avoiding collisions in perfectly orchestrated chaos. It is a sight to behold from the Starbucks above.</p><h2>Akihabara Electric Town</h2><p>Wandering through Akihabara, the center of anime and gaming culture, felt like stepping into a different animated world. The sheer scale of the arcade centers and electronics stores is mind-boggling.</p>',
            date: 'May 30, 2026',
            location: 'Tokyo, Japan',
            image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop',
            category: 'city',
            tags: ['Japan', 'Cityscape', 'Nightlife'],
            author: {
                name: 'Alex Wanderer',
                avatar: '<i class="fa-solid fa-user"></i>'
            }
        },
        {
            id: '6',
            title: 'Safari Adventures in Serengeti',
            excerpt: 'Witnessing the great migration and encountering majestic wildlife in the vast African plains.',
            content: '<p>The Serengeti is one of the most famous wildlife sanctuaries in the world, and for good reason. The sheer volume of wildlife here is staggering.</p><h2>The Great Migration</h2><p>I timed my visit to witness the great migration. Seeing thousands of wildebeest and zebras crossing the plains was a truly awe-inspiring spectacle. The thundering of hooves is a sound I will never forget.</p><h2>Big Cat Encounters</h2><p>Our guide was incredible at spotting big cats. We observed a pride of lions lounging under an acacia tree and even caught a rare glimpse of a leopard stalking through the tall grass in the golden hour of sunset.</p>',
            date: 'Apr 18, 2026',
            location: 'Serengeti, Tanzania',
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop',
            category: 'wildlife',
            tags: ['Tanzania', 'Safari', 'Animals'],
            author: {
                name: 'Alex Wanderer',
                avatar: '<i class="fa-solid fa-user"></i>'
            }
        }
    ];

    return {
        getAllPosts: function() {
            return posts;
        },
        getPostById: function(id) {
            return posts.find(function(post) {
                return post.id === id;
            });
        },
        getFeaturedPosts: function() {
            // Return top 3 for the home page
            return posts.slice(0, 3);
        },
        getCategories: function() {
            var categories = new Set();
            posts.forEach(function(post) {
                if(post.category) categories.add(post.category);
            });
            return Array.from(categories);
        }
    };
});
