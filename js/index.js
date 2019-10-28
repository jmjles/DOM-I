const siteContent = {
  "nav": [
    "Services",
    "Product",
    "Vision",
    "Features",
    "About",
    "Contact",
  ],
  'logo':"img/logo.png",
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Nav
for(i=0;i<siteContent["nav"].length;i++){
  let el = document.querySelector(`nav a:nth-child(${i+1})`);
  el.textContent=siteContent["nav"][i];
}

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["logo"]);

//CTA
const cta = document.querySelector('.cta');
cta.querySelector('.cta-text h1').textContent = siteContent['cta']['h1'];
cta.querySelector('.cta-text button').textContent = siteContent['cta']['button']
cta.querySelector('#cta-img').setAttribute('src', siteContent['cta']['img-src']);


//Main Content
const main = document.querySelector('.main-content');
const topc = main.querySelector('.top-content');
topc.querySelector('.text-content h4').textContent = siteContent['main-content']['features-h4'];
topc.querySelector('.text-content p').textContent = siteContent['main-content']['features-content'];

topc.querySelector('.text-content:nth-child(2) h4').textContent = siteContent['main-content']['about-h4'];
topc.querySelector('.text-content:nth-child(2) p').textContent = siteContent['main-content']['about-content'];

main.querySelector('.middle-img').setAttribute('src', siteContent['main-content']['middle-img-src'])

const bottom = main.querySelector('.bottom-content');

bottom.querySelector('.text-content h4').textContent = siteContent['main-content']['services-h4'];
bottom.querySelector('.text-content p').textContent = siteContent['main-content']['services-content'];

bottom.querySelector('.text-content:nth-child(2) h4').textContent = siteContent['main-content']['product-h4'];
bottom.querySelector('.text-content:nth-child(2) p').textContent = siteContent['main-content']['product-content'];

bottom.querySelector('.text-content:nth-child(3) h4').textContent = siteContent['main-content']['vision-h4'];
bottom.querySelector('.text-content:nth-child(3) p').textContent = siteContent['main-content']['vision-content'];

//Contact
const contact = document.querySelector('.contact');
contact.querySelector('h4').textContent = siteContent.contact['contact-h4'];
contact.querySelector('p:nth-child(2)').textContent = siteContent.contact.address;
contact.querySelector('p:nth-child(3)').textContent = siteContent.contact.phone;
contact.querySelector('p:nth-child(4)').textContent = siteContent.contact.email;

//Footer
document.querySelector('footer p').textContent = siteContent.footer.copyright