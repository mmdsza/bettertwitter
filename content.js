const rules = [
    {
      id: 1,
      priority: 1,
      condition: {
        regexFilter: "^https?://(www\\.)?twitter\\.com(/.*)?$",
      },
      selectors: [
        "aside[aria-label='Expiring soon!']",
        "a[href='/i/grok'][aria-label='Grok']",
        "a[href='/i/jobs'][aria-label='Jobs']",
        "a[href='/i/premium_sign_up'][aria-label='Premium']"]// Customize this selector
    },
    {
      id: 2,
      priority: 1,
      condition: {
        regexFilter: "^https?://(www\\.)?x\\.com(/.*)?$",
      },
      selectors: [
        "aside[aria-label='Expiring soon!']",
        "a[href='/i/grok'][aria-label='Grok']",
        "a[href='/i/jobs'][aria-label='Jobs']",
        "a[href='/i/premium_sign_up'][aria-label='Premium']"]// Customize this selector
    }
  ];
  
  function removeElements() {
    const currentUrl = window.location.href;
    
    rules.forEach(rule => {
      const regex = new RegExp(rule.condition.regexFilter);
      if (regex.test(currentUrl)) {
        rule.selectors.forEach(selector => {
          const elementsToRemove = document.querySelectorAll(selector);
          elementsToRemove.forEach(element => {
            element.remove();
            console.log(`Removed element matching selector: ${selector}`);
          });
        });
      }
    });
  }
  
  // Run when the page loads
  removeElements();
  
  // Also run on dynamic content changes
  const observer = new MutationObserver(removeElements);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });