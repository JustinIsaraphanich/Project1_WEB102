import Card from './Card.jsx';

function App() {

  return (
    <>
      <h1>Things to do in Palm Beach!</h1>
      <div className="card-container">
        <Card event='Cucina' description='Highly rated italian resturaunt in the heart of Palm Beach.' url='https://www.cucinapalmbeach.com/'  />
        <Card event='The Royal Poinciana Plaza' description='Palm Beach`s premier shopping center on the water.' url='https://theroyalpoincianaplaza.com/'  />
        <Card event='Palm Beach Lake Trail' description='A scenic 10 mile trail on the intercoastal of Palm Beach and West Palm Beach' url='https://www.floridarambler.com/florida-bike-hike-trails/palm-beach-lake-trail/'  />
        <Card event='Henry Morrison Flagler Museum' description='Enjoy an iconic historical landmark in the entirety of Palm Beach county!' url='https://www.flaglermuseum.us/'  />
        <Card event='Norton Museum of Art' description='Visit this internationally recognized museum with a rich history of multiculturual art.' url='https://www.norton.org/'  />
        <Card event='The Breakers Resort' description='A world reknown resort that needs no introduction, stay at this world class resort and have it all!' url='https://www.thebreakers.com/'  />
        <Card event='Peanut Island' description='Peanut Island, a public island located in the middle of the intercoastal. Paddle, ferry, or boat your way to the island and spend the day on the sandbar, walking around the island, or playing at the park.' url='https://discover.pbcgov.org/parks/Locations/Peanut-Island.aspx'  />
        <Card event='Manatee Lagoon' description='A family friendly aquarium right on the water, see manatees up close and personal!' url='https://www.visitmanateelagoon.com/'  />
        <Card event='Ann Norton Sculpture Gardens' description='Where art meets nature, discover beautiful sculptures and figures in the exhibits.' url='https://ansg.org/'  />
        <Card event='McArthur Beach' description='Home to Palm Beach County`s only state park, take a walk through breathtaking nature.' url='https://macarthurbeach.org/'  />
    </div>
    </>
  )
}

export default App
