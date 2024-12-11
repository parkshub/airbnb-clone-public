export const editorConfig = {
	style: { font: "18px proxima-nova", },
	readonly: false,
	toolbar: true,
	spellcheck: true,
	language: 'en',
	toolbarButtonSize: 'medium',
	// toolbarAdaptive: false,
	showCharsCounter: true,
	showWordsCounter: true,
	showXPathInStatusbar: false,
	askBeforePasteHTML: true,
	askBeforePasteFromWord: true,
	//defaultActionOnPaste: "insert_clear_html",
    buttons: [
        'source', '|',
        'bold',
        'underline',
        'italic', '|',
        'ul',
        'ol', '|',
        'outdent', 'indent',  '|',
        'font',
        'fontsize',
        'brush',
        'paragraph', '|',
        'image',
        'link', '|',
        'align', 'undo', 'redo', '|',
        'hr',
        'eraser',
        'copyformat', '|',
        // 'symbol',
        'fullsize',
        // 'print',
        'preview',
		// 'save'
        // 'about'
    ],
	// extraButtons: ['uploadImage'],
	uploader: {
		insertImageAsBase64URI: true,
	},
	width: 800,
	minHeight: 400,
	controls: {
		font: {
			command: 'fontname',
			list: {
				"'Open Sans',sans-serif": 'Open Sans',
				'Helvetica,sans-serif': 'Helvetica',
				'Arial,Helvetica,sans-serif': 'Arial',
				'Georgia,serif': 'Georgia',
				'Impact,Charcoal,sans-serif': 'Impact',
				'Tahoma,Geneva,sans-serif': 'Tahoma',
				"'Times New Roman',Times,serif": 'Times New Roman',
				'Verdana,Geneva,sans-serif': 'Verdana',
				'Consolas,monaco,monospace': 'Consolas'
			}
		},

		// uploadImage: {
		// 		name: 'upload image to cloudinary',
		// 		iconurl: "https://www.kindpng.com/picc/m/261-2619141_cage-clipart-victorian-cloud-upload-icon-svg-hd.png",
		// 		exec: async function(editor) {
		// 			await uploaderObject.imageupload(editor);
		// 		}
		// }, 

// 		imageupload: (editor) => {
    
//             const input = document.createelement('input');
//             input.setattribute('type', 'file');
//             input.setattribute('accept', 'image/*');
//             input.click();
    
//             input.onchange = async function () {
    
//                 const imagefile = input.files[0];
    
//                 if (!imagefile) {
//                     return;
//                 }
    
//                 if (!imagefile.name.match(/\.(jpg|jpeg|png)$/)) {
//                     return;
//                 }
    
//                 const imageinfo = await fileupload(imagefile);;
    
//                 this.insertimage(editor, imageinfo.url);
    
//             }.bind(this);
//         },

// //this method insert the image inside the editor after the upload is done.
//         insertimage: (editor, url) => {
//             const image = editor.selection.j.createinside.element('img');
//             image.setattribute('src', url);
//             editor.selection.insertnode(image);
//         },

// // this method send the image to cloudinary
//     	fileupload: async (file) => {
// 			let result = null;
		
// 			let formdata = new formdata();
// 			formdata.append('file', file);
// 			formdata.append('upload_preset', `${process.env.REACT_APP_CLOUD_PRESET}`);
		
// 			await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, {
// 				method: 'post',
// 				body: formdata
// 			})
// 				.then((response) => response.json())
// 				.then((data) => {
// 					result = data;
// 				})
// 				.catch((error) => {
// 					console.error('error:', error);
// 				});
		
// 			return result;
// 		}
	}
};