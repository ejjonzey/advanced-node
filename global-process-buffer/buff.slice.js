// when we do a slice operation on a buffer, the sliced buffer shares memory with original buffer

const fs = require('fs');

const conversionMap = {
    '88': '65',
    '89': '66',
    '90': '67',
};

fs.readFile(__filename, (err, buffer)=>{
    let tag = buffer.slice(-4. -1);

    for(let i=0;i < tag.length; i++){
        tag[i] = conversionMap[tag[i]];
    }

    console.log(buffer.toString());
});

// TAG: XYZ