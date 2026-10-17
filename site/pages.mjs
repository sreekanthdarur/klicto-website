import { SITE, page, hero, cta, section, card, img, faqLd, orgLd, appLd } from '../scripts/lib.mjs';

const P = SITE.planLine;

export const FAQ = [
  ['Does Klicto work without internet?', 'Yes, once you have signed in. You need internet for the first sign-in and for reading a photo or voice note. Creating and saving a bill by typing works offline, and your data syncs to the cloud when you are back online.'],
  ['Which languages can it read and understand?', 'Voice works in Hindi, Telugu, Tamil, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi, Odia, Urdu and English. Photos can be handwritten or printed, in English or a regional language.'],
  ['How accurate is reading from a photo or voice?', 'It is good, not perfect. Handwriting, blur and noise can cause mistakes. That is why Klicto always shows you the items and asks you to review before saving. It also re-checks the item totals against the total written on the page and tells you if they do not match.'],
  ['Which GST types does it support?', 'Regular GST, Composition and non-GST shops. It handles intra-state and inter-state bills, and you can add an optional HSN or SAC code with suggestions.'],
  ['Can it read my handwritten list?', 'Yes. Take a photo or pick one from your gallery. Klicto reads the item names, quantities and prices, and you correct anything it got wrong. It remembers your corrections for your shop.'],
  ['Can I export my data?', 'Yes, at any time and also after your free period ends. You can export itemized inventory, customer ledgers and the GST summary.'],
  ['How do I delete my account and data?', 'Delete your account from the app, or email ' + SITE.email + '. We delete your data within 30 days, except records we must keep by law. See the <a href="/data-deletion/">Data Deletion page</a>.'],
  ['Which phones does it run on?', 'Android phones. Klicto is an Android app. Write to us if you need a specific device checked.'],
  ['What are your support hours?', 'We reply 10 AM to 7 PM IST, seven days a week. Email ' + SITE.email + ' and we will get back to you in those hours.'],
  ['Can I use a thermal printer?', 'Klicto prints a 32-column thermal receipt with one line per item. Long item names wrap onto the next line instead of being cut off. You can also share the bill as a PDF.'],
  ['Can I run more than one shop?', 'Each shop keeps its own data, separate from every other shop. If you need to manage several shops, write to ' + SITE.email + ' and tell us how you work.'],
  ['Can I bring my items and customers from another tool?', 'Yes. Klicto imports items and customers, so you do not have to type your list again. Export the list from your old tool and import it.'],
  ['What happens after the 30 free days?', 'The app tells you first. You are never charged without your clear consent, and you can still export all your records. ' + P],
  ['Do I need a card to start?', 'No. Sign up and use everything free for 30 days.'],
  ['What if I enter an item twice on one bill?', 'Klicto merges duplicate items into one line and adds the quantities, so your bill stays short.'],
  ['Can I save a bill and finish it later?', 'Yes. Use Save as draft and open it again from the Drafts list. Drafts stay on your phone.'],
  ['I deleted an invoice by mistake. Can I get it back?', 'Yes. Deleted invoices go to the Bin, and you can restore them from there.'],
  ['Does Klicto file my GST returns?', 'No. Klicto helps you prepare invoices and a GST summary. You or your accountant check the numbers and file the returns. See <a href="/gst-and-compliance/">GST and compliance</a>.'],
  ['Who can see my shop data?', 'Only people who log in to your shop. Each shop is isolated from the others. We do not sell your data. See <a href="/security/">Security and data</a>.'],
];

const faqItems = (items) => items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('');

