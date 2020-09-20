function mymethod(){
    console.log('hello');
    // var editor = CodeMirror(document.getElementById('codemirror'))
    var editor = CodeMirror.fromTextArea(document.getElementById("editor"),{
        theme : "3024-day",
        lineNumbers:true,
        autoCloseBrackets: true,
        mode: "css",
        smartIndent:true,
        extraKeys: { "Ctrl-Space": "autocomplete" }
       
      });
}