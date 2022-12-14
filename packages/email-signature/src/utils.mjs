export const base64ToBlob = (base64, contentType = '', sliceSize = 512) => {
	const byteCharacters = atob(base64);
	const byteArrays = [];

	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		const slice = byteCharacters.slice(offset, offset + sliceSize);
		const byteNumbers = new Array(slice.length);

		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}

		byteArrays.push(new Uint8Array(byteNumbers));
	}

	return new Blob(byteArrays, { type: contentType });
};