export function marketingPages() {
  const pages = [];

  // Home
  pages.push(page({
    path: '/',
    title: 'Klicto: Billing app for shops, 30 days free',
    desc: 'Make bills from a photo, your voice or typing. GST ready, works offline, Android. Start 30 days free with full access. No card needed.',
    schema: [orgLd, appLd],
    body: `<section class="hero"><div class="wrap hero-grid"><div><div class="eyebrow">Billing app for small shops in India</div><h1>Bill your customers from a photo, your voice or a few taps.</h1><p class="lead">Take a photo of your list, say the items out loud, or type them in. Check the bill, then save it, print it or share it. Klicto is an Android app made for shops that bill all day.</p><div class="actions"><a class="btn primary" href="/download/">Start 30 days free</a><a class="btn" href="/how-it-works/">See how it works</a></div><p class="caption">No card needed. Full access for 30 days. Android app.</p></div><div class="hero-art">${img('camera-bill.webp', 'Klicto on an Android phone showing items read from a handwritten grocery list, with the paper list beside it', { eager: true })}<p class="caption">Illustrative image. Sample items only.</p></div></div></section>
${section(`<ul class="stats"><li><strong>Photo, voice or typing</strong><span>Three ways to start a bill</span></li><li><strong>12 voice languages</strong><span>Hindi, Telugu, Tamil and more</span></li><li><strong>Offline first</strong><span>Keep billing without internet after sign-in</span></li></ul>`, 'tight')}
${section(`<div class="sectionhead center"><h2>What you get in the app</h2><p>Everything a counter needs, in one place.</p></div><div class="grid three">${[
  ['One screen to make a bill', 'Start from a photo, a gallery image, your voice or typing. Basket suggestions help you add the usual items quickly.'],
  ['GST that matches your shop', 'Regular, Composition or non-GST. Intra-state and inter-state bills. Optional HSN or SAC code with suggestions.'],
  ['Customers and payments', 'Cash, UPI or credit. A ledger for each customer, and the payment type is chosen when you save.'],
  ['Print and share', 'PDF, share, or a 32-column thermal receipt with one line per item.'],
  ['Reports for your day', 'Sales for today, the week and the month. Open any figure to see the invoices behind it.'],
  ['Your data stays yours', 'Import your items and customers. Export inventory and ledgers whenever you want.'],
].map(([h, p]) => card(h, p)).join('')}</div><p class="center"><a class="btn" href="/features/">See all features</a></p>`, 'soft')}
${section(`<div class="sectionhead center"><h2>How it works</h2></div><ol class="steps"><li><span class="num">1</span><h3>Add the items</h3><p>Photograph a handwritten or printed list, speak the order, or type it in.</p></li><li><span class="num">2</span><h3>Review the bill</h3><p>Klicto fills in names, quantities and prices. You fix anything that looks wrong. It always waits for you.</p></li><li><span class="num">3</span><h3>Save, print or share</h3><p>Pick cash, UPI or credit, save the invoice, and print or share it.</p></li></ol>`)}
<section class="section"><div class="wrap center"><div class="sectionhead"><div class="eyebrow">Why Klicto exists</div><h2>Built by an accountant who saw shops struggle</h2><p>Prakash Gattu spent over four decades with shop owners. At 65, he decided to build a simpler way to bill.</p><p><a class="btn" href="/our-story/">Read the story</a></p></div></div></section>`+"\n"+`<section class="section band"><div class="wrap split"><div><div class="eyebrow">The offer</div><h2>30 days free. Everything included.</h2><p>Every new user gets full access for the first 30 days. No card needed. Before the 30 days end, the app tells you what comes next. You are never charged without your clear consent, and you can still export all your records.</p><p><strong>${P}</strong></p><p><a class="btn primary" href="/download/">Start 30 days free</a></p></div><div>${img('phone.webp', 'Five Klicto app screens: home, bill draft, invoices, items and prices, and sign-in', {})}<p class="caption">Illustrative screens. Sample data only.</p></div></div></section>
${section(`<div class="sectionhead center"><h2>Common questions</h2></div><div class="faq">${faqItems(FAQ.slice(0, 5))}</div><p class="center"><a class="btn" href="/faq/">Read all questions</a></p>`, 'soft')}
${cta()}`,
  }));

  // Our story
  pages.push(page({
    path: '/our-story/',
    title: 'Our Story: Why Prakash Gattu Built Klicto',
    desc: 'Klicto began with Prakash Gattu, an accountant who saw shops struggle with handwritten bills and decided at 65 to build a simpler way.',
    body: `${hero('Our story', 'At 65, an accountant decided to simplify billing', 'Klicto started with one person who had spent years watching small shops struggle with paper bills.')}
${section(`<div class="legal"><p>For over four decades, Prakash Gattu worked closely with shop owners and businesses as an accountant. He saw the same problems again and again: handwritten bills, forgotten prices, misplaced records, and the long task of copying everything into accounts at the end of the day.</p><p>His idea was simple. A shopkeeper should be able to photograph a bill, speak an order or type a sale, and get an editable digital bill in return. The shop owner stays in charge and checks every line before it is saved.</p><p>At 65, he decided it was time to build that for every shop owner in India. That is how Klicto began.</p><blockquote class="quote">"I have seen thousands of shops struggle with manual bills and accounting. I wanted to change that for every shop owner in India."<cite>Prakash Gattu, founder</cite></blockquote><p>Experience sees the problem. Curiosity asks what can change. Klicto is built from conversations with shop owners, so each feature answers something they actually do at the counter.</p><p><a class="btn primary" href="/download/">Start 30 days free</a></p></div>`)}
${section(`<div class="storyimgs">${img('founder-portrait.webp', 'Campaign artwork: Prakash Gattu, an accountant, at his desk with stacks of paper bills and the Klicto app on a phone')}${img('founder-story.webp', 'Campaign artwork collage of Prakash Gattu working with shop owners, with the Klicto app features')}</div><p class="caption center">Illustrative campaign artwork.</p>`, 'soft')}`,
  }));
  // Features
  const group = (title, intro, items) => `<div class="featgroup"><h2>${title}</h2><p>${intro}</p><div class="grid two">${items.map(([h, b, d]) => `<div class="card"><h3>${h}</h3><p><strong>${b}</strong></p><p>${d}</p></div>`).join('')}</div></div>`;
  pages.push(page({
    path: '/features/',
    title: 'Klicto Features: Billing, GST, Ledger, Reports',
    desc: 'Photo, voice and manual billing, GST for regular, composition and non-GST shops, customer ledger, thermal receipts, reports and data export.',
    body: `${hero('Features', 'Everything for the billing counter', 'These features are in the Klicto Android app. Each one is listed with what it does for you and the detail behind it.')}
${section([
  group('Billing', 'One screen to make a bill, however you prefer to enter it.', [
    ['Four ways to start', 'Photo, gallery image, voice or typing', 'All on the same screen, so you can mix them on one bill.'],
    ['Basket suggestions', 'Add your usual items in a tap', 'Suggestions come from items you already sell.'],
    ['Quantity and price', 'Plus and minus arrows, or just type', 'Pick from a standard unit list: Kg, Ltr, Pcs, G and more.'],
    ['Exact amounts', 'Two decimals, every time', 'Amounts are strictly kept to two decimal places.'],
    ['No repeated lines', 'Duplicate items merge', 'Add rice twice and the bill shows one rice line with the total quantity.'],
    ['Amount-only sales', 'For quick sales with no items', 'Enter the amount, choose the payment type and save.'],
  ]),
  group('GST and tax', 'Set up once for your kind of shop.', [
    ['Three shop types', 'Regular, Composition and non-GST', 'The bill follows the type you choose.'],
    ['Intra-state and inter-state', 'Pick the supply type', 'GST is worked out for the type of sale.'],
    ['Tax-inclusive or exclusive', 'Choose for photo bills', 'Say whether the prices on the paper include tax.'],
    ['HSN and SAC codes', 'Optional, with suggestions', 'Add a code to an item when you want it on the invoice.'],
  ]),
  group('Reading photos and voice', 'You review everything before it is saved.', [
    ['Handwritten and printed lists', 'Photos in English or a regional language', 'Clear photos give the best result.'],
    ['Twelve voice languages', 'Hindi, Telugu, Tamil, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi, Odia, Urdu, English', 'Speak the order the way you would say it across the counter.'],
    ['Total re-check', 'Compared with the total on the page', 'If the items do not add up to the written total, you are told.'],
    ['Learns your corrections', 'Per shop', 'When you fix an item, Klicto remembers it for the next bill in your shop.'],
    ['Review before saving', 'Always', 'Nothing is saved until you confirm.'],
  ]),
  group('Customers and payments', 'Know who paid and who owes.', [
    ['Cash, UPI and credit', 'Pick when you save', 'For customers, the payment type is chosen at save time.'],
    ['Customer ledger', 'Credit sales in one place', 'See what each customer owes and what they paid.'],
  ]),
  group('Invoices', 'Find, fix and share any bill.', [
    ['History and details', 'Open any past invoice', 'Search and view the full bill.'],
    ['Edit', 'Fix a saved invoice', 'Change items or payment details when needed.'],
    ['Bin with restore', 'Deleted by mistake? Bring it back', 'Deleted invoices wait in the Bin until you restore them.'],
    ['Drafts', 'Save as draft, finish later', 'Open them from the Drafts list. Drafts stay on your phone.'],
    ['PDF and share', 'Send the bill to your customer', 'Share from the app in one step.'],
    ['Thermal receipt', '32 columns, one line per item', 'Long item names wrap to the next line so nothing is cut.'],
  ]),
  group('Reports', 'See how the shop is doing.', [
    ['Sales views', 'Today, weekly and monthly', 'Open any total to see the invoices that make it up.'],
    ['Payment split', 'Cash, UPI and credit', 'See how customers paid.'],
    ['GST summary', 'View and export', 'Hand it to your accountant.'],
  ]),
  group('Your data', 'It is your business data, so you control it.', [
    ['Import', 'Items and customers', 'Start with your existing list.'],
    ['Export', 'Itemized inventory and ledgers', 'Available any time, including after your free period.'],
    ['Cloud sync, offline first', 'Bill without internet', 'Your data syncs when you are online again.'],
    ['Separate data for each shop', 'Per-shop isolation', 'One shop never sees another shop\'s records.'],
    ['Fast login', 'Quick after the first sign-in', 'You do not wait at the counter.'],
  ]),
  group('Getting started', 'Learn the app in a few minutes.', [
    ['Demo walkthrough', 'Narrated, with auto-advance', 'A guided tour the first time you open the app.'],
  ]),
].join(''))}
${cta()}`,
  }));

  // How it works
  const flow = (n, title, intro, steps, extra = '') => `<div class="flow"><div><div class="eyebrow">Flow ${n}</div><h2>${title}</h2><p>${intro}</p><ol class="stepslist">${steps.map((s) => `<li>${s}</li>`).join('')}</ol></div><div>${extra}</div></div>`;
  pages.push(page({
    path: '/how-it-works/',
    title: 'How Klicto Works: Photo, Voice or Manual Billing',
    desc: 'Three ways to make a bill in Klicto: photograph a list, speak the order or type it in. Review every line before you save. Start 30 days free.',
    body: `${hero('How it works', 'Three ways to make a bill', 'Pick the one that suits the moment. All three end the same way: you review, then save.')}
${section(flow(1, 'From a photo', 'Good for handwritten lists, printed bills and supplier slips.', ['Open Camera bill, or pick an image from your gallery.', 'Klicto reads the items, quantities and prices.', 'It re-checks the item totals against the total written on the page.', 'Correct anything that is wrong, then save.'], `${img('handwritten.webp', 'A handwritten grocery bill beside an Android phone showing the Klicto review bill screen with 18 items', {})}<p class="caption">Illustrative image. Sample items only.</p>`))}
${section(flow(2, 'By voice', 'Good when your hands are busy and the customer is waiting.', ['Open Voice bill and say the order, for example two kilos of rice at 60 and three soaps at 40.', 'Speak in Hindi, Telugu, Tamil, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi, Odia, Urdu or English.', 'Check the items on screen and fix any mistake.', 'Choose the payment type and save.']), 'soft')}
${section(flow(3, 'By typing', 'Good for a short bill or when you want full control.', ['Open Manual bill and tap Add item, or use Basket suggestions.', 'Set quantity and price with the plus and minus arrows, or type them.', 'Pick the unit from the list: Kg, Ltr, Pcs, G and others.', 'Save, or Save as draft and finish later.'], `${img('phone.webp', 'Five Klicto app screens: home, bill draft, invoices, items and prices, and sign-in', {})}<p class="caption">Illustrative screens. Sample data only.</p>`))}
${section('<div class="sectionhead center"><h2>After you save</h2></div><div class="grid three">' + [
  ['Print or share', 'Print a 32-column thermal receipt or share a PDF with the customer.'],
  ['Find it later', 'Open invoice history, edit a bill, or restore one from the Bin.'],
  ['See the totals', 'Check today, the week and the month, split by cash, UPI and credit.'],
].map(([h, p]) => card(h, p)).join('') + '</div>', 'soft')}
${cta()}`,
  }));

  // Who it is for
  const who = [
    ['Kirana and grocery stores', 'Long lists of small items with different units. Start from a photo of the customer\'s list or say the order, then print a thermal receipt.'],
    ['Wholesalers', 'Bigger bills, regular customers and credit. Use the customer ledger and the payment split to see who owes what.'],
    ['Medical and cosmetics stores', 'Many items with GST and HSN codes. Add the code to an item once and see it on the invoice. Optional.'],
    ['Jewellery shops', 'Quick amount-only sales and saved customer records. Keep an invoice history you can search.'],
    ['Stationery and book shops', 'Many low-price items. Duplicate items merge, and Basket suggestions speed up repeat orders.'],
    ['Small service businesses', 'Repairs, tailoring, printing and similar work. Use amount-only sales or add each job as an item, and track credit by customer.'],
  ];
  pages.push(page({
    path: '/who-its-for/',
    title: 'Who Klicto Is For: Kirana, Wholesale, Medical Shops',
    desc: 'Klicto suits kirana stores, wholesalers, medical and cosmetics shops, jewellers, stationery and book shops and small service businesses.',
    body: `${hero('Who it is for', 'Made for shops that bill every day', 'If you write bills by hand or retype them at night, Klicto is meant for you.')}
${section('<div class="grid three">' + who.map(([h, p]) => card(h, p)).join('') + '</div>')}
${section('<div class="split"><div><h2>Not sure it fits your shop?</h2><p>Write to us with a line about how you bill today. We reply during support hours.</p></div><div><p><a class="btn" href="mailto:' + SITE.email + '?subject=Does%20Klicto%20fit%20my%20shop%3F">Email ' + SITE.email + '</a></p></div></div>', 'soft')}
${cta()}`,
  }));

  // GST
  pages.push(page({
    path: '/gst-and-compliance/',
    title: 'GST and Compliance: What Klicto Does and Does Not Do',
    desc: 'Klicto helps you prepare GST invoices and reports. You stay responsible for accuracy and filings. Not tax advice. Read what we cover.',
    body: `${hero('GST and compliance', 'What Klicto does and does not do', 'A plain statement, so you know where the app helps and where you are in charge.')}
${section(`<div class="grid two"><div class="card"><h2>What Klicto does</h2><ul class="checklist"><li>Helps you prepare invoices for Regular, Composition and non-GST shops.</li><li>Handles intra-state and inter-state bills.</li><li>Lets you add an optional HSN or SAC code, with suggestions.</li><li>Builds a GST summary you can view and export.</li><li>Keeps an invoice history, with edit and a Bin with restore.</li></ul></div><div class="card"><h2>What Klicto does not do</h2><ul class="checklist"><li>It does not file your GST returns.</li><li>It does not check that your GST rates or HSN and SAC codes are correct for your goods.</li><li>It does not give tax, legal or accounting advice.</li><li>It does not guarantee that anything read from a photo or voice is right. You review every bill before saving.</li></ul></div></div><div class="note"><strong>Your responsibility.</strong> You, the shop owner, are responsible for the accuracy of every invoice you issue, including prices, tax rates and codes, and for your GST filings. Ask your accountant if you are unsure.</div>`)}
${section(`<h2>Also read</h2><p><a href="/terms/">Terms of Use</a> &middot; <a href="/disclaimer/">Disclaimer</a> &middot; <a href="/privacy/">Privacy Policy</a></p>`, 'soft')}
${cta()}`,
  }));

  // Security
  pages.push(page({
    path: '/security/',
    title: 'Security and Your Data | Klicto',
    desc: 'Your data is encrypted in transit, kept separate for each shop and protected by login. Export it any time and delete your account on request.',
    body: `${hero('Security and data', 'Your shop data is yours', 'Here is what we do to protect it, and what you can do with it.')}
${section('<div class="grid three">' + [
  ['Encrypted in transit', 'Data moves between the app and our servers over an encrypted connection.'],
  ['Separate for each shop', 'Every shop\'s data is isolated. One shop cannot see another shop\'s records.'],
  ['Login-protected', 'You need to sign in to reach your shop, items, bills and reports.'],
  ['Your data is yours', 'Your invoices, items and customers belong to you. We use them only to run the app for you. We do not sell them.'],
  ['Export any time', 'Export itemized inventory and ledgers whenever you want, including after the free period.'],
  ['Delete on request', 'Delete your account in the app or email us. Your data is deleted within 30 days, except records we must keep by law.'],
].map(([h, p]) => card(h, p)).join('') + '</div>')}
${section(`<div class="split"><div><h2>Where your data is stored</h2><p>Your data is stored in the cloud so it syncs across your devices and is not lost if you lose your phone. We store it only with your consent. We do not share your business data with any other party for their own use.</p><p>Drafts are kept on your phone only. Uninstalling the app or clearing its data removes them.</p></div><div><h2>Read the details</h2><p>The <a href="/privacy/">Privacy Policy</a> explains what we collect, why, and your rights. To report a concern, see <a href="/grievance-redressal/">Grievance Redressal</a>.</p></div></div>`, 'soft')}
${cta()}`,
  }));

  // Pricing
  pages.push(page({
    path: '/pricing/',
    title: 'Pricing and Free Trial: 30 Days Free | Klicto',
    desc: 'Every new user gets 30 days of full access free. No card needed. We tell you in the app before it ends and never charge without your consent.',
    body: `${hero('Pricing and free trial', '30 days free, with everything included', 'No card needed. Start billing today.')}
${section(`<div class="grid two"><div class="card pricecard"><h2>Free for 30 days</h2><p class="price">₹0</p><ul class="checklist"><li>Billing by photo, gallery image, voice and typing</li><li>GST for Regular, Composition and non-GST shops</li><li>Customer ledger and payment types</li><li>Invoice history, drafts and Bin</li><li>PDF, share and thermal receipt</li><li>Reports, import and export</li></ul><p><a class="btn primary" href="/download/">Start 30 days free</a></p></div><div class="card"><h2>After day 30</h2><ul class="checklist"><li>The app tells you first, before anything changes.</li><li>You are never charged without your clear consent.</li><li>You can still export all your records.</li></ul><p><strong>${P}</strong></p><p>See the <a href="/refund-and-cancellation/">Refund and Cancellation</a> page.</p></div></div>`)}
${section(`<div class="sectionhead center"><h2>Pricing questions</h2></div><div class="faq">${faqItems(FAQ.filter(([q]) => /30 free|card to start/.test(q)))}</div>`, 'soft')}
${cta()}`,
  }));

  // FAQ
  pages.push(page({
    path: '/faq/',
    title: 'Klicto FAQ: Offline, GST, Languages, Export',
    desc: 'Answers on offline use, languages, accuracy, GST types, handwriting, export, data deletion, devices, support hours and thermal printers.',
    schema: [faqLd(FAQ)],
    body: `${hero('FAQ', 'Questions shop owners ask', 'Cannot find your answer? Email ' + SITE.email + '.')}
${section(`<div class="faq">${faqItems(FAQ)}</div>`)}
${cta()}`,
  }));

  // Contact
  const mail = (s) => `mailto:${SITE.email}?subject=${encodeURIComponent(s)}`;
  pages.push(page({
    path: '/contact/',
    title: 'Contact and Support | Klicto',
    desc: 'Email Klicto support at info@klicto.in. We reply 10 AM to 7 PM IST, seven days a week. Find our address and grievance officer.',
    schema: [orgLd],
    body: `${hero('Contact and support', 'We are here to help', 'Write to us and a person will reply.')}
${section(`<div class="grid two"><div class="card"><h2>Email support</h2><p><a class="btn primary" href="${mail('Klicto support')}">${SITE.email}</a></p><p>Support hours: ${SITE.hours}. We reply to every message in these hours.</p><p>Phone and WhatsApp support are coming soon. Until then, email is the best way to reach us.</p></div><div class="card"><h2>Who we are</h2><p>Klicto is operated by ${SITE.operator}.</p><p>Address: ${SITE.address}</p></div><div class="card"><h2>Grievance officer</h2><p>${SITE.operator}<br><a href="mailto:${SITE.email}">${SITE.email}</a></p><p>See <a href="/grievance-redressal/">Grievance Redressal</a> for how we handle complaints and the time we take.</p></div><div class="card"><h2>Delete your data</h2><p>Use the Delete account option in the app, or email us. We delete within 30 days.</p><p><a href="/data-deletion/">Data Deletion</a></p></div></div>`)}
${section(`<h2>Tell us what you need</h2><p>These links open your email app with the subject filled in.</p><p class="actions"><a class="btn" href="${mail('Help with my account')}">Help with my account</a><a class="btn" href="${mail('Question about GST in Klicto')}">GST question</a><a class="btn" href="${mail('Feature request')}">Suggest a feature</a></p>`, 'soft')}`,
  }));

  // Download
  pages.push(page({
    path: '/download/',
    title: 'Download Klicto for Android: 30 Days Free',
    desc: 'Get the Klicto Android billing app. Start with 30 days of full access, no card needed. Request your install by email.',
    schema: [appLd],
    body: `${hero('Download', 'Get Klicto on your Android phone', 'Start with 30 days of full access. No card needed.')}
${section(`<div class="split"><div><h2>How to get the app</h2><ol class="stepslist"><li>Send us a short email using the button below. Tell us your shop name.</li><li>We reply during support hours with your install link.</li><li>Install, sign in and follow the demo walkthrough.</li></ol><p><a class="btn primary" href="${mail('Start 30 days free')}">Email to start 30 days free</a></p><p class="caption">Klicto is an Android app. The Google Play listing is not live yet, so we share the install link by email.</p></div><div>${img('phone.webp', 'Five Klicto app screens: home, bill draft, invoices, items and prices, and sign-in', {})}<p class="caption">Illustrative screens. Sample data only.</p></div></div>`)}
${section(`<div class="grid three">${[
  ['30 days free', 'Full access from the first day. No card needed.'],
  ['Photo, voice or typing', 'Choose how you start every bill.'],
  ['Export any time', 'Your records stay yours, including after the free period.'],
].map(([h, p]) => card(h, p)).join('')}</div><p class="center caption">${P}</p>`, 'soft')}`,
  }));

  return pages;
}

export function notFound() {
  return page({
    path: '/404.html',
    title: 'Page not found | Klicto',
    desc: 'This page does not exist. Go to the Klicto home page or contact support.',
    noindex: true,
    body: `${hero('Error 404', 'We could not find that page', 'The link may be old or mistyped.')}${section('<p class="actions"><a class="btn primary" href="/">Go to home</a><a class="btn" href="/contact/">Contact support</a></p>')}`,
  });
}
