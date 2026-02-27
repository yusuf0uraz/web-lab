import './App.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana icerige atla</a>
      
      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img src="https://via.placeholder.com/150" alt="Yusuf Uraz'in vesikalik fotografi" />
            <figcaption>Yusuf Uraz</figcaption>
          </figure>
          <p>Merhaba, ben Yusuf Uraz. Bilgisayar Muhendisligi ogrencisiyim. Web gelistirme konularina ilgi duyuyorum.</p>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>Basit Blog Uygulamasi</h3>
            <p>Sadece HTML ve CSS kullanarak yaptigim ilk kisisel blog denemem.</p>
          </article>
          <article>
            <h3>E-Ticaret Arayuzu</h3>
            <p>React kullanarak tasarladigim, urun listeleme mantigini ogrendigim kucuk bir proje.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" 
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10} 
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Yusuf Uraz. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;
