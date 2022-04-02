const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const generateMsg = (members, assignedBy, duration, projectName) => {
  return {
    to: members,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: "Procect Assignment Notification",
    text: `You got Assigned into new Project called "${projectName}", created By ${assignedBy} for ${duration} Months.`,
    html: `<h3>You got Assigned into new Project called <b>"${projectName}"</b>, created By <b>"${assignedBy}"</b> for <b>"${duration}" Months.</b>  </h3>`,
  };
};

const sendMailToAllMembers = async (
  members,
  assignedBy,
  duration,
  projectName
) => {
  //rest operator
  try {
    await sgMail.sendMultiple(
      generateMsg(members, assignedBy, duration, projectName)
    ); //spread operator
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = {
  sendMailToAllMembers,
};
