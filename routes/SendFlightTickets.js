const nodemailer = require("nodemailer");
const express = require("express");

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "reservations@touron.in",
    pass: process.env.EMAIL_PASS,
  },
});

const sendmail = (name, email, cc, attachment, onwardDate, res) => {
  const pdfs = attachment?.map((a) => {
    return {
      filename: a.filename,
      path: a.path,
    };
  });

  const mailOptions = {
    from: "reservations@touron.in",
    to: email,
    cc: cc,
    Date: "Wed, 25 Aug 2021 12:24:49 +0530",
    subject: `Hurray! Flights are Booked !!`,
    attachments: pdfs,
    html: `<body style="margin: 0; padding: 0;"> 
      <p>Dear ${name}<p>
<p>We have completed booking your flight tickets<p>
<p>
Your journey starts on ${onwardDate} <p>
<p>Please find the attached flight tickets <p>

<div style="font-family: Lato; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal;  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
    <div style="font-size: 10pt; font-family: Verdana, Arial, Helvetica, sans-serif;">
        <div style="font-family: Lato; font-size: 14px;">
            <div style="font-size: 10pt; font-family: Verdana, Arial, Helvetica, sans-serif;"><span class="x_977107523size" style="font-size: 16px;"><span class="x_977107523font" style='font-family: "trebuchet ms", arial, helvetica, sans-serif, sans-serif;'><strong><u>Note: (Baggage)</u></strong></span></span></div>
            <p><br></p>
            <div style="font-size: 10pt; font-family: Verdana, Arial, Helvetica, sans-serif;"><span class="x_977107523size" style="font-size: 16px;"><span class="x_977107523font" style='font-family: "trebuchet ms", arial, helvetica, sans-serif, sans-serif;'><strong><u>#1.FLight</u></strong></span></span></div>
            <ul>
            ${attachment
              ?.map((a) => {
                return `
               <li>
                    <div style="font-size: 10pt; font-family: Verdana, Arial, Helvetica, sans-serif;">
                    <span class="x_977107523font" style='font-family: "trebuchet ms", arial, helvetica, sans-serif, sans-serif;'>
                    <span class="x_977107523size" style="font-size: 16px;"><span class="x_15334116font"><span class="x_15334116size">
                    <span class="x_15334116font"><span class="x_15334116size">${a?.originFlightCode}</span></span></span>
                    </span></span></span>-${a?.destinationFlightCode}: Extra Baggage - 15kg&apos;s/Person </div>
                </li>
              `;
              })
              .join("")}
               
              
            </ul>
        </div><br>
    </div>
</div>
<div style="font-family: Lato; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal;  word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
    <div style="font-size: 10pt; font-family: Verdana, Arial, Helvetica, sans-serif;">
        <div style="font-family: Lato; font-size: 14px;">
            <div style="color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: Lato; font-size: 14px;">
                <div style="font-size: 10pt; font-family: Verdana, Arial, Helvetica, sans-serif;"><span class="x_977107523size" style="font-size: 16px;"><span class="x_977107523font" style='font-family: "trebuchet ms", arial, helvetica, sans-serif, sans-serif;'>Apart from this, you have Cabin Baggage with restricted size (No Trolley&apos;s allowed in cabin, instead use Duffle or Backpacks)</span></span><br><br></div>
            </div>
            <div style="color: rgb(0, 0, 0); font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span class="x_977107523size" style="font-size: 16px;"><span class="x_977107523font" style='font-family: "trebuchet ms", arial, helvetica, sans-serif, sans-serif;'>Please let us know if you have any query.&nbsp;</span></span></div>
            <div style="color: rgb(0, 0, 0); font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><br></div>
            <div style="color: rgb(0, 0, 0); font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 13.3333px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span class="x_977107523size" style="font-size: 16px;"><span class="x_977107523font" style='font-family: "trebuchet ms", arial, helvetica, sans-serif, sans-serif;'>Happy Day to you!!</span></span></div>
        </div><br>
    </div>
</div>
<div style={{display: "flex"}}>
 <img src="https://touron.in/static/media/logof.801ade17.png"  width='120px' height='100px'/>
                
 <div>
<p> Best Regards, </p>
<p>Booking Team</p>
<p>tour On (A Brand of Lotsatravel Holidays LLP)</p>
<p>Phone / Whatsapp : +91-9751009800  </p>
<div style={{display: "flex"}}>
<p>Click here for:</p>
<a href="https://www.touron.in/" target="_blank">Website</a>
<a href="https://www.facebook.com/touronholidays" target="_blank">Facebook</a>
<a href="https://www.instagram.com/touronholidays" target="_blank">Instagram</a>

</div>
</div>
 </div>
        
        </body>
            `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
    res.json({ Sucess: "Flight Ticket email sent successfully" }).status(200);
  });
};

router.post("/sendflightemail", async (req, res) => {
  console.log(`req.body`, req.body);
  const { name, email, cc, attachment, onwardDate } = req.body;
  sendmail(name, email, cc, attachment, onwardDate, res);
});

module.exports = router;
