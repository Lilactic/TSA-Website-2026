import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import '../../global.css'
import styles from './References.module.css'
import copyrightChecklist from '../../assets/documents/copyrightChecklist.pdf'

function References() {
  return (
    <>
        <Navbar />
        
        <main className={styles.main}>
          <section className={styles.hero}>
            <div 
              className={styles.heroBG}
            />

            <div className={styles.content}>
              <h1 className={styles.title}>References</h1>
              <h2 className={`interSubtitle ${styles.subtitle}`}>Work log, copyright checklist, & sources.</h2>
            </div>
          </section>
          <section className={styles.pdfs}>
            <div className={styles.pdfsContainer}>
              <div className={styles.pdfSubcontainer}>
                <h1 className={styles.subtitle}>Work Log</h1>
                <div className={styles.pdfViewerContainer}>
                  <iframe className={styles.pdfViewer} src={copyrightChecklist} width="100%" height="500px" title="Student Copyright Checklist">
                    <p>Your browser does not support iframes. You can download the PDF
                      <a href={copyrightChecklist}>here</a>.
                    </p>
                  </iframe>
                </div>
              </div>
              <div className={styles.pdfSubcontainer}>
                <h1 className={styles.subtitle}>Student Copyright Checklist</h1>
                <div className={styles.pdfViewerContainer}>
                  <iframe className={styles.pdfViewer} src={copyrightChecklist} title="Student Copyright Checklist">
                    <p>Your browser does not support iframes. You can download the PDF
                      <a href={copyrightChecklist}>here</a>.
                    </p>
                  </iframe>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sources}>
            <div className={styles.sourcesContainer}>
              <h1 className={styles.subtitle}>Sources</h1>
              <p className={styles.text}>Permission to use the images of organizations and people showcased on this website were granted to us by the respective organization or person. We contacted each organization via this email:</p>
              <div className={styles.emailContainer}>
                <p className={styles.quoteText}>
                  I am a high school student attending [school name] who is currently working on a website for an upcoming TSA (Technology Student Association) competition, and the theme/goal is to create a website showcasing a community’s resources. I wanted to ask for your permission to include a photo and description of your organization on our website.
                  If you’re comfortable with this, please let me know which photos (and optionally, description) you would prefer us to use. The photo will only be used for this competition and related judging.
                  Thank you very much for your time and consideration. Please let me know if you have any questions or concerns.
                </p>
              </div>
              <li>
                <ul> </ul>
              </li>
            </div>
          </section>
        </main>

        <Footer />
    </>
  )
}

export default References;
