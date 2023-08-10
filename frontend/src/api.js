const baseUrl = 'http://localhost:8000'; // Update with your backend URL

export async function uploadFile(file) {
    try {
        const formDataObj = new FormData();
        formDataObj.append('name', file.name);
        formDataObj.append('assetId', file.assetId);
        formDataObj.append('description', file.description);
        formDataObj.append('file', file.image);

        const response = await fetch(`${baseUrl}/upload-nft`, {
            method: 'POST',
            body: formDataObj,
        });

        if (response.ok) {
            console.log('Form data and image submitted successfully');
            return response.json();
            // Reset the form or perform any other actions
        } else {
            console.error('Form data and image submission failed');
            return null; // Handle the error case
        }
    } catch (error) {
        console.error('Error submitting form data and image:', error);
        return null; // Handle the error case
    }
}
