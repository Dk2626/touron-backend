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

const sendmail = (name, email, cc, attachment, destination, res) => {
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
    subject: `Hotel Booking Confirmation - ${destination} !`,
    attachments: pdfs,
    html: `<body style="margin: 0; padding: 0;"> 
      <p>Dear ${name},<p>
<p>Greetings! Hope you are doing well!!<p>
<p>We have completed booking your resort for your travel dates as below</p>



${attachment
  ?.map((a) => {
    return `
    <p>
      <span style="color: #0000ff;">
        <strong>
          <span class="x_-1266463454highlight">
            <span class="x_-1266463454colour">${a?.hotelName}</span>
          </span>
        </strong>
      </span>
      |
      <span>
        ${a?.checkIn} - ${a?.checkOut}
      </span>
      <span style="color: #ff0000;">
        <strong>
          <span class="x_-1266463454colour">
            <em>
              <strong>
                <span class="x_-1266463454colour">
                  <em>(${a?.mealPlan})</em>
                </span>
              </strong>
            </em>
          </span>
        </strong>
      </span>
    </p>
    `;
  })
  .join("")}

<p>Please find the attached confirmation voucher & feel free to reach us for any queries</p>
<p>Happy Day to you!! <p>
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

router.post("/sendhotelemail", async (req, res) => {
  console.log(`req.body`, req.body);
  const { name, email, cc, attachments, destination } = req.body;
  sendmail(name, email, cc, attachments, destination, res);
});

module.exports = router;
