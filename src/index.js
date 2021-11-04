const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.API_KEY);

async function sendEmail(email, subject, title, body, button_text, button_url) {
  dynamicTemplateData = { subject, title, body, button_text, button_url };
  return sgMail.send({
    to: email,
    from: {
      email: "noreply@beulr.com",
      name: "Beulr",
    },
    templateId: "d-482e1212f6d746a1a15f296d5008c72d",
    dynamicTemplateData,
  });
}

async function main(emlz) {
  emlz.forEach(async (eml) => {
    await sendEmail(
      eml,
      "Thingie Subject",
      "Thingie Title",
      "id:2021-11-04-15:53:43:385t body",
      "button",
      "https://beulr.com"
    );
  });
}

emlz = [
  "ipm2h2w@glockapps.com",
  "allanb@glockapps.awsapps.com",
  "markb@glockapps.awsapps.com",
  "ingridmejiasri@aol.com",
  "caseywrighde@aol.de",
  "baileehinesfr@aol.fr",
  "brendarodgersuk@aol.co.uk",
  "franprohaska@aol.com",
  "garrettjacqueline@aol.com",
  "leannamccoybr@aol.com",
  "bcc@spamcombat.com",
  "chazb@userflowhq.com",
  "stevebarrydr@fastmail.com",
  "carloscohenm@freenet.de",
  "verify79@buyemailsoftware.com",
  "janefergusone@gmail.com",
  "llionelcohenbr@gmail.com",
  "bbarretthenryhe@gmail.com",
  "joanyedonald@gmail.com",
  "wandammorrison@gmail.com",
  "lawrenceleddylr@gmail.com",
  "alisonnlawrence@gmail.com",
  "tinamallahancr@gmail.com",
  "louiepettydr@gmail.com",
  "lenorebayerd@gmail.com",
  "cierawilliamsonwq@gmail.com",
  "silviacopelandqy@gmail.com",
  "daishacorwingx@gmail.com",
  "verifycom79@gmx.com",
  "verifyde79@gmx.de",
  "gd@desktopemail.com",
  "jpatton@fastdirectorysubmitter.com",
  "frankiebeckerp@hotmail.com",
  "yadiraalfordbj@hotmail.com",
  "sgorska12@interia.pl",
  "layneguerreropm@laposte.net",
  "britnigrahamap@laposte.net",
  "amandoteo79@libero.it",
  "glocktest@vendasrd.com.br",
  "b2bdeliver79@mail.com",
  "verifymailru79@mail.ru",
  "verify79ssl@netcourrier.com",
  "nsallan@expertarticles.com",
  "exosf@glockeasymail.com",
  "brendonosbornx@outlook.com",
  "tristonreevestge@outlook.com.br",
  "brittanyrocha@outlook.de",
  "glencabrera@outlook.fr",
  "christopherfranklinhk@outlook.com",
  "kaceybentleyerp@outlook.com",
  "meaghanwittevx@outlook.com",
  "aileenjamesua@outlook.com",
  "shannongreerf@outlook.com",
  "gabrielharberh@outlook.com",
  "candidobashirian@outlook.com",
  "vincenzaeffertz@outlook.com",
  "verify79@seznam.cz",
  "sa79@justlan.com",
  "glocktest@twcmail.de",
  "amandoteo79@virgilio.it",
  "verify79@web.de",
  "sebastianalvarezv@yahoo.com.br",
  "verifyca79@yahoo.ca",
  "justynbenton@yahoo.com",
  "emiliaplm@yahoo.com",
  "testiotestiko@yahoo.co.uk",
  "emailtester493@yahoo.com",
  "loganbridgesrk@yahoo.com",
  "rogertoddw@yahoo.com",
  "darianhuffg@yahoo.com",
  "andreablackburn@yandex.ru",
  "verifynewssl@zoho.com",
  "lamb@glockdb.com",
];

main(emlz);
