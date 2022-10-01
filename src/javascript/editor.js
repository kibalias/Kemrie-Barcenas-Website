let toolbaroptions = [
    [{ "font": [] }],
    ["bold", "italic", "underline", "strike"],        // toggled buttons
    ["blockquote", "code-block"],

    [{ "list": "ordered"}, { "list": "bullet" }],
    [{ "script": "sub"}, { "script": "super" }],      // superscript/subscript
    [{ "indent": "-1"}, { "indent": "+1" }],          // outdent/indent
    [{ "direction": "rtl" }],                         // text direction
  
    [{ "size": ["small", false, "large", "huge"] }],  // custom dropdown
    [{ "header": [1, 2, 3, 4, 5, 6, false] }],
  
    [{ "color": [] }, { "background": [] }],          // dropdown with defaults from theme
    [{ "align": [] }],
  
    ["clean"]                                         // remove formatting button
  ];
let quill = new Quill("#editor",{
    modules: {
        toolbar: toolbaroptions,
    },
    theme: 'snow'
})