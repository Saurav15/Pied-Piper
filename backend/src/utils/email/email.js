const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const generateMsg = (members, subject, text, html) => {
  return {
    to: members,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject,
    text,
    html,
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
    const subject = "Procect Assignment Notification";
    const text = `You got Assigned into new Project called "${projectName}", created By ${assignedBy} for ${duration} Months.`;
    const html = `<p>You got Assigned into new Project!. <br/> <strong> Project Title : </strong>  <b>"${projectName}"</b> <br/> <strong> Assigned By : </strong>  <b>${assignedBy}</b> </br> <strong> Duration : </strong> <b>${duration}</b> Months.</b>  </h3>`;
    await sgMail.sendMultiple(generateMsg(members, subject, text, html)); //spread operator
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const sendInvitationMailToMember = async (
  memberMail,
  memberName,
  memberPassword
) => {
  try {
    const subject = "Created Account At Simform";
    const text = `${memberName}, Your account is created at Simform. This mail contains your login credentials. username: ${memberMail}, password: ${memberPassword} .Please use that to access your dashboard and update your profile as soon as possible.`;
    const html = `<p>${memberName}, Your account is created at Simform. <br />This mail contains your login credentials. <br /> <strong>username :</strong> <b>${memberMail}</b> <br /> <strong>password : </strong> <b>${memberPassword}</b> <br/> <i>Please use that to access your dashboard and update your profile as soon as possible.</i> </p>`;
    await sgMail.send(generateMsg(memberMail, subject, text, html));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  sendMailToAllMembers,
  sendInvitationMailToMember,
};
