const parent = React.createElement(
"div",
{id:"parent"},
React.createElement(
    "div",
    {id:"child1"},
[React.createElement("h1",{},"I am an h1 tag"),
 React.createElement("h2",{},"I am an h2 tag"),
 React.createElement("h3",{},"I am an h3 tag"),
 React.createElement("h4",{},"I am an h4 tag")
],
React.createElement(
    "div",
    {id:"child2"},
[React.createElement("h1",{},"I am an h1 tag"),
 React.createElement("h2",{},"I am an h2 tag"),
 React.createElement("h3",{},"I am an h3 tag"),
 React.createElement("h4",{},"I am an h4 tag")
]
)
)
);


// That why Jsx exist to reduse the structure more easier than complicated


console.log(parent) //object
const root =ReactDOM.createRoot(document.getElementById("root")) ;
root.render(parent)



/**
 * 
 * <div id = "parent">
 *  <div id = "child">
 *      <h1></h1>
 * 
 * 
 * 
 **/