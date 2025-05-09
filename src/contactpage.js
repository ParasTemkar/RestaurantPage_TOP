
export function createContactPage() {
 
    const contactPage = document.createElement('div');
    contactPage.innerHTML = `
    <h1>Contact Us</h1>

    <section>
      <h2>Location</h2>
      <p>📍 42 Parallel Circuit, TechnoTown, Synth City 90001</p>
    </section>

    <section>
      <h2>Hours</h2>
      <p>Mon–Sat: 11 AM – 11 PM</p>
      <p>Sun: Closed for system maintenance</p>
    </section>

    <section>
      <h2>Get in Touch</h2>
      <p>☎️ +123 456 7890</p>
      <p>📧 contact@theironfork.ai</p>
    </section>

    <section>
      <h2>Contact Form</h2>
      <form>
        <label>
          Name:<br>
          <input type="text" name="name" required>
        </label><br><br>

        <label>
          Email:<br>
          <input type="email" name="email" required>
        </label><br><br>

        <label>
          Preferred Booking Date:<br>
          <input type="date" name="date">
        </label><br><br>

        <label>
          Message:<br>
          <textarea name="message" rows="4"></textarea>
        </label><br><br>

        <button type="submit">Ping Us</button>
      </form>
    </section>
  `;
    
    return contactPage;
}
