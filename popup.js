const emailTemplates = {
    carrierInactive: {
      subject: 'Carrier *carrier code* is inactive',
      body: 'Good morning team,\n\nCan you make them active please?'
    },
    customerInactive: {
      subject: 'Customer *customer code or MC#* is inactive',
      body: 'Good morning,\n\nChecking why this customer is inactive and is there any chance we can fix it? Thank you in advance.'
    },
    noWMCode: {
      subject: 'Customer *customer code or MC#*',
      body: 'Good morning, \n\nChecking to see if it\'s possible to create a WM code for the existing customer? Thank you in advance.'

    },
    creditLimitOver: {
      subject: 'Customer *customer code or MC#* credit limit',
      body: 'Good morning, \n\nChecking if you can increase the customer\'s credit limit to $*desirable digit*? Thank you in advance.'}

  };
  
  function sendEmail(templateKey) {
    const recipient = 'mykola.herasymoff@gmail.com';
    const { subject, body } = emailTemplates[templateKey];
  
    const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    chrome.tabs.create({ url: gmailComposeUrl }, (tab) => {
      console.log(`New Gmail compose window opened for ${templateKey}`);
    });
  }
  
  document.getElementById('carrierInactive').addEventListener('click', () => sendEmail('carrierInactive'));
  document.getElementById('customerInactive').addEventListener('click', () => sendEmail('customerInactive'));
  document.getElementById('noWMCode').addEventListener('click', () => sendEmail('noWMCode'));
  document.getElementById('creditLimitOver').addEventListener('click', () => sendEmail('creditLimitOver'));
  