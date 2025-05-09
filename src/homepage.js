
export function createHomePage() {

    const homePage = document.createElement('div');
    homePage.innerHTML = `
    <h1>The Iron Fork</h1>
    <p><em>Where Steel Meets Flavor</em></p>

    <section>
      <h2>Welcome Message</h2>
      <p>Welcome to The Iron Fork — a modern bistro where classic taste meets futuristic flair. Our chefs craft bold dishes with ingredients so fresh, they might be sentient.</p>
    </section>

    <section>
      <h2>Highlights</h2>
      <ul>
        <li>🍳 Open kitchen with live plating</li>
        <li>🧠 AI-recommended wine pairings</li>
        <li>⚡ 10-minute guaranteed lunch menu</li>
      </ul>
    </section>

    <section>
      <h2>Today's Special</h2>
      <p><strong>🔥 Photon-Fried Calamari</strong> – Fried in ionized air. Available till 6 PM only!</p>
    </section>

    <section>
      <h2>Customer Quotes</h2>
      <blockquote>“Tastes like the future.” – Nova Zhang</blockquote>
      <blockquote>“Never thought a machine could plate so beautifully.” – Chef Remy 2.0</blockquote>
      <blockquote>“The Quantum Cheesecake blew my mind.” – Dr. Lin</blockquote>
    </section>

    <button>Explore Our Menu</button>
  `;


  return homePage;
}
