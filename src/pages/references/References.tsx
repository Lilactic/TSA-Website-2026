import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import '../../global.css'
import styles from './References.module.css'
import copyrightChecklist from '../../assets/documents/copyrightChecklist.pdf'
import workLog from '../../assets/documents/workLog.pdf'

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
          <section className={styles.references}>
            <div className={styles.pdfsContainer}>
              <div className={styles.pdfSubcontainer}>
                <h1 className={styles.refSubtitle}>Work Log</h1>
                <div className={styles.pdfViewerContainer}>
                  <iframe className={styles.pdfViewer} src={workLog} width="100%" height="500px" title="Student Copyright Checklist">
                    <p>Your browser does not support iframes. You can download the PDF
                      <a href={copyrightChecklist}>here</a>.
                    </p>
                  </iframe>
                </div>
              </div>
              <div className={styles.pdfSubcontainer}>
                <h1 className={styles.refSubtitle}>Student Copyright Checklist</h1>
                <div className={styles.pdfViewerContainer}>
                  <iframe className={styles.pdfViewer} src={copyrightChecklist} title="Student Copyright Checklist">
                    <p>Your browser does not support iframes. You can download the PDF
                      <a href={copyrightChecklist}>here</a>.
                    </p>
                  </iframe>
                </div>
              </div>
            </div>

            <div className={styles.permsContainer}>
              <h1 className={styles.refSubtitle}>Image Permissions</h1>
              <p className={styles.text}>All images displayed on this website either use the Creative Commons Attribution-Sharealike license, use the Unsplash license, are in the public domain, or are used with explicit permission. Permission to use images of organizations and individuals has been granted by the respective organization or individual. Each organization was contacted via this email:</p>
              <div className={styles.emailContainer}>
                <p className={styles.quoteText}>
                  I am a high school student attending [school name] who is currently working on a website for an upcoming TSA (Technology Student Association) competition, and the theme/goal is to create a website showcasing a community’s resources. I wanted to ask for your permission to include a photo and description of your organization on our website.
                  If you’re comfortable with this, please let me know which photos (and optionally, description) you would prefer us to use. The photo will only be used for this competition and related judging.
                  Thank you very much for your time and consideration. Please let me know if you have any questions or concerns.
                </p>
              </div>
              <p className={styles.text}>And several responded with the following:</p>

              <div className={styles.emailContainer}>
                <p className={styles.quoteText}>
                  Yes, that’s fine, thanks! Good luck on your project!<br /><br />Three Little Pitties Rescue
                </p>
              </div>

              <div className={styles.emailContainer}>
                <p className={styles.quoteText}>
                  We do not have a location yet, but you can use Dr. Jackie Brown's photo from WABF below, and note that she had been a presenter there on her research of cyberbullying in prior years for the World Anti-Bullying Forum. You are also welcome to use the picture of Jackie and I, at the WABF this past June, from our first newsletter in October 2025, on our website. Again, thank you for including us in your website design for the TSA competition. We are grateful for your support!
                  <br/><br/>Plus3forcybersafety.org  
                </p>
              </div>

              <div className={styles.emailContainer}>
                <p className={styles.quoteText}>
                  Good luck on your project. You can use any photo you like of the library as it is a public building. I’ve included one from our website. You can use our Mission Statement or whatever description you like.
                  <br/><br/>Friendswood Public Library 
                </p>
              </div>

              <div className={styles.emailContainer}>
                <p className={styles.quoteText}>
                  We would be pleased for you to include a description and photo of The Shepherd's Nook in your project. I have attached our mission statement in addition to a description. I don't know that you would need it, but I thought it might be of interest to you. I will take an up-to-date photo today to send to you.
                  <br/><br/>The Shepherd's Nook 
                </p>
              </div>
            </div>
  
            <div className={styles.sourcesContainer}>
              <h1 className={styles.refSubtitle}>Sources</h1>
              <p className={styles.quoteText}>"Therapy Room at Resilient Mind Therapies, Leicester" by RMtherapies is licensed under CC BY-SA 4.0. To view a copy of this license, visit <span className={styles.linkText}>https://creativecommons.org/licenses/by-sa/4.0/?ref=openverse.</span></p>
              <p className={styles.quoteText}>"Birthday Cake" by Will Clayton is licensed under CC BY 2.0. To view a copy of this license, visit <span className={styles.linkText}>https://creativecommons.org/licenses/by/2.0/?ref=openverse.</span></p>
              <p className={styles.quoteText}>"Nashville's Dog Park" by SeeMidTN.com (aka Brent) is licensed under CC BY 2.0. To view a copy of this license, visit <span className={styles.linkText}>https://creativecommons.org/licenses/by/2.0/?ref=openverse.</span></p>
              <p className={styles.linkText}>https://unsplash.com/photos/people-playing-soccer-on-green-grass-field-during-daytime-vJDbPuxUS_s?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/orange-biplane-9gW_sOssTRw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/photo-of-two-man-and-one-woman-standing-near-tree-GM5Yn5XRVqA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/a-person-sitting-in-a-chair-with-a-microphone-in-front-of-a-group-of-people-FK70wR_MAug?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/boy-in-green-sweater-writing-on-white-paper-GDokEYnOfnE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/brown-wooden-fence-near-green-trees-during-daytime-RzFqGKMT_LY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/person-holding-belly-photo-NIZeg731LxM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/a-woman-sitting-on-a-couch-talking-to-another-woman-RqR2pnTpmHA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/child-sitting-on-bed-yg1Zayn0Few?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/white-and-blue-plastic-packs-WXnBzI7AypY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/man-in-red-t-shirt-holding-white-plastic-bottle-Cns0h4ypRyA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/green-and-white-labeled-plastic-bottle-on-brown-wooden-shelf-liOAS02GnfY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/person-in-red-sweater-holding-babys-hand-Zyx1bK9mqmA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/people-playing-baseball-on-field-during-daytime-bOU3de50BHk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/a-baseball-field-with-a-dirt-base-and-grass-y4iEE6J1R88?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/black-metal-bench-near-green-leaf-tree-during-daytime-eydQ76ieKro?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
              <p className={styles.linkText}>https://unsplash.com/photos/man-in-gray-hoodie-and-black-pants-sitting-on-black-and-gray-stroller-during-daytime-W5BN80xGhrE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink</p>
            </div>
          </section>
        </main>

        <Footer />
    </>
  )
}

export default References;
