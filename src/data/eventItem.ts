type EventItem = {
  title: string;
  time: string;
  mapUrl: string;
  address: string;
}

const eventsList: Record<string, EventItem[]> = {
  "2026-01-17": [{title: "Annual Tree Giveaway", mapUrl: "https://maps.app.goo.gl/5Xe7T8EJ9DMb6iCd7", address: "910 S Friendswood Dr, Friendswood, TX 77546", time: "8:00 AM"}],
  "2026-02-21": [{title: "Daddy Daughter Dance", mapUrl: "https://maps.app.goo.gl/jWPDqckyHNQ74AC79", address: "1000 Manison Pkwy, Friendswood, TX 77546", time: "3:00-5:00 PM | 6:00-8:00 PM"}],
  "2026-03-09": [{title: "Friendswood Fish Camp", mapUrl: "https://maps.app.goo.gl/qJNJn4E3vSWvDs5A6", address: "2200 S Friendswood Dr, Friendswood, TX 77546", time: "1:00-3:00 PM"}],
  "2026-03-11": [{title: "Friendswood Fish Camp", mapUrl: "https://maps.app.goo.gl/qJNJn4E3vSWvDs5A6", address: "2200 S Friendswood Dr, Friendswood, TX 77546", time: "1:00-3:00 PM"}],
  "2026-03-13": [{title: "Friendswood Fish Camp", mapUrl: "https://maps.app.goo.gl/qJNJn4E3vSWvDs5A6", address: "2200 S Friendswood Dr, Friendswood, TX 77546", time: "1:00-3:00 PM"}],
  "2026-04-11": [{title: "Spring Sparkle", mapUrl: "https://maps.app.goo.gl/qJNJn4E3vSWvDs5A6", address: "2200 S Friendswood Dr, Friendswood, TX 77546", time: "8:00 AM-2:00 PM"}],
  "2026-05-01": [{title: "Concert in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "7:00-9:00 PM"}],
  "2026-05-02": [{title: "Youth Fishing Derby", mapUrl: "https://maps.app.goo.gl/qJNJn4E3vSWvDs5A6", address: "2200 S Friendswood Dr, Friendswood, TX 77546", time: "8:00-10:00 AM"}],
  "2026-05-08": [{title: "Concert in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "7:00-9:00 PM"}],
  "2026-05-09": [{title: "Memorial Day Celebration", mapUrl: "https://maps.app.goo.gl/5Xe7T8EJ9DMb6iCd7", address: "910 S Friendswood Dr, Friendswood, TX 77546", time: "9:00 AM"}],
  "2026-05-15": [{title: "Concert in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "7:00-9:00 PM"}],
  "2026-05-22": [{title: "Concert in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "7:00-9:00 PM"}],
  "2026-05-29": [{title: "Concert in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "7:00-9:00 PM"}],
  "2026-06-05": [{title: "Concert in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "7:00-9:00 PM"}],
  "2026-06-12": [{title: "Concert in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "7:00-9:00 PM"}],
  "2026-06-19": [{title: "Concert in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "7:00-9:00 PM"}],
  "2026-06-26": [{title: "Concert in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "7:00-9:00 PM"}],
  "2026-07-04": [{title: "July 4th Celebration", mapUrl: "https://maps.app.goo.gl/qJNJn4E3vSWvDs5A6", address: "2200 S Friendswood Dr, Friendswood, TX 77546", time: "9:10 PM"}],
  "2026-07-18": [{title: "Movie in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "7:00 PM"}],
  "2026-07-25": [{title: "Movie in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "7:00 PM"}],
  "2026-08-01": [{title: "Movie in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "7:00 PM"}],
  "2026-11-08": [{title: "Fall Haul", mapUrl: "https://maps.app.goo.gl/qJNJn4E3vSWvDs5A6", address: "2200 S Friendswood Dr, Friendswood, TX 77546", time: "8:00 AM-2:00 PM"}],
  "2026-11-14": [{title: "Mother/Son Kickball", mapUrl: "https://maps.app.goo.gl/sc7Jni72yQZtmsYP9", address: "205 Stadium Ln, Friendswood, TX 77546", time: "TBD"}],
  "2026-12-06": [{title: "Flapjack 5K Fun Run", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "8:15 AM"}],
  "2026-12-13": [{title: "Santa in the Park", mapUrl: "https://maps.app.goo.gl/RQLq7KWMYdedWhZ5A", address: "1100 S Friendswood Dr, Friendswood, TX 77546", time: "3:00 PM"}],

};

export default eventsList;
