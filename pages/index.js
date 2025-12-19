import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Waarom sluit CrossFit 020?",
      a: "We konden geen langlopend huurcontract krijgen en alternatieve locaties bleken te duur of slechts tijdelijk beschikbaar. Daarom hebben we gezocht naar de beste vervangers voor onze leden."
    },
    {
      q: "Hoe werkt de overstap-actie?",
      a: "Je kiest een membership (2x, 3x per week of Onbeperkt), betaalt direct voor 2 maanden en krijgt 3 maanden toegang. Daarna loopt je maandelijkse abonnement automatisch door."
    },
    {
      q: "Wat gebeurt er na de 3 maanden?",
      a: "Na de overgangsperiode loopt je maandelijkse abonnement automatisch door. Bij CrossFit Weesp is alles maandelijks opzegbaar, dus je zit nergens aan vast."
    },
    {
      q: "Wat gebeurt er met mijn abonnement bij CrossFit 020?",
      a: "Je ontvangt een aparte e-mail met informatie over je lopende abonnement, eventuele terugbetalingen en credits."
    },
    {
      q: "Is CrossFit Weesp goed bereikbaar vanuit Amsterdam?",
      a: "Ja! CrossFit Weesp ligt in Weesp bij de wijk Weespersluis, op ongeveer 15 minuten rijden vanaf Amsterdam Zuidoost. Er is voldoende parkeergelegenheid."
    },
    {
      q: "Wat is het verschil tussen de abonnementen?",
      a: "Bij 2x per week krijg je app-toegang en voedingslogboek. Bij 3x per week komt daar vrij fitnessen bij. Onbeperkt geeft je toegang tot alle lessen, vrij fitness en de mogelijkheid om 1 maand per jaar te bevriezen."
    },
    {
      q: "Kan ik ook bokszaktraining doen?",
      a: "Ja! CrossFit Weesp biedt naast CrossFit ook bokszaktraining aan. Dit is inbegrepen in je abonnement."
    },
    {
      q: "Zijn er inschrijfkosten?",
      a: "Nee, CrossFit Weesp rekent geen inschrijfkosten. Je betaalt alleen voor je training."
    }
  ];

  return (
    <>
      <Head>
        <title>CrossFit 020 → CrossFit Weesp | Jouw nieuwe trainingsplek</title>
        <meta name="description" content="CrossFit Weesp biedt dagelijkse WODs, bokszaktraining en een geweldige community. Maandelijks opzegbaar, geen inschrijfkosten." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header style={{
        padding: '20px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'sticky',
        top: 0,
        background: 'rgba(10,10,10,0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 100
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '18px',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>W</div>
            <span style={{ fontWeight: '600', fontSize: '18px' }}>CrossFit 020 → CrossFit Weesp</span>
          </Link>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ opacity: 0.5 }}>NL</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ opacity: 0.5 }}>EN</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient">
        <div className="container hero-content" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(36px, 7vw, 64px)',
            fontWeight: '700',
            lineHeight: 1.1,
            marginBottom: '24px',
            maxWidth: '800px'
          }}>
            Jouw nieuwe <span className="accent-text">trainingsplek</span> na CrossFit 020
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            marginBottom: '40px',
            lineHeight: 1.7
          }}>
            CrossFit Weesp biedt dagelijkse WODs, bokszaktraining en een hechte community. 
            Maandelijks opzegbaar en geen inschrijfkosten.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/aanmelden" className="cta-button">
              Kies je membership →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }} className="grid-4">
            {[
              { value: '€49,95', label: 'Vanaf per maand' },
              { value: '0', label: 'Inschrijfkosten' },
              { value: 'Flex', label: 'Maandelijks opzegbaar' },
              { value: '15 min', label: 'Vanaf Amsterdam' }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '28px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif', color: '#10b981' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CrossFit Weesp */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Waarom <span className="accent-text">CrossFit Weesp</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            Een moderne CrossFit box met persoonlijke aandacht en een breed trainingsaanbod.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="grid-3">
            {[
              { icon: '🏋️', title: 'Dagelijkse WODs', desc: 'Elke dag een nieuwe Workout of the Day, nooit dezelfde training' },
              { icon: '🥊', title: 'Bokszaktraining', desc: 'Combinatie van kickboksen met kracht- en conditie oefeningen' },
              { icon: '👥', title: 'Kleine groepen', desc: 'Persoonlijke aandacht van ervaren coaches in elke les' },
              { icon: '📱', title: 'App & voedingslogboek', desc: 'Track je progressie en voeding met de Pro app functies' },
              { icon: '💪', title: 'Vrij fitnessen', desc: 'Toegang tot de fitness ruimte naast de groepslessen' },
              { icon: '🤝', title: 'Hechte community', desc: 'Motiverende sfeer waar iedereen welkom is' }
            ].map((feature, i) => (
              <div key={i} className="feature-card">
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>{feature.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aanbod Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, rgba(16,185,129,0.05) 0%, transparent 100%)' }}>
        <div className="container">
          <h2 className="section-title">Trainingsaanbod</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            Gevarieerde workouts voor elk niveau, van beginner tot gevorderd.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="grid-3">
            {[
              { title: 'CrossFit WODs', desc: 'Dagelijks wisselende workouts die je uitdagen en sterker maken. Geschikt voor alle niveaus met schaalbare oefeningen.', icon: '🏃' },
              { title: 'Bokszaktraining', desc: 'Verbeter je uithoudingsvermogen met dynamische kickboksbewegingen gecombineerd met kracht- en conditie.', icon: '🥊' },
              { title: 'Vrij Fitness', desc: 'Zelfstandig trainen in de fitness ruimte wanneer het jou uitkomt. Inbegrepen vanaf 3x per week.', icon: '💪' }
            ].map((item, i) => (
              <div key={i} className="feature-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontWeight: '600', fontSize: '20px', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', flex: 1 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt de overstap */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Hoe werkt de overstap</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            In een paar simpele stappen train je bij CrossFit Weesp.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="grid-2">
            {[
              { step: '1', title: 'Kies je membership', desc: '2x per week, 3x per week of Onbeperkt.' },
              { step: '2', title: 'Betaal 2 maanden vooruit', desc: 'Je betaalt direct voor 2 maanden en krijgt 3 maanden toegang.' },
              { step: '3', title: 'Start met trainen', desc: 'Je kunt direct beginnen bij CrossFit Weesp.' },
              { step: '4', title: 'Maandelijks abonnement', desc: 'Na 3 maanden loopt je maandelijkse abo automatisch door. Altijd opzegbaar.' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div className="step-number">{item.step}</div>
                <div>
                  <h3 style={{ fontWeight: '600', marginBottom: '4px' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarieven */}
      <section id="tarieven" style={{ padding: '80px 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <h2 className="section-title">Tarieven <span className="accent-text">overstap-actie</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px', maxWidth: '600px' }}>
            Betaal 2 maanden, train 3 maanden. Daarna loopt je maandelijkse abonnement door (altijd opzegbaar).
          </p>
          <div style={{ 
            background: 'rgba(16, 185, 129, 0.1)', 
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '12px',
            padding: '16px 24px',
            marginBottom: '48px',
            maxWidth: '600px'
          }}>
            <span style={{ color: '#10b981', fontWeight: '600' }}>✓ 1 maand gratis</span>
            <span style={{ color: 'rgba(255,255,255,0.6)', marginLeft: '8px' }}>bij de overstap naar CrossFit Weesp</span>
          </div>
          
          <div className="price-cards" style={{ display: 'flex', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
            {/* 2x per week */}
            <div className="price-card" style={{ flex: '1 1 280px' }}>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>Basis</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>2x per week</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                <span style={{ fontSize: '48px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>€99,90</span>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>eenmalig</span>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
                2x €49,95 = 3 maanden trainen
              </div>
              <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                {['2x per week groepstraining', 'App Pro functies', 'Voedingslogboek'].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#10b981' }}>✓</span> {item}
                  </li>
                ))}
                {['Vrij fitnessen', 'Maand bevriezen'].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.3)' }}>
                    <span>✗</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/aanmelden" className="secondary-button" style={{ width: '100%', textAlign: 'center' }}>
                Kies 2x per week
              </Link>
            </div>

            {/* 3x per week */}
            <div className="price-card" style={{ flex: '1 1 280px' }}>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>Plus</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>3x per week</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                <span style={{ fontSize: '48px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>€139,90</span>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>eenmalig</span>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
                2x €69,95 = 3 maanden trainen
              </div>
              <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                {['3x per week groepstraining', 'Vrij fitnessen', 'App Pro functies', 'Voedingslogboek'].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#10b981' }}>✓</span> {item}
                  </li>
                ))}
                {['Maand bevriezen'].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.3)' }}>
                    <span>✗</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/aanmelden" className="secondary-button" style={{ width: '100%', textAlign: 'center' }}>
                Kies 3x per week
              </Link>
            </div>

            {/* Onbeperkt */}
            <div className="price-card featured" style={{ flex: '1 1 280px' }}>
              <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: '#10b981', marginBottom: '8px' }}>Unlimited</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '4px' }}>Onbeperkt</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                <span style={{ fontSize: '48px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>€179,90</span>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>eenmalig</span>
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
                2x €89,95 = 3 maanden trainen
              </div>
              <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                {[
                  'Onbeperkt groepstrainingen',
                  'Onbeperkt vrij fitnessen',
                  'App Pro functies',
                  'Voedingslogboek',
                  '1 maand per jaar bevriezen'
                ].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: '#10b981' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/aanmelden" className="cta-button" style={{ width: '100%', textAlign: 'center' }}>
                Kies Onbeperkt
              </Link>
            </div>
          </div>

          {/* Info na overgangsperiode */}
          <div style={{ marginTop: '48px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>Na de overgangsperiode</h3>
            <div style={{ 
              background: 'rgba(255,255,255,0.03)', 
              borderRadius: '12px', 
              padding: '24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }} className="grid-3">
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>2x per week</div>
                <div style={{ fontWeight: '600' }}>€49,95 / maand</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>3x per week</div>
                <div style={{ fontWeight: '600' }}>€69,95 / maand</div>
              </div>
              <div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Onbeperkt</div>
                <div style={{ fontWeight: '600' }}>€89,95 / maand</div>
              </div>
            </div>
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
              Alle abonnementen zijn maandelijks opzegbaar. Geen inschrijfkosten.
            </p>
          </div>
        </div>
      </section>

      {/* Locatie */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(180deg, transparent 0%, rgba(16,185,129,0.05) 100%)' }}>
        <div className="container">
          <h2 className="section-title">Locatie</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            Modern gevestigd bij Weespersluis, op ~15 minuten vanaf Amsterdam Zuidoost.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="grid-2">
            <div className="feature-card">
              <h3 style={{ fontWeight: '600', fontSize: '20px', marginBottom: '8px', color: '#10b981' }}>CrossFit Weesp</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
                Pampuslaan 153<br />
                1382 JN Weesp
              </p>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
                Onderdeel van Athos Coaching, powered by Yamato Gym.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="mailto:info@crossfitweesp.nl" style={{ color: '#10b981', fontSize: '14px' }}>info@crossfitweesp.nl</a>
                <a href="tel:0652421183" style={{ color: '#10b981', fontSize: '14px' }}>06-52421183</a>
              </div>
            </div>
            <div className="feature-card">
              <h3 style={{ fontWeight: '600', fontSize: '20px', marginBottom: '8px', color: '#10b981' }}>Bereikbaarheid</h3>
              <ul style={{ listStyle: 'none' }}>
                {[
                  '~15 min rijden vanaf Amsterdam Zuidoost',
                  'Vlakbij woonwijk Weespersluis',
                  'Voldoende parkeergelegenheid',
                  'Goed bereikbaar met OV'
                ].map((item, i) => (
                  <li key={i} style={{ padding: '8px 0', color: 'rgba(255,255,255,0.7)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#10b981' }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <a href="https://maps.google.com/?q=Pampuslaan+153+Weesp" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', fontWeight: '500' }}>
              Bekijk op Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Waarom leden kiezen voor Weesp</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="grid-2">
            {[
              { title: 'De mooiste box van Weesp', desc: 'Moderne faciliteiten met alle equipment die je nodig hebt.' },
              { title: 'Topcoaches', desc: 'Ervaren trainers die je persoonlijk begeleiden op elk niveau.' },
              { title: 'Geweldige sfeer', desc: 'Een hechte community waar iedereen welkom is.' },
              { title: 'Gevarieerde workouts', desc: 'Elke dag anders, nooit saai. Van WODs tot bokszaktraining.' }
            ].map((item, i) => (
              <div key={i} className="feature-card">
                <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 0', background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <h2 className="section-title">Veelgestelde vragen</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            Alles wat je wilt weten over de overstap naar CrossFit Weesp.
          </p>
          
          <div style={{ maxWidth: '800px' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <span style={{ 
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    fontSize: '20px'
                  }}>↓</span>
                </div>
                {openFaq === i && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0', textAlign: 'center', background: 'linear-gradient(180deg, transparent 0%, rgba(16,185,129,0.1) 100%)' }}>
        <div className="container">
          <h2 style={{ 
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: '700',
            marginBottom: '24px'
          }}>
            Klaar om te <span className="accent-text">starten</span>?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
            Betaal 2 maanden, train 3 maanden. Maandelijks opzegbaar, geen inschrijfkosten.
          </p>
          <Link href="/aanmelden" className="cta-button">
            Kies je membership →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <div style={{ fontWeight: '600', marginBottom: '8px' }}>Meer over CrossFit Weesp</div>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <a href="https://crossfitweesp.nl" style={{ color: 'rgba(255,255,255,0.6)' }}>Website</a>
                <a href="https://crossfitweesp.nl/rooster/" style={{ color: 'rgba(255,255,255,0.6)' }}>Rooster</a>
                <a href="https://crossfitweesp.nl/tarieven/" style={{ color: 'rgba(255,255,255,0.6)' }}>Tarieven</a>
                <a href="https://crossfitweesp.nl/onze-box/" style={{ color: 'rgba(255,255,255,0.6)' }}>Onze Box</a>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                Vragen? Mail naar <a href="mailto:info@crossfit020.nl" style={{ color: '#10b981' }}>info@crossfit020.nl</a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
            CrossFit 020
          </div>
        </div>
      </footer>
    </>
  );
}
