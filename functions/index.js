const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

exports.sendInstrumentSubmission = functions.https.onCall(async (data, context) => {
    const { instrumentName, description, french, german, italian, spanish } = data;

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "jarne.claesen@gmail.com",
            pass: "tmmq eawm tlvx qsxv",
        },
    });

    try {
        // Generate a unique submission ID
        const submissionRef = admin.firestore().collection("PendingInstruments").doc();
        const submissionId = submissionRef.id;

        // Store the instrument details in the "PendingInstruments" collection
        await submissionRef.set({
            instrumentName,
            description,
            french,
            german,
            italian,
            spanish,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });

        const approveRejectUrl = 'http://localhost:8080/approve-reject.html';

        const mailOptions = {
            from: "jarne.claesen@gmail.com",
            to: "jarne.claesen@gmail.com",
            subject: "New Instrument Submission",
            html: `
                <h2>New Instrument Submission</h2>
                <p>Instrument Name: ${instrumentName}</p>
                <p>Description: ${description}</p>
                <p>French: ${french}</p>
                <p>German: ${german}</p>
                <p>Italian: ${italian}</p>
                <p>Spanish: ${spanish}</p>
                <p>Submission ID: ${submissionId}</p>
                <p>To approve or reject this submission, visit: <a href="${approveRejectUrl}">${approveRejectUrl}</a></p>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");

        return { message: "Instrument submission sent successfully" };
    } catch (error) {
        console.error("Error sending email or storing instrument:", error);
        throw new functions.https.HttpsError("internal", "Error sending email or storing instrument");
    }
});

exports.approveInstrument = functions.https.onCall(async (data, context) => {
    const submissionId = data.submissionId;

    try {
        const pendingInstrumentDoc = await admin.firestore().collection("PendingInstruments").doc(submissionId).get();

        if (!pendingInstrumentDoc.exists) {
            throw new functions.https.HttpsError("not-found", "Instrument submission not found.");
        }

        const instrumentData = pendingInstrumentDoc.data();
        await admin.firestore().collection("Instruments").add(instrumentData);
        await pendingInstrumentDoc.ref.delete();

        return { message: "Instrument approved and added to the database." };
    } catch (error) {
        console.error("Error approving instrument:", error);
        throw new functions.https.HttpsError("internal", "Error approving instrument.");
    }
});

exports.rejectInstrument = functions.https.onCall(async (data, context) => {
    const submissionId = data.submissionId;

    try {
        const pendingInstrumentDoc = await admin.firestore().collection("PendingInstruments").doc(submissionId).get();

        if (!pendingInstrumentDoc.exists) {
            throw new functions.https.HttpsError("not-found", "Instrument submission not found.");
        }

        await pendingInstrumentDoc.ref.delete();

        return { message: "Instrument submission rejected and removed." };
    } catch (error) {
        console.error("Error rejecting instrument:", error);
        throw new functions.https.HttpsError("internal", "Error rejecting instrument.");
    }
});
