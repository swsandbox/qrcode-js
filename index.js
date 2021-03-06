
var qrcode = require('./lib/qrcode.js');

module.exports = {
    typeNumber: 4,
    errorCorrectLevel: 'L',
    toBase64: function(text, size, margin){
        var qr = qrcode(this.typeNumber, this.errorCorrectLevel);
        qr.addData(text);
        qr.make();
        var base64 = qr.createImgBase64(size, margin);
        return base64;
    },
    toDataURL: function(text, size, margin){
        var base64 = this.toBase64(text, size, margin);        
        var dataURL = 'data:image/gif;base64,' + base64; 
        return dataURL;
    }
};
