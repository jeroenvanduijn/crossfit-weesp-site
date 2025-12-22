import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function Aanmelden() {
  return (
    <>
      <Head>
        <title>Aanmelden | CrossFit 020 → CrossFit Weesp</title>
        <meta name="description" content="Kies je CrossFit Weesp membership. Betaal 2 maanden, train 3 maanden." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header style={{
        padding: '20px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'sticky',
        top: 0,
        background: 'rgba(10,10,10,0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 100
      }}>
        <div className="container-narrow" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#32373c',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '18px',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>W</div>
            <span style={{ fontWeight: '600', fontSize: '18px' }}>CrossFit 020</span>
          </Link>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ opacity: 0.5 }}>NL</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ opacity: 0.5 }}>EN</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '60px 0' }}>
        <div className="container-narrow">
          
          {/* Title */}
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: '700',
            marginBottom: '16px'
          }}>
            Kies je <span className="accent-text">CrossFit Weesp</span> membership
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '600px' }}>
            Kies uit 2x per week, 3x per week of Onbeperkt. Betaal 2 maanden, train 3 maanden. 
            Daarna loopt je maandelijkse abonnement door (altijd opzegbaar).
          </p>

          {/* Info + Price Cards Grid */}
          <div className="info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px', marginBottom: '48px' }}>
            
            {/* What you get */}
            <div className="info-card">
              <h3 style={{ fontWeight: '600', marginBottom: '16px', fontSize: '18px' }}>Wat je krijgt</h3>
              <ul style={{ listStyle: 'none' }}>
                {[
                  'Je betaalt nu voor 2 maanden.',
                  'Je traint 3 maanden (1 maand gratis).',
                  'Daarna loopt je maandelijkse abo door.',
                  'Altijd maandelijks opzegbaar.',
                  'Geen inschrijfkosten.'
                ].map((item, i) => (
                  <li key={i} style={{ 
                    padding: '10px 0', 
                    borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.8)'
                  }}>
                    <span style={{ color: '#ffffff' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Cards */}
            <div className="price-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              
              {/* 2x per week */}
              <div className="price-card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '11px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px', 
                  color: 'rgba(255,255,255,0.5)', 
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>Basis</div>
                <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '16px', color: 'rgba(255,255,255,0.9)' }}>
                  2x per week
                </h3>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>€99,90</span>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
                  2x €49,95 voor 3 maanden
                </div>
                <div style={{ 
                  fontSize: '11px', 
                  color: 'rgba(255,255,255,0.4)',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                  Daarna €49,95 / maand
                </div>
              </div>

              {/* 3x per week */}
              <div className="price-card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '11px', 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px', 
                  color: 'rgba(255,255,255,0.5)', 
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>Plus</div>
                <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '16px', color: 'rgba(255,255,255,0.9)' }}>
                  3x per week
                </h3>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>€139,90</span>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
                  2x €69,95 voor 3 maanden
                </div>
                <div style={{ 
                  fontSize: '11px', 
                  color: 'rgba(255,255,255,0.4)',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                  Daarna €69,95 / maand
                </div>
              </div>

              {/* Onbeperkt */}
              <div className="price-card featured" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: '#ffffff',
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>Unlimited</div>
                <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '16px', color: 'rgba(255,255,255,0.9)' }}>
                  Onbeperkt
                </h3>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Space Grotesk, sans-serif' }}>€179,90</span>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
                  2x €89,95 voor 3 maanden
                </div>
                <div style={{ 
                  fontSize: '11px', 
                  color: 'rgba(255,255,255,0.4)',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                  Daarna €89,95 / maand
                </div>
              </div>
            </div>
          </div>

          {/* Membership details */}
          <p style={{ 
            color: 'rgba(255,255,255,0.5)', 
            fontSize: '14px', 
            marginBottom: '48px',
            textAlign: 'center'
          }}>
            Je kiest je membership in het aanmeldformulier hieronder.
          </p>

          {/* Info boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '48px' }} className="info-grid">
            <div className="info-card">
              <h3 style={{ fontWeight: '600', marginBottom: '8px', color: '#ffffff' }}>Overgangsperiode: 3 maanden</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                Je krijgt 3 maanden toegang bij CrossFit Weesp voor de prijs van 2 maanden. 
                Dat is 1 maand gratis om te wennen aan je nieuwe box.
              </p>
            </div>
            <div className="info-card">
              <h3 style={{ fontWeight: '600', marginBottom: '8px', color: '#ffffff' }}>Maandelijks opzegbaar</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
                Na de overgangsperiode loopt je maandelijkse abonnement automatisch door. 
                Je kunt altijd opzeggen, zonder vaste contractduur.
              </p>
            </div>
          </div>

          {/* Embed Section */}
          <section>
            <h2 style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '24px'
            }}>
              Vul je gegevens in
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>
              Vul hieronder je gegevens in om je aanmelding af te ronden.
            </p>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '20px 24px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px'
            }}>
              <span style={{ color: '#ffffff', fontSize: '20px' }}>ℹ️</span>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', marginBottom: '4px', fontWeight: '500' }}>
                  Wat gebeurt er na je aanmelding?
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                  Na het invullen van het formulier en het afronden van de betaling maakt CrossFit Weesp zo snel mogelijk een account voor je aan. Je ontvangt per e-mail een bevestiging met je inloggegevens.
                </p>
              </div>
            </div>

            <div className="embed-container" style={{ minHeight: '2300px' }}>
              <iframe
                src="https://kilo.gymleadmachine.com/widget/form/wOlewoKR72Z2UXfn6qNB"
                style={{ width: '100%', height: '2219px', border: 'none', borderRadius: '3px' }}
                id="inline-wOlewoKR72Z2UXfn6qNB"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Moving - Weesp Form"
                data-height="2219"
                data-layout-iframe-id="inline-wOlewoKR72Z2UXfn6qNB"
                data-form-id="wOlewoKR72Z2UXfn6qNB"
                title="Moving - Weesp Form"
              />
            </div>
            <Script src="https://kilo.gymleadmachine.com/js/form_embed.js" strategy="lazyOnload" />
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
            Heb je vragen? Mail ons op <a href="mailto:info@crossfit020.nl" style={{ color: 'rgba(255,255,255,0.8)' }}>info@crossfit020.nl</a>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>
            CrossFit 020
          </p>
        </div>
      </footer>
    </>
  );
}
