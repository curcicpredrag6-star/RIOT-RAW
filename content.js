/* RIOT RAW IMAGE SLOT SYSTEM — replace files in /images without editing code. */
window.RIOT_CONTENT = {
  brand: { location: 'BARCELONA / INDEPENDENT CREATIVE PLATFORM', slogan: 'NO POSES. NO FILTERS. ONLY RAW.', pillars: 'FASHION. ART. SOUND. MOVEMENT.' },
  images: { hero: 'images/photo1.jpg' },
  fallback: {
    hero: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&q=85',
    movement: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1600&q=85'
  },
  heroStrip: [
    { image:'images/photo2.jpg', fallback:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85', alt:'RIOT RAW event moment' },
    { image:'images/photo3.jpg', fallback:'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=85', alt:'RIOT RAW gathering' },
    { image:'images/photo4.jpg', fallback:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85', alt:'Fashion moment' },
    { image:'images/photo5.jpg', fallback:'https://images.unsplash.com/photo-1571266028243-d220c9c3b3c7?auto=format&fit=crop&w=1000&q=85', alt:'Sound moment' }
  ],
  chapters: [
    { number:'01', title:'FASHION', text:'Clothes. People. Expression.', image:'images/photo6.jpg', fallback:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85', target:'#journal' },
    { number:'02', title:'ART', text:'Visuals. Ideas. Collaboration.', image:'images/art1.jpg', fallback:'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=85', target:'#gallery' },
    { number:'03', title:'SOUND', text:'Music. DJs. Listening sessions.', image:'images/photo7.jpg', fallback:'https://images.unsplash.com/photo-1571266028243-d220c9c3b3c7?auto=format&fit=crop&w=1200&q=85', target:'#journal' },
    { number:'04', title:'MOVEMENT', text:'Run. Gather. Eat. Connect.', image:'images/movement1.jpg', fallback:'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85', target:'#movement' }
  ],
  events: [
    { number:'02', title:'VINOS & PASTRAMI', subtitle:'RIOT RAW × UAU', date:'MAY 01, 2026', location:'BARCELONA', image:'images/photo8.jpg', fallback:'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85', description:'Wine, food, music and people. A RIOT RAW gathering made to be experienced, not overexplained.', gallery:['images/photo8.jpg','images/event2.jpg','images/event3.jpg'], galleryFallback:['https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1515003197210-e0cd7187aab3?auto=format&fit=crop&w=1400&q=85'] },
    { number:'01', title:'FIRST RIOT RAW', subtitle:'THE BEGINNING', date:'ARCHIVE', location:'BARCELONA', image:'images/photo9.jpg', fallback:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85', description:'Live fashion runway, emerging designers, music, unexpected collaborations and surprises. The first chapter — the people, the energy and the beginning of something that keeps moving.', gallery:['images/photo9.jpg','images/photo10.jpg'], galleryFallback:['https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85'] }
  ],
  gallery: [
    { category:'EVENTS', image:'images/photo9.jpg', fallback:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85', alt:'Crowd at an underground event' },
    { category:'FASHION', image:'images/photo6.jpg', fallback:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85', alt:'Fashion editorial portrait' },
    { category:'ART', image:'images/art1.jpg', fallback:'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1400&q=85', alt:'Art detail' },
    { category:'MOVEMENT', image:'images/movement1.jpg', fallback:'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=85', alt:'Runners moving through the city' },
    { category:'SOUND', image:'images/photo7.jpg', fallback:'https://images.unsplash.com/photo-1571266028243-d220c9c3b3c7?auto=format&fit=crop&w=1400&q=85', alt:'DJ and sound equipment' },
    { category:'EVENTS', image:'images/photo8.jpg', fallback:'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1400&q=85', alt:'Wine and gathering' },
    { category:'FASHION', image:'images/photo4.jpg', fallback:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85', alt:'Street style' },
    { category:'MOVEMENT', image:'images/movement2.jpg', fallback:'https://images.unsplash.com/photo-1502904550040-7534598a7f1b?auto=format&fit=crop&w=1400&q=85', alt:'Running community' }
  ],
  journal: [
    { category:'MOVEMENT', title:'A NEW CHAPTER: MOVEMENT', text:'Why we are taking RIOT RAW outside the room.', image:'images/movement1.jpg', fallback:'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85', target:'#movement' },
    { category:'FASHION', title:'THE FITS — VOL. 01', text:'Looks, people and moments from our world.', image:'images/photo6.jpg', fallback:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85', target:'#gallery' },
    { category:'SOUND', title:'RIOT RAW PLAYLIST', text:'A selection of tracks from our events and gatherings.', image:'images/photo7.jpg', fallback:'https://images.unsplash.com/photo-1571266028243-d220c9c3b3c7?auto=format&fit=crop&w=1200&q=85', target:'#newsletter' }
  ]
};
