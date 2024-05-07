import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Facilities = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Quiet time and prayer time sharing',
      imageUrl:'https://picsum.photos/200/300',
      shortContent: '17-04-2024 Quiet Time and Prayer Time',
      longContent: `
      <h1>Introduction</h1> <br/>
      I was in college the first time I heard the phrase quiet time from a Christian peer. I was too embarrassed to ask what that meant, especially as I saw my other Christian friends all nod in understanding.

      Luckily I was observant enough to pick up on the context clues.

      Simply put, quiet time is dedicated time with God. This can be just prayer, but it often includes a devotion, a Bible study, or both.
      <br/>

      <h2 class="text-center">7 Benefits of Quiet Time with God</h2>
      <br/>
      <ul>
        <li>Strengthen Your Relationship with God</li>
        <li>Stay Focused on What Matters Most</li>
        <li>Grow Your Faith</li>
        <li>Be Encouraged in Your Walk with Christ</li>
        <li>Hear God’s Voice</li>
        <li>Offer Praise and Gratitude to God</li>
        <li>Share Your Burdens with God</li>
      </ul>`
    },
    {
      id: 2,
      title: `Today's Quiet time`,
      imageUrl: 'https://picsum.photos/200/300',
      shortContent: `I learnt Few things in my Today's quiet time. my Quiet time is Romans :- 14:13-23`,
      longContent: `
      <h1>Few more point I learnt Today's Quiet Time</h1>
      <br/>
      <ul>
        <li>Primary expectation from God for me is that the Kingdom of God is not a matter of eating and drinking, but of righteousness, peace, and joy in the Holy Spirit. I need and want to serve Christ in a way that is pleasing to God and receives human approval.</li>
        <br/>
        <li>Each food is clean. I need to My food habits check myself. Do I destroy the word of God for the sake of it or not? And is it wrong for a person to eat anything that causes someone else to stumble or not? If I stumble about eating anything, God told me that it is better not to eat food or drink anything or do anything else that will cause my brothers or sisters to fall.  </li>

      </ul>
      <br/>
      <h1>Conclusion</h1>
      <p>Whatever I eat or drink, whether it hurts anyone or not, ultimately, I strive to do what leads to peace, mutual edification, and is pleasing to God.</p>

     `
    },
    {
      id: 3,
      title: `Praying God`,
      imageUrl: 'https://picsum.photos/200/300',
      shortContent: 'what He learnt on his Quiet Time and I praying to God',
      longContent: `
      <h1> Praying God</h1>
      <ul>
      <li>
      If I hurt anyone with my food habits, please forgive me, Lord.
      </li>
      <li>
      What you said today, quiet time. Oh Lord, please store in my mind. If I face these types of situations, I will recall your word of God and apply it to that situation. This will please you and never hurt my fellow believers' faith.
      </li>
      </ul>`
    },
    {
      id: 4,
      title: `Praying God`,
      imageUrl: 'https://picsum.photos/200/300',
      shortContent: 'what He learnt on his Quiet Time and I praying to God',
      longContent: `
      <h1> Praying God</h1>
      <ul>
      <li>
      If I hurt anyone with my food habits, please forgive me, Lord.
      </li>
      <li>
      What you said today, quiet time. Oh Lord, please store in my mind. If I face these types of situations, I will recall your word of God and apply it to that situation. This will please you and never hurt my fellow believers' faith.
      </li>
      </ul>`
    },
    {
      id:5,
      title: `Praying God`,
      imageUrl: 'https://picsum.photos/200/300',
      shortContent: 'what He learnt on his Quiet Time and I praying to God',
      longContent: `
      <h1> Praying God</h1>
      <ul>
      <li>
      If I hurt anyone with my food habits, please forgive me, Lord.
      </li>
      <li>
      What you said today, quiet time. Oh Lord, please store in my mind. If I face these types of situations, I will recall your word of God and apply it to that situation. This will please you and never hurt my fellow believers' faith.
      </li>
      </ul>`
    },
    {
      id: 6,
      title: `Praying God`,
      imageUrl: 'https://picsum.photos/200/300',
      shortContent: 'what He learnt on his Quiet Time and I praying to God',
      longContent: `
      <h1> Praying God</h1>
      <ul>
      <li>
      If I hurt anyone with my food habits, please forgive me, Lord.
      </li>
      <li>
      What you said today, quiet time. Oh Lord, please store in my mind. If I face these types of situations, I will recall your word of God and apply it to that situation. This will please you and never hurt my fellow believers' faith.
      </li>
      </ul>`
    },
    {
      id: 7,
      title: `Praying God`,
      imageUrl: 'https://picsum.photos/200/300',
      shortContent: 'what He learnt on his Quiet Time and I praying to God',
      longContent: `
      <h1> Praying God</h1>
      <ul>
      <li>
      If I hurt anyone with my food habits, please forgive me, Lord.
      </li>
      <li>
      What you said today, quiet time. Oh Lord, please store in my mind. If I face these types of situations, I will recall your word of God and apply it to that situation. This will please you and never hurt my fellow believers' faith.
      </li>
      </ul>`
    }

  ];


  const handleExpandClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="mt-5"> 
      <h1 className='text-center text-danger text-capitalize my-5'>Today's Quiet time</h1>
      <div className="container">
        <div className="row">
          {cards.map(card => (
            <div className="col-sm" key={card.id}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={card.imageUrl} className="card-img-top" alt="..." height='200px' />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.shortContent}</p>
                  <button className="btn btn-primary" onClick={() => handleExpandClick(card.id)}>
                    {expandedCard === card.id ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Display expanded content below the cards */}
      {expandedCard !== null && (
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div dangerouslySetInnerHTML={{ __html: cards.find(card => card.id === expandedCard).longContent }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Facilities;
