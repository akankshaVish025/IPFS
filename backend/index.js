const express = require('express');
const bodyParser = require('body-parser');
const ipfsAPI = require('ipfs-api');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});
require("dotenv").config();
const port = process.env.PORT;
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const ipfs = ipfsAPI({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: `Basic ${Buffer.from(
        `${process.env.INFURA_API_KEY}:${process.env.INFURA_API_SECRET}`
      ).toString("base64")}`,
    },
  });

app.post('/upload-nft', upload.array('file'), async (req, res) => {
  try {
    // Assuming the request body contains the metadata and image data in base64 format
    const metadata = {
        name: req.body.name,
        assetId: req.body.assetId,
        description: req.body.description, 
    };
    let files = req.files;

    // Decode base64 data to Buffer
    // const metadataBuffer = Buffer.from(JSON.stringify(metadata, 'base64'));
    const imageBuffer = await new Promise((resolve, reject) => {
        fs.readFile(files[0].path, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });

    // Upload metadata and image to IPFS
    const imageResult = await ipfs.add(imageBuffer, { wrapWithDirectory: false });
    // Add image to metadata
    metadata.image = `ipfs://${imageResult[0].hash}`; 
    const metadataResult = await ipfs.add(Buffer.from(JSON.stringify(metadata)));

    // Create gateway URLs for metadata and image
    const metadataGatewayURL = `https://mynew-nft.infura-ipfs.io/ipfs/${metadataResult[0].hash}`;
    const imageGatewayURL = `https://mynew-nft.infura-ipfs.io/ipfs/${imageResult[0].hash}`;



    const nftData = {
      metadataCID: metadataResult[0].hash,
      imageCID: imageResult[0].hash,
      metadataURL: metadataGatewayURL,
      imageURL: imageGatewayURL,
    };

    res.json(nftData);
  } catch (err) {
    console.error('Error uploading NFT:', err);
    res.status(500).json({ error: 'Error uploading NFT' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
