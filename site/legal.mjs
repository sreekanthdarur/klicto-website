import { SITE, legalPage } from '../scripts/lib.mjs';

const OP = `${SITE.operator}, an individual trading as Klicto, of ${SITE.address}`;
const MAIL = `<a href="mailto:${SITE.email}">${SITE.email}</a>`;
const P = SITE.planLine;
const ul = (a) => `<ul>${a.map((x) => `<li>${x}</li>`).join('')}</ul>`;

export function legalPages() {
  const out = [];

  out.push(legalPage('/terms/', 'Terms of Use',
    'The terms for using the Klicto billing app and website: eligibility, 30-day free access, your data, tax responsibility, liability and Indian law.',
    `These terms are a contract between you and ${OP}. Please read them before you use the Klicto app or this website.`,
    [
      ['Who we are', `<p>Klicto is a billing app for small shops, operated by ${OP} ("we", "us"). "You" means the person or business using Klicto. You can reach us at ${MAIL}.</p>`],
      ['Accepting these terms', '<p>By creating an account or using Klicto you accept these terms and the <a href="/privacy/">Privacy Policy</a>. If you do not accept them, do not use Klicto.</p>'],
      ['Eligibility', '<p>You must be at least 18 years old and able to enter a binding contract under Indian law. If you use Klicto for a business, you confirm you can act for that business.</p>'],
      ['Your account', '<p>Give correct shop details and keep them up to date. Keep your login secure. You are responsible for all activity under your account. Tell us at once if you think someone else has used it.</p>'],
      ['30 days free access', `<p>New accounts get full access free for 30 days from sign-up. No card is needed. Before the period ends we tell you in the app what happens next. We will not charge you without your clear consent. After the period, your invoices and records stay available for export. ${P}</p>`],
      ['Your data', '<p>Your invoices, items and customers belong to you. You give us permission to store, sync and process them only to run Klicto for you. You can export your data at any time and delete your account in the app. See the <a href="/data-deletion/">Data Deletion</a> page.</p>'],
      ['Billing and tax responsibility', '<p>Klicto helps you prepare invoices, GST details and reports. You are responsible for the correctness of what you issue, including prices, GST rates, HSN and SAC codes, and your GST filings. Klicto does not file returns for you and does not give tax, legal or accounting advice.</p>'],
      ['Photos, voice and reading limits', '<p>Items read from a photo or voice can contain mistakes. Review every line before you save. How we handle photos and voice recordings is described in the <a href="/privacy/">Privacy Policy</a>.</p>'],
      ['Bin and drafts', '<p>Deleted invoices move to the Bin and can be restored. Drafts are stored on your device only. Uninstalling the app or clearing its data removes drafts.</p>'],
      ['Acceptable use', '<p>You must follow our <a href="/acceptable-use/">Acceptable Use</a> rules. In short: no unlawful or fraudulent invoices, no attacks on the service, and no copying or reselling it.</p>'],
      ['Availability', '<p>We work to keep Klicto reliable, but we cannot promise it will never be interrupted. We may change or improve features over time.</p>'],
      ['Limit of liability', '<p>To the extent the law allows, our total liability to you for any claim is limited to the amount you paid us in the 12 months before the claim. If you paid nothing, it is limited to ₹1,000. We are not liable for indirect loss such as lost profit or lost business. Nothing in these terms limits liability that the law does not allow us to limit.</p>'],
      ['Ending use', '<p>You may stop using Klicto at any time and delete your account. We may suspend or close accounts that break these terms, after notice where possible.</p>'],
      ['Governing law and disputes', `<p>Indian law applies to these terms. Courts at ${SITE.jurisdiction} have jurisdiction, subject to any rights you have under consumer protection law.</p>`],
      ['Changes to these terms', '<p>We will give notice in the app for material changes. If you keep using Klicto after the effective date of a change, you accept it.</p>'],
      ['Contact', `<p>${OP}. Email ${MAIL}. Support hours: ${SITE.hours}.</p>`],
    ]));

  out.push(legalPage('/privacy/', 'Privacy Policy',
    'How Klicto collects, uses, shares and deletes personal data under the DPDP Act 2023, the IT Act 2000 and SPDI Rules, and how to use your rights.',
    `This policy explains how ${OP} ("we", "us") handles personal data when you use the Klicto app and this website. It follows the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000 and the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.`,
    [
      ['Who is responsible', `<p>${OP}, is the Data Fiduciary for your personal data. Contact the Grievance Officer at ${MAIL}.</p>`],
      ['What we collect', ul([
        'Account details: your name, email or phone number, shop name, GSTIN and address.',
        'Business records you create: invoices, items, prices, customers and their payment type.',
        'Photos and voice recordings that you choose to process to read items.',
        'Device and error information, used to fix problems and keep the service secure.',
        'Messages you send to us, such as support emails.',
      ])],
      ['Why we use it', ul([
        'To run billing and give you your invoices, ledgers and reports.',
        'To sync your data across your devices.',
        'To prepare GST summaries.',
        'To read items from photos and voice, when you ask.',
        'To give support, keep the service secure and meet legal duties.',
      ]) + '<p>We do not use your data to build advertising profiles.</p>'],
      ['Legal basis: your consent', '<p>We process your personal data on the basis of your consent. The app asks for your consent when you first use it. It asks separately before any photo or voice recording is sent for reading. You can withdraw consent at any time. Withdrawing may stop some features from working. Withdrawal does not affect what we did before you withdrew.</p>'],
      ['Photos and voice: third-party recognition provider', '<p>When you choose to read items from a photo or voice, the photo or recording is sent over an encrypted connection to our server and to a third-party recognition provider. The provider processes it only to read the items and return the result to us. Recordings are not kept after processing. Corrections you confirm are stored in your shop to improve suggestions for your shop. If you do not want this, do not use the photo or voice features. You can still bill by typing.</p>'],
      ['Who we share data with', '<p>We do not sell your data. We share it only with service providers who help us run Klicto, under duties to protect it: a cloud hosting and database provider, the recognition provider described above, and an email delivery provider. We may also disclose data if the law or a court requires it.</p><p>Your data is stored in the cloud with your consent so that it syncs and is not lost if your phone is lost. We do not give your business data to any other party for their own use.</p>'],
      ['Cross-border processing', '<p>Our service providers may process data on servers outside India. When they do, we require them to protect it, and we transfer it only as the law allows.</p>'],
      ['Security', '<p>Data is encrypted in transit. Access is controlled by login. Each shop\'s data is kept separate from other shops. No system is perfectly secure, so please protect your login. See <a href="/security/">Security and data</a>.</p>'],
      ['How long we keep data', '<p>We keep your data while your account is active. After you ask us to delete your account, we delete your data within 30 days, except records we must keep by law. Drafts live on your device and are removed when you clear the app data or uninstall.</p>'],
      ['Your rights', ul([
        'Access: ask for a summary of the personal data we hold about you.',
        'Correction: ask us to fix or complete your data.',
        'Erasure: ask us to delete your data. See <a href="/data-deletion/">Data Deletion</a>.',
        'Grievance: complain to our Grievance Officer. See <a href="/grievance-redressal/">Grievance Redressal</a>.',
        'Nominate: name a person who can use your rights if you die or cannot act.',
        'Withdraw consent at any time.',
      ]) + `<p>Email ${MAIL} to use any of these rights. If we cannot resolve your complaint, you may approach the Data Protection Board of India when it is operational, as the Act provides.</p>`],
      ['Children', '<p>Klicto is for people aged 18 and over. We do not knowingly collect data from children. If you think a child has given us data, email us and we will delete it.</p>'],
      ['If there is a data breach', '<p>If a breach affects your personal data, we will tell you and the Data Protection Board of India as the law requires.</p>'],
      ['Website visitors', '<p>This website does not use analytics or advertising tools and does not set cookies. See the <a href="/cookie-policy/">Cookie Policy</a>. If you email us, we keep your message and our reply to help you.</p>'],
      ['Changes to this policy', '<p>We will give notice in the app for material changes. The date at the top shows when this page was last updated.</p>'],
      ['Contact', `<p>Grievance Officer: ${SITE.operator}, ${SITE.address}. Email ${MAIL}. Support hours: ${SITE.hours}.</p>`],
    ]));

  out.push(legalPage('/refund-and-cancellation/', 'Refund and Cancellation',
    'Klicto is free for the first 30 days, so no refund applies. Read how cancellation works and what applies to future paid plans.',
    'This page explains refunds and cancellation for Klicto.',
    [
      ['Free period', `<p>Every new user gets full access free for the first 30 days. No card is needed and nothing is charged, so no refund applies to this period. ${P}</p>`],
      ['Cancelling', '<p>You can stop using Klicto at any time. To close your account and delete your data, see <a href="/data-deletion/">Data Deletion</a>. You can export your records before you leave.</p>'],
      ['Future paid plans', '<p>Before any paid plan applies to you, the app will tell you the price and what it includes, and we will ask for your clear consent. You will not be charged without it. We will publish the refund terms for a paid plan before it starts, and those terms will apply to that plan. Nothing on this page limits any refund right you have under Indian consumer law.</p>'],
      ['Questions', `<p>Write to ${MAIL}. We reply in support hours: ${SITE.hours}.</p>`],
    ]));

  out.push(legalPage('/acceptable-use/', 'Acceptable Use Policy',
    'Rules for using Klicto: no unlawful or fraudulent invoices, no attacks on the service, no copying or reselling, and what happens if rules are broken.',
    'These rules keep Klicto safe and fair for every shop that uses it.',
    [
      ['What you must not do', ul([
        'Create invoices that are unlawful, false or meant to cheat tax authorities or customers.',
        'Use Klicto to break any law that applies to you.',
        'Attack, overload, probe or try to break into the service or another shop\'s data.',
        'Use another person\'s account without permission.',
        'Copy, reverse engineer, resell or rent out Klicto.',
        'Upload malicious files, or photos and recordings you have no right to use.',
        'Use automated tools to scrape or flood the service.',
      ])],
      ['If rules are broken', '<p>We may warn you, limit features, or suspend or close the account, after notice where possible. If the law requires, we may report the matter to the authorities.</p>'],
      ['Report a problem', `<p>If you see misuse, email ${MAIL}.</p>`],
    ]));

  out.push(legalPage('/data-deletion/', 'Data Deletion',
    'How to delete your Klicto account and data from the app or by email, what is deleted within 30 days and what we must keep by law.',
    'You can ask us to delete your account and data at any time.',
    [
      ['Delete in the app', '<p>Open More in the app and choose Delete my account and data. Follow the steps to confirm.</p>'],
      ['Delete by email', `<p>If you cannot open the app, email ${MAIL} from the email address linked to your account, with the subject "Delete my Klicto account". We may ask you to confirm it is you.</p>`],
      ['What happens', ul([
        'We delete your account and your business records, including invoices, items and customers, within 30 days.',
        'We remove photos and recordings you sent for reading, if any remain.',
        'Backups are overwritten in the normal cycle.',
      ])],
      ['What we may keep', '<p>We keep only records that the law requires us to keep, for the period the law requires, and nothing more.</p>'],
      ['Before you delete', '<p>Export your invoices, itemized inventory and ledgers first. Deleted data cannot be restored after the 30 days.</p>'],
      ['Drafts on your phone', '<p>Drafts are stored on your phone only. Clearing the app data or uninstalling Klicto removes them.</p>'],
    ]));

  out.push(legalPage('/grievance-redressal/', 'Grievance Redressal',
    'Contact the Klicto Grievance Officer to complain about your data or the service. Find how we acknowledge and resolve complaints and our timelines.',
    'If you have a complaint about your personal data, the app or the website, tell us. We will deal with it.',
    [
      ['Grievance Officer', `<p>Name: ${SITE.operator}<br>Address: ${SITE.address}<br>Email: ${MAIL}<br>Available: ${SITE.hours}</p>`],
      ['How to complain', '<p>Email the Grievance Officer with your name, the email or phone linked to your account, and a clear description of the problem. Attach screenshots if they help.</p>'],
      ['Our timelines', '<p>We acknowledge your complaint within 24 hours of the start of the next support hour. We aim to resolve it within 15 days of receiving it, and we tell you the outcome in writing.</p>'],
      ['If you are not satisfied', '<p>You can approach the Data Protection Board of India for matters under the Digital Personal Data Protection Act, 2023, once the Board is operational, or any other authority that the law allows.</p>'],
    ]));

  out.push(legalPage('/cookie-policy/', 'Cookie Policy',
    'This Klicto website sets no cookies and uses no analytics or advertising tools. Read what we use and what happens if that changes.',
    'This page tells you what the klicto.in website stores in your browser.',
    [
      ['Our use of cookies', '<p>This website does not set cookies. It does not use analytics, advertising or tracking tools. Because of that, there is no cookie banner.</p>'],
      ['If this changes', '<p>If we add analytics or any cookie that is not strictly needed, we will update this page first and ask for your consent before it is used.</p>'],
      ['The app', '<p>The Klicto app is not a website and does not use browser cookies. See the <a href="/privacy/">Privacy Policy</a> for how the app handles data.</p>'],
    ]));

  out.push(legalPage('/disclaimer/', 'Disclaimer',
    'Klicto helps prepare invoices and reports but is not tax, legal or accounting advice. You are responsible for accuracy and filings. Read the full disclaimer.',
    'Please read this page together with the Terms of Use.',
    [
      ['Not tax or legal advice', '<p>Klicto and this website give general tools and information. They are not tax, legal or accounting advice. Talk to a qualified professional about your situation.</p>'],
      ['You check the output', '<p>You are responsible for the accuracy of every invoice and report you create or share, including prices, GST rates, HSN and SAC codes, and your GST filings. Items read from photos or voice can contain mistakes, so review each bill before you save it.</p>'],
      ['No government approval implied', '<p>Klicto is a private product. Nothing here says that a government body has approved or endorsed it.</p>'],
      ['Illustrative images', '<p>Photos and screens on this website are illustrations with sample data. They are not real customer data.</p>'],
      ['Third-party links', '<p>If this website links to other sites, we do not control them and are not responsible for their content.</p>'],
      ['Availability and liability', '<p>We try to keep Klicto available and correct, but we do not promise it will be error-free or always on. Our liability is limited as set out in the <a href="/terms/">Terms of Use</a>.</p>'],
    ]));

  return out;
}
