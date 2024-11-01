const QRCode = require('qrcode');
// comment

exports.formatData = (data) => {
    const qrCodeText = `Product ID: ${data.id}, Price: $${data.price}`;
    return qrCodeText;
};

exports.generateQRCode = async (qrCodeText) => {
    const options = {
        errorCorrectionLevel: 'M',
        type: 'image/jpg',
        margin: 1
    };

    const qrCodeBuffer = await QRCode.toBuffer(qrCodeText, options);
    return qrCodeBuffer;
};
