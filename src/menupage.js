export function createMenuPage() {

    const menuPage = document.createElement('div');
    menuPage.innerHTML = `
    <h1>Our Menu</h1>
    <section>
      <h2>Starters</h2>
      <ul>
        <li><strong>Laser-Cut Bruschetta</strong> – Toasted AI-baked bread with heirloom tomatoes</li>
        <li><strong>Robotic Arms Nachos</strong> – Precision-layered nachos with pico de gallo</li>
      </ul>
    </section>
    <section>
      <h2>Mains</h2>
      <ul>
        <li><strong>Grilled Titanium Steak</strong> – 48-hour aged wagyu on a carbon-plasma grill</li>
        <li><strong>Cyber-Curry Bowl</strong> – Spiced lentils with smart rice and turmeric oil</li>
      </ul>
    </section>
    <section>
      <h2>Desserts</h2>
      <ul>
        <li><strong>Quantum Cheesecake</strong> – Flavor collapse on contact</li>
        <li><strong>Molten Lava Muffin</strong> – Time your bite right</li>
      </ul>
    </section>
  `;


  return menuPage;
}

